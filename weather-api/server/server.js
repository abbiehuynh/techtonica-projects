const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// imports weather api
// const getWeather = require('./routes/weather.js');

// imports the database connection
const db = require('./db/db-connection.js');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates get route for homepage, test 
app.get('/', (req, res) => {
    res.json("Hello from Express, Check the weather on /weather!");
    console.log("Abbie's Weather App")
});

// retrieves open weather data api
const getWeather = async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.API_KEY;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    console.log(url);

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);

    } catch {
        res.status(500).json({error: "Failed to fetch data"});
    }
};

// creates get route to use getWeather function
app.get('/weather', getWeather)

// creates get request for if city is user's favorite city by user id and city name
app.get('/favorite-city/:userId/:city', async (req, res) => {
    const { userId, city } = req.params;

    try {
        const result = await db.query(
            `SELECT EXISTS(SELECT 1 FROM users WHERE id = $1 AND favorite_city = $2);`, 
            [userId, city]
        );

        const isFavorite = result.rows[0].exists;
        res.json({ isFavorite });
    } catch (error) {
        console.error("Error checking favorite city:", error );
        res.status(500).json({ erro: "Internal Server Error" });
    }
});

// create post request to add favorite city and user to database table
app.post('/favorite-city', async (req, res) => {
    const { userId, city } = req.body;

    try {
        const result = await db.query(
            `INSERT INTO users(id, favorite_city) 
            VALUES ($1, $2) 
            RETURNING *;`, [userId, city]
        );

        res.status(201).json({ 
            message: "City added to favorites.", 
            city: result.rows[0] 
        });

    } catch (error) {
        console.error("Error adding favoirte city:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// creates put request to update favorite city of exisitng user 
app.put('/favorite-city/:userId', async (req, res) => {
    // gets userId from url params
    const { userId } = req.params;
    // expects city in the request body
    const { favorite_city } = req.body;
    console.log(req.body);

    if (!favorite_city) {
        return res.status(400).json({ error: "City is required." });
    }

    try {
        // updates the user's favorite city in the database
        const result = await db.query(
          'UPDATE users SET favorite_city = $1 WHERE id = $2 RETURNING *',
          [favorite_city, userId]
        );
    
        if (result.rowCount === 0) {
          return res.status(404).json({ error: "Favorite city not found for the user." });
        }
    
        // Return success response
        res.status(200).json({
          message: "Favorite city updated.",
          favoriteCity: result.rows[0], // Return the updated favorite city object
        });

    } catch (error) {
        console.error("Error updating favorite city:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});