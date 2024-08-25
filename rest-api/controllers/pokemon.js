import { v4 as uuidv4 } from "uuid";


// create get route to access Pokemon from database
export const getPokemon = (req, res) => {
    res.send(pokemon);
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

// create get route to access pokemon by Id
export const getPokemonId = (req, res) => {
    const { id } = req.params;
 
    const findPokemon = pokemon.find((newPokemon) => newPokemon.id === id);
     res.send(findPokemon);
 };
