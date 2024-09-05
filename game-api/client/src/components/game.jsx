import React, { useState, useEffect } from 'react';


const GAME = () => {
    // initiates useStates and their inital values
    
    // useState for animal trivia data 
    const [triviaData, setTriviaData] = useState([{}]);
    const [triviaQuestion, setTriviaQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [allPossibleAnswers, setAllPossibleAnswers] = useState([]);


    // fetches trivia api data from express server
    const fetchTriviData = async () => {
        try {
            const response = await fetch(`http://localhost:5050/trivia-game`);

            const data = await response.json();
            setTriviaData(data);
            console.log(triviaData);
            // how to display correct and incorrect answers as options?
        
        } catch (error) {
            console.error("Error fetching trivia data:", error);
        }
    }

    console.log(triviaData);

    // creates useEffect to fetch data for default?
    useEffect(() => {
        fetchTriviData();
    }, []);

    // creates handle to user submitting answer to question?





  return (
    <div>
        <form className="form">
            <label 
             
                > question:
                
            </label>

            <select
                id="choices"
                name="choices"
                size="4"
                multiple>
                
                <option value="choice 1">Choice 1</option>
                <option value="choice 2">Choice 2</option>
                <option value="choice 3">Choice 3</option>
                <option value="choice 4">Choice 4</option>
            </select>

            <input type="submit"/>

        


        </form>


    </div>
  )
}

export default GAME;