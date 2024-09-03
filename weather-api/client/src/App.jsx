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

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5050/weather?city=${city}`);
      
      const data = await response.json();
      setWeatherData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
     }
  }
    
  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeather();
  }
 

  return (
    <div className="app">
      <h2>The Weather is...</h2>
      <form>
        <p>City: {city.name}</p>
        <p>Temperature: {weatherData.temp} *F </p>
        {/* <p>Temperature: {weatherData.main.temp}</p> */}
        {/* <p>Temperature: {weatherData.wind.speed}</p> */}
        {/* <p>Temperature: {weatherData.main.humidity}</p> */}
      </form>
    </div>
  )
}

export default App;
