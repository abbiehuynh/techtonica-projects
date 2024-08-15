import Slot from "./Slot";
import { useState } from "react";

const GameBoard = () => {
    {/* creates state to track board, creates gameboard */}
    const [gameBoard, setGameBoard] = useState([
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


    return (
        <>
            {/* creates id for gameboard to access in css */}
            <div id="gameBoard">
                {/* copy board using map, of each row and column */}
                {gameBoard.map((row, i) => {
                    return row.map((ch, j) => {
                        return <Slot ch={ch} y={i} x={j} />
                    })
                })}
            </div>
        </>
    );
};
export default GameBoard;