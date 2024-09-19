const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const db = require('./db/db-connection.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hello, from ExpressJS with React-Vite' });
});

// create the get request for spieces in the endpoint '/spieces'
app.get('/species', async (req, res) => {
    try {
        const { rows: species } = await db.query('SELECT * FROM species');
        res.send(species);
    } catch (e) {
        console.log(error);
        return res.status(400).json({ e });
    }
});

// create the get request for individuals in the endpoint '/individuals'
app.get('/species/individuals', async (req, res) => {
    try {
        const { rows: individuals } = await db.query('SELECT * FROM individuals');
        res.send(individuals);
    } catch (e) {
        console.log(error);
        return res.status(400).json({ e });
    }
});

// create the get request for sightings in the endpoint '/sightings'
app.get('/species/sighting', async (req, res) => {
    try {
        const { rows: sightings } = await db.query('SELECT * FROM sightings');
        res.send(sightings);
    } catch (e) {
        console.log(error);
        return res.status(400).json({ e });
    }
});

// using join to fetch data from 3 tables - species, individuals, and sightings
// create the get request for tracker in the endpoint '/tracker'
app.get('/species/sightings', async (req, res) => {
    try {
        const { rows: sightings } = await db.query(
            `SELECT sightings.id, sightings.date_of_sighting, sightings.individual_seen, individuals.species, sightings.location_of_sighting, sightings.is_healthy, sightings.email, sightings.image_url
            FROM sightings 
            INNER JOIN individuals ON sightings.individual_seen = individuals.nickname
            INNER JOIN species ON individuals.species = species.scientific_name;`);
        res.send(sightings);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// // create POST request for animal tracker
// app.post('/species/tracker', async (req, res) => {
//     try {

//         // Insert into individual table
//         const individualResult = await db.query(
//             `INSERT INTO individual (species, record_creation_timestamp)
//              VALUES($1, $2) RETURNING id`,
//             [req.body.species, req.body.record_creation_timestamp]
//         );

//         const individualId = individualResult.rows[0].id;
//         console.log(individualId);

//         // prepares data for sightings table
//         const tracker = {
//             date_of_sighting: req.body.date_of_sighting,
//             individual_seen: req.body.individual_seen,
//             location_of_sighting: req.body.location_of_sighting,
//             is_healthy: req.body.is_healthy,
//             email: req.body.email,
//             individualId
//         };

//         // insert into sightings table
//         const result = await db.query(
//             `INSERT INTO 
//                 sightings(id, date_of_sighting, individual_seen, location_of_sighting, is_healthy, email) 
//             VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
//             [
//                 tracker.date_of_sighting, 
//                 tracker.individual_seen,
//                 tracker.individualId, 
//                 tracker.speciesName, 
//                 tracker.location_of_sighting, 
//                 tracker.is_healthy, 
//                 tracker.email
//             ]
//         );

//         console.log(result.rows[0]);
//         res.json(result.rows[0]);

//     } catch (error) {
//         console.log(error);
//         return res.status(400).json({ error: 'An error occurred while processing your request.' });

//     }

// });

// // delete request for students
// app.delete('/api/students/:studentId', async (req, res) => {
//     try {
//         const studentId = req.params.studentId;
//         await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//         console.log("From the delete request-url", studentId);
//         res.status(200).end();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });

//     }
// });

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
    console.log(`Animal Sighting Tracker Server listening on ${PORT}`);
});