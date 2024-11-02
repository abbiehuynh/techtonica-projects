import React from 'react'
import { Button, Card } from 'react-bootstrap';

const GameResults = ({ correctScore, totalQuestions, onReset }) => {
    // creates a function to show user if they have won
    const hasWon = correctScore > totalQuestions / 2;

  return (
    <div>
        <h2>Game Over!</h2>
        <p>You answered {correctScore} out of {totalQuestions} questions correctly. </p>
        <h3>{hasWon ? "Congratulations! You won!" : "Better luck next time!"}</h3>
        <Button onClick={onReset} variant="primary">Play Again</Button>
    </div>
  )
}

export default GameResults