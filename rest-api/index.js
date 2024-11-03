const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon.js');

require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/pokemon", pokemonRoutes);

// creates route to access SQL table in pokemon database
app.get('/pokemondb', (req, response) => {
    try {
        const results = db.query(`SELECT * FROM pokemon`);
        response.status(200).json(results.rows);
    } catch (error) {
        console.error("Query error:", error);
        response.status(500).send("Internal Server Error");
    }
});

// create route to access SQL table in pokemon database
// app.get('/pokemondb', async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM pokemon');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Internal Server Error");
//     }
// });

// create route for homepage
app.get("/", (req, res) => {
    res.send("Welcome to Abbie's Pokemon Database! Go to /pokemon to check out the current collection!");
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));



