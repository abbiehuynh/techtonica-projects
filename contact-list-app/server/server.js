const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hello, from ExpressJS with React-Vite' });
});

// create the get request for the contact list in the endpoint '/contacts'
app.get('/contacts', async (req, res) => {
    try {
        const { rows: contacts } = await db.query('SELECT * FROM public.contacts');
        res.send(contacts);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// create get request for contact's personal details in the endpoint /contacts/personal-details
app.get('/contacts/personal-details', async (req, res) => {
    try {
        const { rows: personal_details } = await db.query('SELECT * FROM public.personal_details');
        res.send(personal_details);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// create get request for contact's work details in the endpoint /contacts/work-details
app.get('/contacts/work-details', async (req, res) => {
    try {
        const { rows: work_details } = await db.query('SELECT * FROM public.work_details');
        res.send(work_details);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// create get request for ALL three tables - contacts, personal_details, and work_details
app.get('/contacts/details', async (req, res) => {
    try {
        const { rows: contact_details } = await db.query(
            `SELECT public.contacts.id, public.contacts.name, public.contacts.email, public.contacts.phone_number, public.contacts.notes,
                public.personal_details.location, public.personal_details.notes, public.work_details.occupation, public.work_details.location
            FROM public.contacts
            INNER JOIN public.personal_details ON public.contacts.id = public.personal_details.id
            INNER JOIN public.work_details ON public.work_details.id = public.contacts.id;`);
        res.send(contact_details);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// create the POST request
app.post('/contacts/details', async (req, res) => {
    try {
        // create new contact
        const newContact = {
            name: req.body.id, 
            email: req.body.email,
            phone_number: req.body.phone_number,
            notes: req.body.notes,
            location: req.body.location,
            occupation: req.body.occupation
        };
        
        // insert into public.contacts table
        const contactsResult = await db.query(
            `INSERT INTO public.contacts(name, email, phone_number) 
                VALUES($1, $2, $3) RETURNING id`,
            [newContact.name, newContact.email, newContact.phone_number]
        );

        // creates new id
        let contactsId = contactsResult.rows[0].id;

        // insert into public.personal_details table
        const personalDetailsResult = await db.query(
            `INSERT INTO public.personal_details(id, notes, location) 
                VALUES($1, $2, $3) RETURNING id`,
            [contactsId, newContact.notes, newContact.location]
        );

        // insert into public.work_details table
        const workDetailsResult = await db.query(
            `INSERT INTO public.work_details(id, occupation)
                VALUES($1, $2) RETURNING id`,
            [contactsId, newContact.occupation]
        );

        // creates response with created contact details
        res.status(201).json({
            contact: contactsResult.rows[0],
            personalDetails: personalDetailsResult.rows[0],
            workDetails: workDetailsResult.rows[0],
        });

        // console.log("New Contact Uploaded: ", contactResults.rows[0]);
        // res.json(contactResults.rows[0]);

    } catch (error) {
        console.error("Error Uploading New Contact: ", error);
        return res.status(400).json({ error: 'An error has occured while processing your post request.' });
    }
});

// delete request for students
app.delete('/api/students/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;
        await db.query('DELETE FROM students WHERE id=$1', [studentId]);
        console.log("From the delete request-url", studentId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

//A put request - Update a student 
app.put('/api/students/:studentId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const studentId = req.params.studentId
    const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
    const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hello, Server listening on ${PORT}`);
});