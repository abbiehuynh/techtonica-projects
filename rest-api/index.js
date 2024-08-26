import express from "express";
import bodyParser from "body-parser";
import pokemonRoutes from "./routes/pokemon.js";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/pokemon", pokemonRoutes);

// create route for homepage
app.get("/", (req, res) => {
    res.send("Welcome to Abbie's Pokemon Database! Go to /pokemon to check out the current collection!");
});



app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));


