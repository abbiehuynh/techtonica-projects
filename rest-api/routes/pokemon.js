import express from "express";

const router = express.Router();

const pokemon = [
  { 
    order: 1,
    name: "Bulbasaur",
    type: "Grass and Poison",
    evolutionStage: "Basic"
  }, 
  {
    order: 2,
    name: "Ivysaur",
    type: "Grass and Poison",
    evolutionStage: "Stage 1"
},
{
    order: 3,
    name: "Venusaur",
    type: "Grass and Poison",
    evolutionStage: "Stage 2"
},
{
    order: 4,
    name: "Charmander",
    type: "Fire",
    evolutionStage: "Basic"
},
{
    order: 5,
    name: "Charmeleon",
    type: "Fire",
    evolutionStage: "Stage 1"
},
{
    order: 6,
    name: "Charizard",
    type: "Fire and Flying",
    evolutionStage: "Stage 2"
},
{
    order: 7,
    name: "Squirtle",
    type: "Water",
    evolutionStage: "Basic"
},
{
    order: 8,
    name: "Wartortle",
    type: "Water",
    evolutionStage: "Stage 1"
},
{
    order: 9,
    name: "Blastoise",
    type: "Water",
    evolutionStage: "Stage 2"
},
{
    order: 10,
    name: "Caterpie",
    type: "Bug",
    evolutionStage: "Basic"
},
{
    order: 11,
    name: "Metapod",
    type: "Bug",
    evolutionStage: "Stage 1"
},
{
    order: 12,
    name: "Butterfree",
    type: "Bug and Flying",
    evolutionStage: "Stage 2"
}
]

// create get route to get all pokemon data
router.get("/", (req, res) => {
    console.log(pokemon);

    res.send(pokemon);
})

// create post route to add pokemon data to database
router.post("/", (req, res) => {
    // console.log("POST ROUTE REACHED");

    // access and add pokemon data (no. 13) from postman to database
    const pokemonInPostman = req.body;

     // create an id for each pokemon
     const pokemonId = uuidv4();
     const pokemonWithId = { ...pokemon, id: pokemonId 

    pokemon.push(pokemonWithId);

    res.send("pokemon with info");
});

export default router;