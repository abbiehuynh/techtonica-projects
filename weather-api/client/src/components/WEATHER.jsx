// import React, { useState, useEffect } from 'react';
// import "./weather.css";
// will initially appear on page
// will include:
    // text: "What the Weather is like in..."
    // input (placeholder: enter city name)
    // button (to submit form), submit

// const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
// const apiKey = process.env.API_KEY;

// const WEATHER = () => {

//    // initiate useStates
//     const [city, setCity] = useState('Birmingham');
//     const [weatherData, setWeatherData] = useState(null);
//     // const [icon, setIcon] = useState('');
//     // const [temp, setTemp] = useState('');
//     // const [humidity, setHumidity] = useState('');
//     // const [windSpeed, setWindSpeed] = useState('');

//     // useEffect(() => {
//     const fetchWeather = async () => {
//         try {
//             const result = await fetch(`/weather`);

//             if(!response.ok) {
//             throw new Error(`Error: ${response.status}`)
//         }
//             const data = await response.json();

//             if (data.cod !== 200) {
//                 throw new Error(data.message);
//             }
//         setWeatherData(data);
//         setError(null);

//         } catch (error) {
//             console.error("Error fetching data:", error);
//             setError(error.message)

//         }
//     }

//     useEffect(() => {
//         fetchWeather();
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         fetchWeather();
//     }

    // return (
    //     <div>
    //         {/* <form onSubmit={handleSubmit}>
    //             <h2>Let's Check the Weather in...</h2>
    //             <h3>{weatherData.name}</h3>
    //             <p>Temperature: {weatherData.main.temp}</p>
    //         </form> */}
    //         <h2>Weather</h2>
    //     </div>
    // )

