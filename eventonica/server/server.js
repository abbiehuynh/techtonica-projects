const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const db = require('/Users/tpl622_3/techtonica/techtonica-projects/eventonica/server/db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

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

// creates a GET request for event by id
app.get('/api/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const result = await db.query('SELECT * FROM events WHERE id=$1', [eventId]);
        console.log("Access to Event Id:", eventId);
        
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch(error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

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
        const result = await db.query(
            'INSERT INTO events(id, eventName, category, eventDate, eventTime, eventLocation) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
            [newEvent.id, newEvent.eventname, newEvent.category, newEvent.eventdate, newEvent.eventtime, newEvent.location],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);
        // res.send(`Event with id ${ newEvent.id } and ${ newEvent.eventname } added to event database.`)

    } catch(error) {
        console.log(error);
        return res.status(400).json({ error });
    }

});

// creates DELETE request to remove events by id
app.delete('/api/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        await db.query('DELETE FROM events WHERE id=$1', [eventId]);
        console.log("From the delete request-url", eventId);
        res.status(200).end();
    } catch(error) {
        console.log(error);
        return res.status(400).json({ error });
    }
});

// creates a PUT request to update events by id
app.put('/api/events/:eventId', async (req, res) =>{
    //console.log(req.params);
    const eventId = req.params.eventId;
    const updatedEvent = { 
        id: req.body.id,
        eventname: req.body.eventname,
        category: req.body.category, 
        eventdate: req.body.eventdate,
        eventtime: req.body.eventtime,
        eventlocation: req.body.eventlocation
    };

    console.log("In the server from the url - the event id", eventId);
    console.log("In the server, from the react - the event to be edited", updatedEvent);
    
    // updates events WHERE id, eventname, catgory, eventdate, eventtime, and eventlocation are set to "something"
    const query = `UPDATE events SET id=$1, eventname=$2, category=$3, eventdate=$4, eventtime=$5, eventlocation=$6 WHERE id=${eventId} RETURNING *`;
    const values = [
        updatedEvent.id, 
        updatedEvent.eventname, 
        updatedEvent.category, 
        updatedEvent.eventdate, 
        updatedEvent.eventtime, 
        updatedEvent.eventlocation
    ];
    
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
    console.log(`Server listening on Port:${PORT}`);
});