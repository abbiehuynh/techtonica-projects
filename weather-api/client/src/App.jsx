import React, { useState, useEffect } from 'react';

// import WEATHER from "./components/WEATHER";
// import "./components/weather.css";
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');
  // const [data, setData] = useState('');
  // const [temp, setTemp] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/weather')
    .then((res) => res.json())
    .then((data) => setCity(data))
    .then((data) => setWeatherData(data.main))
    .catch((err) => console.log(err));
  }, []);


 

  return (
    <div className="app">
      <h2>Weather</h2>
      {/* <WEATHER/> */}
      <p>City: {city.name}</p>
      <p>Temperature: {weatherData.temp} *F </p>
      {/* <p>Temperature: {weatherData.main.temp}</p> */}
      {/* <p>Temperature: {weatherData.wind.speed}</p> */}
      {/* <p>Temperature: {weatherData.main.humidity}</p> */}
    </div>
  )
}

export default App;
