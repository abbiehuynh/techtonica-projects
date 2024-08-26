import { v4 as uuidv4 } from "uuid";
import pokemon from "/Users/tpl622_3/techtonica/techtonica-projects/rest-api/pokemondb.js";

// create get route to access Pokemon from database
export const getPokemon = (req, res) => {
    res.json(pokemon);
};

// create post route to add pokemon data to database
export const createPokemon = (req, res) => {
    // access and add new pokemon data from postman to database
    const newPokemon = req.body;

    // create an id for each pokemon
    const pokemonId = { ...newPokemon, id: uuidv4() }
    pokemon.push(pokemonId);

    res.send(`Pokemon with the order no. ${newPokemon.order} and name ${newPokemon.name} added to the database! Gotta Catch em' all!`);
};

// create get route to access pokemon by Unique Id
export const getPokemonUniqueId = (req, res) => {
    const { id } = req.params;
 
    const findPokemon = pokemon.find((newPokemon) => newPokemon.id === id);
     res.send(findPokemon);
 };

// create get route to access pokemon by Order No
// export const getPokemonOrder = (req, res) => {
//     const { order } = req.params;
//     const findPokemonOrder = pokemon.find((newPokemon) => newPokemon.order === order);
//     res.send(findPokemonOrder);
// }

 // create delete route to delete pokemon data from database
export const deletePokemon = (req, res) => {
    const { id } = req.params;

    // deletes if false => id === id; if true keeps id
    pokemon = pokemon.filter((newPokemon) => newPokemon.id !== id);

    res.send(`Pokemon with the id ${id} deleted from the database. Until next time, bye bye!`);
}; 

// put route - changes the entire 
// patch route - changes an attribute 

// create patch route to update pokemon data
export const updatePokemon = (req, res) => {
    const { id } = req.params;
    const { order, name, type, evolutionStage } = req.body;
    
    const newPokemon = pokemon.find((newPokemon) => newPokemon.id === id);

    if (order) newPokemon.order = order;
    if (name) newPokemon.name = name;
    if (type) newPokemon.type = type;
    if (evolutionStage) newPokemon.evolutionStage = evolutionStage;

    res.send(`Pokemon with the id ${id} and order no. ${newPokemon.order} has been updated!`);
};


// for testing
// {
//     "order": 13,
//     "name": "Weedle",
//     "type": "Bug and Poison",
//     "evolutionStage": "Basic"
// }