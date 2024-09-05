import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { getTrivia } from './routes/game.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());
app.use(cors());

// creates get route for homepage, test
app.get('/', (req, res) => {
    res.json("Hello from Express, Play Animal Triva on /trivia-game!");
    console.log("Abbie's Trivia Game!")
});

// creates get route to retrieve data from TRIVIA API
app.use('/trivia-game', getTrivia)


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})