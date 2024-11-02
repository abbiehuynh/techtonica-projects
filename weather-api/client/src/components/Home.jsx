import React, {useState} from 'react';
import Weather from './WEATHER';
import Favorite from './Favorite';

const Home = ({ userId }) => {
    const [favoriteCity, setFavoriteCity] = useState(null);

  return (
    <div>
        <h2>Weather App</h2>
        <Weather userId={userId} setFavoriteCity={setFavoriteCity} />
        <Favorite favoriteCity={favoriteCity} />
    </div>
  )
}

export default Home;