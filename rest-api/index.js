import express from "express";
import bodyParser from "body-parser";
import pokemonRoutes from "./routes/pokemon.js";
// import db from "./db.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/pokemon", pokemonRoutes);


// // corrects error for "require is undefined"
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// // configures database connection
const { Pool } = require('pg');

const pool = new Pool({
    user: "tpl622_3",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "pokemon"
});
pool.connect();

// creates route to access SQL table in pokemon database
app.get('/pokemondb', (req, response) => {
    pool.query(`SELECT * FROM pokemon`, (error, results) => {
        if (error) {
            throw error
        } 
        response.status(200).json(results.rows)
    })
})

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



