import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const TriviaGame = () => {
    const [trivia, setTrivia] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const fetchTrivia = async () => {
        // resets state when new game is being fetched
        setLoading(true);
        setError(null);
        setCurrentQuestion(0);
        
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

    const nextQuestion = () => {
        setCurrentQuestion((prev) => Math.min(prev + 1, trivia.length - 1));
    };
    
  return (
    <div>
        <h1>Animal Trivia</h1>
        <Button onClick={fetchTrivia} variant="primary">Load Game</Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {trivia.length > 0 && (
        <div>
            {trivia.length > 0 && currentQuestion < trivia.length && (
                <div>
                    <h2 dangerouslySetInnerHTML={{ __html: trivia[currentQuestion].question }} />
                    <ul>
                        {[...trivia[currentQuestion].incorrect_answers, trivia[currentQuestion].correct_answer].map((answer, idx) => (
                            <li key={idx} dangerouslySetInnerHTML={{ __html: answer }} />
                        ))}
                    </ul>
                    {currentQuestion < trivia.length - 1 && (
                        <Button onClick={nextQuestion} variant="success">Next Question</Button>
                    )}
                </div>
            )}
        </div>
        )}
    </div>
  );
}

export default TriviaGame;