import React, { useState, useEffect } from 'react';


const GAME = () => {
    // initiates useStates and their inital values
    
    // useState for animal trivia data 
    const [triviaData, setTriviaData] = useState(null);


    // fetches trivia api data from express server
    const fetchTrivia = async () => {
        try {
            const response = await fetch(`http://localhost:5050/trivia-game`);

            const data = await response.json();
            setTriviaData(data);
        
        } catch (error) {
            console.error("Error fetching trivia data:", error);
        }
    }

    // creates useEffect to fetch data for default?

    // creates handle to user submitting answer to question?





  return (
    <div>
        game here


    </div>
  )
}

export default GAME;