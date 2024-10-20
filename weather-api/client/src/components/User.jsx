import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Favorite from './Favorite';

const User = () => {
    // creates userId from route params
    const { userId } = useParams();
    // creates state for user's favortite city 
    const [favoriteCity, setFavoriteCity] = useState("");

    const loadUserData = () => {
        // hardcoded to be user 1, would update in future to be ${userId} to update to whichever id is logged in
        fetch(`http://localhost:3001/users/1`)
            .then((response) => response.json())
            .then((favoriteCity) => {
                setFavoriteCity(favoriteCity[0]);
                console.log(favoriteCity);
            });
    }

    useEffect(() => {
        loadUserData();
    }, [userId]);



  return (
    <div>
        <p>Favorite City: {favoriteCity.favorite_city}</p>
        <Favorite />
    </div>
  )
}

export default User;