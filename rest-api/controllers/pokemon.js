import { v4 as uuidv4 } from "uuid";

// hardcode data of first 12 pokemon
let pokemon = 
[
    {
        "order": 1,
        "name": "Bulbasaur",
        "type": "Grass and Poison",
        "evolution stage": "Basic"
    },
    {
        "order": 2,
        "name": "Ivysaur",
        "type": "Grass and Poison",
        "evolution stage": "Stage 1"
    },
    {
        "order": 3,
        "name": "Venusaur",
        "type": "Grass and Poison",
        "evolution stage": "Stage 2"
    },
    {
        "order": 4,
        "name": "Charmander",
        "type": "Fire",
        "evolution stage": "Basic"
    },
    {
        "order": 5,
        "name": "Charmeleon",
        "type": "Fire",
        "evolution stage": "Stage 1"
    },
    {
        "order": 6,
        "name": "Charizard",
        "type": "Fire and Flying",
        "evolution stage": "Stage 2"
    },
    {
        "order": 7,
        "name": "Squirtle",
        "type": "Water",
        "evolution stage": "Basic"
    },
    {
        "order": 8,
        "name": "Wartortle",
        "type": "Water",
        "evolution stage": "Stage 1"
    },
    {
        "order": 9,
        "name": "Blastoise",
        "type": "Water",
        "evolution stage": "Stage 2"
    },
    {
        "order": 10,
        "name": "Caterpie",
        "type": "Bug",
        "evolution stage": "Basic"
    },
    {
        "order": 11,
        "name": "Metapod",
        "type": "Bug",
        "evolution stage": "Stage 1"
    },
    
    {
        "order": 12,
        "name": "Butterfree",
        "type": "Bug and Flying",
        "evolution stage": "Stage 2"
    }
];

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
