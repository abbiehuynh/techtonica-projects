import Slot from "./Slot";
import { useState } from "react";

const GameBoard = () => {

    {/* creates state to track board */}
    const GameBoard = () => {
        const [board, setBoard] = useState([

            {/* creates gameboard */}
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
        ]);

        {/* creates states to track players */}
        
        {/* set initial state of current player to "X" = greenToken */}
        const [currPlayer, setCurrPlayer] = useState("X");

        {/* set initial state of opposing player to "O" = pinkToken */}
        const [oppPlayer, setOppPlayer] = useState("O");

        {/* create state for Game Over, boolean !isGameOver */ }
        const [gameOver, setGameOver] = useState(false);

    }
    return (
        <>
            {/* creates id for gameboard to access in css */}
            <div id="gameBoard">

            </div>
        </>
    )
}

export default GameBoard;