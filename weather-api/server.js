import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { getWeather } from './routes/weather.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

// creates get route for homepage, test 
app.get('/', (req, res) => {
    res.json("Hello from Express, Check the weather on /weather!");
    console.log("Abbie's Weather App")
});

// creates get route to retrieve data from Open Weather API
app.use('/weather', getWeather)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})