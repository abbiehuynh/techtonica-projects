import express, { Router } from "express";
const router = express.Router();

// retrieves TRIVIA API data 
    // 10 questions on animal triva, medium difficulty, MC
export const getTrivia = async (req, res) => {
    const url = `https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple`;
    console.log(url);

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
        // console.log(data.results[0].question)
    } catch {
        res.status(500).json({error: "Failed to fetch animal trivia data"});
    }
};
