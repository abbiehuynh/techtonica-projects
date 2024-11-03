# Project Name: Trivia Game

**Description:**
Test your animal knowledge by playing Animal Trivia! Fetched from the Open Trivia Database API, this game will present 10 Medium level questions with Multiple Choice options to allow users to test their knowledge on random animal facts. 

---

**Table of Contents**
[Introduction](#introduction)
[Installation](#installation)
[Demonstation](#demonstration)
[Features](#features)
[Technologies Used](#technologies-used)
[Acknowledgments](#acknowledgments)
[Contact](#contact)
---

## Introduction: 
**Project:**
For Week 8 of the Techtonica Software Engineer in Training Program.

## Installation: 
**To create the whole project**
1.  Go to your source directory in your terminal and clone the repository by running the command:

```
$ git clone https://github.com/abbiehuynh/techtonica-projects/trivia-game.git <NameNewDirectory>
```
2. `npm install` in terminal in server (techtonica-projects/trivia-game/server) and client (techtonica-projects/trivia-game/client).

3. `npm start` on server side and `npm run dev` on client side to run Animal Trivia app.

4. Visit `http://localhost:3001` for server site (ExpressJS, NodeJS) and `http://localhost:5173` for client site (React + Vite).

## Demonstration:

Once the page has loaded, you will see the homepage that allows the user to click "Load Game" to fetch the questions from the Trivia API.

Users will be able to see if their answer choice was correct or incorrect. Once the answer has been chosen, the "Next Question" button will appear, allowing the user to click to go to the next question. If the choice was incorrect, users will be presented with the correct answer. 


Once the game is over, the user will be notified if they have either won or loss the game, and how many questions they were able to get correct. 
![GameOver](/client/src/assets/game-over-trivia-game.png)

## Features: 
- Fetches trivia questions and answers from [Open Trivia Database API](https://opentdb.com/api_config.php)
- Interactive buttons to load the game, click answer choices, go to the next question, and reset the game.
- Hover and pointer to show users which answer choice is being highlighted before clicking.
- Displays if the user got the question correct or incorrect with correct answer. 
- Shows the user a message of whether they have won or loss the game.

## Technologies: 
- ExpressJS, NodeJS
- React + Vite     
- HTML, CSS
- Git
- Fetch
- BootStrap
- Flexbox
- Postman

## Acknowledgments:
Specials thanks to Techtonica Program & Staff, my mentor, and the H2 2024 Cohort. Thank you for your continuous love and support for growth through this tech journey. 

## Contact: 
- [Github](https://github.com/abbiehuynh)
- Email: abbiehuynhh@gmail.com
