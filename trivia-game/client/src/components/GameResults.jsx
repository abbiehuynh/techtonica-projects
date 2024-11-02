import React from 'react'
import { Button, Card } from 'react-bootstrap';

const GameResults = ({ correctScore, totalQuestions, onReset }) => {
    // creates a function to show user if they have won
    const hasWon = correctScore > totalQuestions / 2;

  return (
    <Card className="game-over-card">
        <Card.Body>
            <h2 className="game-over">Game Over!</h2>
            <p>You answered {correctScore} out of {totalQuestions} questions correctly. </p>
            <h3>{hasWon ? "Congratulations! You won!" : "Better luck next time!"}</h3>
            <Button className="play-again-btn" onClick={onReset} variant="primary">Play Again</Button>
        </Card.Body>
    </Card>
  )
}

export default GameResults