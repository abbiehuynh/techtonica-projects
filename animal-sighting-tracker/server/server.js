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
// create the get request for sightings in the endpoint 'species/sightings'
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

// create POST request for animal sightings 
app.post('/species/sightings', async (req, res) => {
    try {
        // creates new sighting
        const newSighting = {
            id: req.body.id,
            individual_seen: req.body.individual_seen,
            species: req.body.species,
            date_of_sighting: req.body.date_of_sighting,
            location_of_sighting: req.body.location_of_sighting,
            is_healthy: req.body.is_healthy,
            email: req.body.email,
            image_url: req.body.image_url
        };
        
        // insert into individuals table
        const individualResult = await db.query(
            `INSERT INTO individuals(species) VALUES($1) RETURNING id`,
            [newSighting.species]
        );
        // creates new id
        let sightingsId = individualResult.rows[0].id;

        // insert into sightings table
        const sightingResult = await db.query(
            `INSERT INTO 
                sightings(id, individual_seen, date_of_sighting, location_of_sighting, is_healthy, email, image_url) 
            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [
                sightingsId,
                newSighting.individual_seen,
                newSighting.date_of_sighting, 
                newSighting.location_of_sighting, 
                newSighting.is_healthy, 
                newSighting.email,
                newSighting.image_url
            ]
        );

        console.log("New Sighting Uploaded: ", sightingResult.rows[0]);
        res.json(sightingResult.rows[0]);

    } catch (error) {
        console.log("Error Uploading New Sighting: ", error);
        return res.status(400).json({ error: 'An error occurred while processing your request.' });
    }
});

// delete request for sightings
app.delete('/species/sightings/:sightingId', async (req, res) => {
    try {
        const sightingId = req.params.sightingId;
        await db.query('DELETE FROM sightings WHERE id=$1', [sightingId]);
        console.log("From the delete request-url", sightingId);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'An error occured while processing your request to delete sighting' });

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
    console.log(`Animal Sighting Tracker Server listening on ${PORT}`);
});