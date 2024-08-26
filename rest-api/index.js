import express from "express";
import bodyParser from "body-parser";
import pokemonRoutes from "./routes/pokemon.js";
// import 'doteng/config';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/pokemon", pokemonRoutes);

// module.exports = {
//     query: (text, params) => pool.query(text, params)
// };



// create route for homepage
app.get("/", (req, res) => {
    res.send("Welcome to Abbie's Pokemon Database! Go to /pokemon to check out the current collection!");
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));



