import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import GameResults from './GameResults';

const TriviaGame = () => {
    // creates initial states
    const [trivia, setTrivia] = useState([]); // trivia game data from api
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0); // tracks current question
    const [userAnswer, setUserAnswer] = useState(null); // tracks user answer
    const [feedback, setFeedback] = useState(''); // results - tells user if right/wrong
    const [correctScore, setCorrectScore] = useState(0); // tracks correct answers
    const [incorrectScore, setIncorrectScore] = useState(0); // tracks incorrect scores
    const [gameOver, setGameOver] = useState(false); // tracks if game is over/ongoing

    const fetchTrivia = async () => {
        // resets state when new game is being fetched
        setLoading(true);
        setError(null);
        setCurrentQuestion(0);
        setUserAnswer(null);
        setFeedback('');
        setCorrectScore(0);
        setIncorrectScore(0);
        setGameOver(false);
        
        try {
            const response = await fetch('http://localhost:3001/api/game');
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

    // function for checking user's answer selection and providing feedback
    const handleAnswerSelection = (answer) => {
        setUserAnswer(answer);
        const correctAnswer = trivia[currentQuestion].correct_answer;
        if (answer === correctAnswer) {
            setFeedback('Correct!');
            setCorrectScore(prev => prev + 1); // increments correct score
        } else {
            setFeedback('Wrong answer. The correct answer was: ' + correctAnswer);
            setIncorrectScore(prev => prev + 1); // increments incorrect score
        }
    };

    // function for next question
    const nextQuestion = () => {
        if (currentQuestion < trivia.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setUserAnswer(null);
            setFeedback('');
        } else {
            setGameOver(true);
        }   
    };

    // function to reset game
    const resetGame = () => {
        setTrivia([]);
        setCurrentQuestion(0);
        setUserAnswer(null);
        setFeedback('');
        setCorrectScore(0);
        setIncorrectScore(0);
        setGameOver(false);
    }

  return (
    <div>
        <h1>Animal Trivia</h1>
        <Button onClick={fetchTrivia} variant="primary">Load Game</Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {gameOver ? (
            <GameResults
                correctScore={correctScore}
                totalQuestions={trivia.length}
                onReset={resetGame}
            />
        ) : (
            trivia.length > 0 && currentQuestion < trivia.length && (
                <Card>
                    <Card.Body>
                        <h2 dangerouslySetInnerHTML={{ __html: trivia[currentQuestion].question }} />
                        <ul>
                            {[...trivia[currentQuestion].incorrect_answers, trivia[currentQuestion].correct_answer].map((answer, idx) => (
                                <li key={idx}>
                                    <Button
                                        variant={userAnswer === answer ? (answer === trivia[currentQuestion].correct_answer ? 'success' : 'danger') : 'light'}
                                        onClick={() => handleAnswerSelection(answer)}
                                        disabled={userAnswer !== null} // disables buttons after an answer has been selected
                                    >
                                        {answer}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                        {feedback && <p>{feedback}</p>}
                        { userAnswer && (
                            <Button onClick={nextQuestion} variant="success">Next Question</Button>
                        )}
                    </Card.Body>
                </Card>
            )
        )}  
    </div>
  );
}

export default TriviaGame;