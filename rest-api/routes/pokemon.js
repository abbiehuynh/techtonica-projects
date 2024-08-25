import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const pokemon = [];

// create get route to get all pokemon data
router.get("/", (req, res) => {
    console.log(pokemon);

    res.send(pokemon);
})

// create post route to add pokemon data to database
router.post("/", (req, res) => {
    // console.log("POST ROUTE REACHED");

    // access and add pokemon data (no. 13) from postman to database
    const newPokemon = req.body;

    // create an id for each pokemon
    const pokemonId = { ...newPokemon, id: uuidv4() }
    pokemon.push(pokemonId);

    res.send(`Pokemon with the order no. ${newPokemon.order} and name ${newPokemon.name} added to the database! Gotta Catch em' all!`);
});

// create get route to access pokemon by Id
router.get('/:id', (req, res) => {
   const { id } = req.params;

   const findPokemon = pokemon.find((newPokemon) => newPokemon.id === id);
    res.send(findPokemon);
})

// create delete route to delete pokemon data from database
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // deletes if false => id === id; if true keeps id
    pokemon = pokemon.filter((newPokemon) => newPokemon.id !=== id);

    res.send(`Pokemon with the id ${id} deleted from the database. Until next time, bye bye!`);
}); 


// create route 

export default router;

// {
//     "order": 13,
//     "name": "Weedle",
//     "type": "Bug and Poison",
//     "evolutionStage": "Basic"
// }