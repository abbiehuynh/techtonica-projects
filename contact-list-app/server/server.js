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

// test get request to tables in database
const testTableRoutes = require('./routes/testTableRoutes.js');
app.use('/testTable', testTableRoutes);

// for what is shown in contact list 
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


// for contact details page
// create get request for contact details by contactId - JOIN tables - contacts, personal_details, and work_details
app.get('/contacts/:contactId/details', async (req, res) => {
    const contactId = req.params.contactId;
    try {
        const { rows: contact_details } = await db.query(
            `SELECT 
                public.contacts.id, 
                public.contacts.name, 
                public.contacts.email, 
                public.contacts.phone_number, 
                public.contacts.notes AS contact_notes,
                public.personal_details.location AS home_location, 
                public.personal_details.notes AS personal_notes, 
                public.work_details.occupation, 
                public.work_details.location AS work_location
            FROM public.contacts
            INNER JOIN 
                public.personal_details ON public.contacts.id = public.personal_details.id
            INNER JOIN 
                public.work_details ON public.work_details.id = public.contacts.id
            WHERE 
                public.contacts.id = $1;`, [contactId]
            );
        res.send(contact_details);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// *** COME BACK TO FIX POST REQUEST
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

// creates delete request for contact
app.delete('/contacts/details/:contactId', async (req, res) => {
    try {
        const contactId = req.params.contactId;
        // const contactName = req.body.name;
        await db.query('DELETE FROM public.contacts WHERE id=$1', [contactId]);
        
        res.send(`Contact with id ${contactId} has been deleted`)
        console.log("From the delete request-url", contactId);
        res.status(200).end();
    } catch (error) {
        console.error("Error Deleting Contact: ", error);
        return res.status(400).json({ error: 'An error has occured while processing your delete request.' });

    }
});

// creates a put request to update a contact
app.put('/contacts/details/:contactId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const contactId = req.params.contactId
    const updatedContact = { 
        name: req.body.id, 
        email: req.body.email,
        phone_number: req.body.phone_number,
        notes: req.body.notes,
        location: req.body.location,
        occupation: req.body.occupation
    }

    console.log("In the server from the url - the contact id", contactId);
    console.log("In the server, from the react - the contact to be edited", updatedContact);
    
    const query = `UPDATE contacts SET name=$1, email=$2, phone_number=$3, notes=$4, occupation=$5 WHERE id=${contactId} RETURNING *`;
    const values = [
        contactsId,
        updatedContact.name, 
        updatedContact.email,
        updatedContact.phone_number,
        updatedContact.notes,
        updatedContact.location,
        updatedContact.occupation
    ];

    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(error){
      console.error("Error Uploading Updated Contact: ", error);
      return res.status(400).json({error: 'An error occured while processing your put request.'});
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Contact List App Server listening on ${PORT}`);
});