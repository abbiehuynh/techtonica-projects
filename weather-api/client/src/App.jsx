import React, { useState, useEffect } from 'react';

// import WEATHER from "./components/WEATHER";
// import "./components/weather.css";
import './App.css';

function App() {
  const [city, setCity] = useState('Birmingham');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5050/weather?city=${city}`);
      
      const data = await response.json();
      setWeatherData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
     }
  }
   
// create useEffect to fetch weather data for default city
useEffect(() => {
  fetchWeather();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeather();
  }
 

  return (
    <div className="app">
      <h2>Check Your City's Weather</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
     
     {weatherData ? (
      <>
      <h2> {weatherData.name}</h2>
      <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}/>
      <p>Temperature: {weatherData.main.temp} &deg;F </p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Wind Speed: {weatherData.wind.speed} mph</p>



      </>
     ) : (

      <p>Checking the Weather...</p>

     )}
        
    </div>
  )
}

export default App;
