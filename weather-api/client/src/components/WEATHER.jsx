import React, { useState, useEffect } from 'react';
import "./weather.css";
// will initially appear on page
// will include:
    // text: "What the Weather is like in..."
    // input (placeholder: enter city name)
    // button (to submit form), submit

const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
const apiKey = process.env.API_KEY;

const WEATHER = () => {
    <h1>Weather</h1>
    
   // initiate useStates
    const [city, setCity] = useState('Birmingham');
    // const [icon, setIcon] = useState('');
    // const [temp, setTemp] = useState('');
    // const [humidity, setHumidity] = useState('');
    // const [windSpeed, setWindSpeed] = useState('');

    // useEffect(() => {
    const fetchWeather = async () => {
        try {
            const result = await fetch(`/weather?city=${city}`);

            if(!response.ok) throw error
            throw new Error (`Error: ${response.status}`)
            
        }
            // const data = await response.json();

        }

    const handleSubmit = (event) => {
        event.preventDefault()
        // fetchWeather();
    }

    return (

        <form onSubmit={handleSubmit}>
            <h2>Let's Check the Weather in...</h2>

        </form>
    )


export default WEATHER;