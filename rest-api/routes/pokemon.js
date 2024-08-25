import express from "express";
import { v4 as uuidv4 } from "uuid";

import { getPokemon, createPokemon } from "../controllers/pokemon.js";

const router = express.Router();

let pokemon = [];

// create get route to get all pokemon data
router.get("/", getPokemon);

// create post route to add pokemon data to database
router.post("/", createPokemon);

    

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
    pokemon = pokemon.filter((newPokemon) => newPokemon.id !== id);

    res.send(`Pokemon with the id ${id} deleted from the database. Until next time, bye bye!`);
}); 

// put route - changes the entire 
// patch route - changes an attribute 

// create patch route to update pokemon data
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { order, name, type, evolutionStage } = req.body;
    
    const newPokemon = pokemon.find((newPokemon) => newPokemon.id === id);

    if (order) newPokemon.order = order;
    if (name) newPokemon.name = name;
    if (type) newPokemon.type = type;
    if (evolutionStage) newPokemon.evolutionStage = evolutionStage;

    res.send(`Pokemon with the id ${id} and order no. ${newPokemon.order} has been updated!`);

});

export default router;

// {
//     "order": 13,
//     "name": "Weedle",
//     "type": "Bug and Poison",
//     "evolutionStage": "Basic"
// }