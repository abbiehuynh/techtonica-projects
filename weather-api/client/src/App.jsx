import React, { useState, useEffect } from 'react';

// import WEATHER from "./components/WEATHER";
// import "./components/weather.css";
import './App.css';

function App() {
  // initiates useStates and their initial values
  const [city, setCity] = useState('Birmingham');
  const [weatherData, setWeatherData] = useState(null);

  // fetches open weather api data from express server
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

  // creates handle to respond to user input 
  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeather();
  }
 

  return (
    <div className="app">
      <h2>Weather App</h2>

      <form onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <br/>

        <button 
          id="button"
          type="submit"
          >Get Weather
        </button>

      </form>
     
     {weatherData ? (
      <>
      <h2> {weatherData.name}</h2>
      <img 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
        class="weather-icon" />
      <p>Temperature: {weatherData.main.temp} &deg;F </p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Feels Like: {weatherData.main.feels_like} &deg;F </p>
      <p>Wind Speed: {weatherData.wind.speed} mph</p>
      </>

     ) : (

      <p>Checking the Weather...</p>

     )}
        
    </div>
  )
}

export default App;
