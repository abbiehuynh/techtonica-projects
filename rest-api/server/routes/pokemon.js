const express = require('express');
const { getPokemon, createPokemon, getPokemonUniqueId, deletePokemon, updatePokemon } = require('../controllers/pokemon.js');

const app = express.Router();

// create get route to get all pokemon data
app.get("/", getPokemon);


// corrects error for "require is undefined"
// import pg from "pg";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const db = new pg.Pool({

// })

// router.get('/', async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM pokemon');
//         res.json(result.rows);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Internal Server Error");
//     }
// });


// create post route to add pokemon data to database
app.post("/", createPokemon);

// create get route to access pokemon by Unique Id
app.get('/:id', getPokemonUniqueId);

// create get route to access pokemon by Order no
// router.get('/:order', getPokemonOrder);

// create delete route to delete pokemon data from database
app.delete('/:id', deletePokemon);

// create patch route to update pokemon data
app.patch('/:id', updatePokemon);

module.exports = app;