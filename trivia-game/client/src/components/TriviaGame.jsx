import React, { useState } from 'react';

const TriviaGame = () => {
    const [trivia, setTrivia] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTrivia = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch('http://localhost:3001/api/trivia');
            if (!response.ok) {
                throw new Error('Failed to fetch trivia data');
            }

            const data = await response.json();
            setTrivia(data.results);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <div>
        <h1>Animal Trivia</h1>
        <button onClick={fetchTrivia}>Load Game</button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        <div>
            {trivia.map((triviaItem, index) => (
                <div key={index}>
                    <h2 dangerouslySetInnerHTML={{ __html: triviaItem.question }} />
                    <ul>
                        {[...triviaItem.incorrect_answers, triviaItem.correct_answer].map((answer, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: answer }} />
                        ))}
                    </ul>
                </div>
            ))}
        </div>


    </div>
  )
}

export default TriviaGame;