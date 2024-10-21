import React, {useEffect, useState } from 'react';

const Weather = ({ userId, setFavoriteCity }) => {

// initiates useStates and their initial values
  const [city, setCity] = useState('Birmingham');
  const [weatherData, setWeatherData] = useState(null);

  // fetches open weather api data from express server
  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:3001/weather?city=${city}`);
      const data = await response.json();
      setWeatherData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
     }
  };

  // creates handle to respond to user input 
  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeather();
  }

  // Function to save the city as a favorite
  const saveFavoriteCity = async () => {
    if (!userId) {
      alert("You need to be logged in to save a favorite city.");
      return;
    }
    
    try {
      const response = await fetch(`http://localhost:3001/favorite-city/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorite_city: city }),
      });

      const data = await response.json();
      if (response.ok) {
        // updates favorite city in parent component
        setFavoriteCity(city);
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error saving favorite city:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
        <input
          id="input"
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br/>
        <button id="button"type="submit">Get Weather</button>
      </form>
     
     {weatherData ? (
      <>
      <div className="weatherData">
      <h2> {weatherData.name}</h2>
      <img 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`} 
        className="weather-icon" 
        />
      <p>Temperature: {weatherData.main.temp} &deg;F </p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Feels Like: {weatherData.main.feels_like} &deg;F </p>
      <p>Wind Speed: {weatherData.wind.speed} mph</p>
      </div>
      <button onClick={saveFavoriteCity}>Save as Favorite</button>
      </>
     ) : (
      <p>Checking the Weather...</p>
     )}
    </div>
  )
}

export default Weather;