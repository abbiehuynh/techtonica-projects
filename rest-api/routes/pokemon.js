import express from "express";

import { getPokemon, createPokemon, getPokemonId, deletePokemon } from "../controllers/pokemon.js";

const router = express.Router();

let pokemon = [];

// create get route to get all pokemon data
router.get("/", getPokemon);

// create post route to add pokemon data to database
router.post("/", createPokemon);

// create get route to access pokemon by Id
router.get('/:id', getPokemonId);

// create delete route to delete pokemon data from database
router.delete('/:id', deletePokemon);

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