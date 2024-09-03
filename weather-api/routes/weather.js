import express, { Router } from "express";
const router = express.Router();

// retrieves open weather data api
export const getWeather = async (req, res) => {
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
