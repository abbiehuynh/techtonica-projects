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

// creates get request for data from users table
app.get('/users', async (req, res) => {
    try {
        const { rows: users } = await db.query(
            `SELECT * FROM public.users;`
        );
        res.send(users);
    } catch (error) {
        console.error("Error fetching projects data", error );
        return res.status(400).json({ error });
    }
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})