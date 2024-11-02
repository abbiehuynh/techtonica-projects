const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const getTrivia = require('./routes/game.js');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hello, from ExpressJS with React-Vite' });
});

// creates get route to retrieve data from TRIVIA API
app.use('/api/game', getTrivia)

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Trivia Game App Server listening on ${PORT}`);
});