const express = require('express');
const app = express.Router();

const db = require('../db/db-connection.js');

// endpoint /testTable

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

module.exports = app;