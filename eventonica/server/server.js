const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hello, from ExpressJS with React-Vite' });
});

// creates get request for events in the endpoint '/api/events'
app.get('/api/events', async (req, res) => {
    try {
        const { rows: events } = await db.query('SELECT * FROM events');
        res.send(events);
    } catch(error) {
        console.log(error);
        return res.status(400).json({error});
    }
})

// creates POST request to create new events
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = {
            id: req.body.id,
            eventname: req.body.eventname,
            category: req.body.category, 
            eventdate: req.body.eventdate,
            eventtime: req.body.eventtime,
            eventlocation: req.body.eventlocation
        };
        // console.log([newEvent.id, newEvent.eventname, newEvent.category, newEvent.eventdate, newEvent.eventtime, newEvent.location]);
        const result = await pool.query(
            'INSERT INTO events(id, eventName, category, eventDate, eventTime, eventLocation) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [newEvent.id, newEvent.eventname, newEvent.category, newEvent.eventdate, newEvent.eventtime, newEvent.location],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);
        res.send(`Event with id ${ newEvent.id } and ${ newEvent.eventname } added to event database.`)

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// creates DELETE request to remove events by id
app.delete('/api/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.id;
        await pool.query('DELETE FROM events WHERE id=$1', [id]);
        console.log("From the delete request-url", eventId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

// //A put request - Update a student 
// app.put('/api/students/:studentId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the student to be updated
//     const studentId = req.params.studentId
//     const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
//     console.log("In the server from the url - the student id", studentId);
//     console.log("In the server, from the react - the student to be edited", updatedStudent);
//     // UPDATE students SET lastname = "something" WHERE id="16";
//     const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//     const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
//     try {
//       const updated = await db.query(query, values);
//       console.log(updated.rows[0]);
//       res.send(updated.rows[0]);
  
//     }catch(e){
//       console.log(e);
//       return res.status(400).json({e})
//     }
//   })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on Port:${PORT}`);
});