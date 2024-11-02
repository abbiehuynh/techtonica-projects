const express = require('express');
const app = express.Router();

// retrieves TRIVIA API data 
    // 10 questions on animal triva, easy difficulty, MC
const getTrivia = async (req, res) => {
    const url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple`;
    console.log(`Fetching trivia from: ${url}`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw newError('Network response was not ok');
        }

        const data = await response.json();
        res.json(data);
    } catch {
        console.error('Error fetching trivia data:', error);
        res.status(500).json({error: "Failed to fetch animal trivia data"});
    }
};

app.get('/', getTrivia);

module.exports = app;