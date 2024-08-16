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

    {/* creates event listener for board components */}
    const handleClick = event => {
        const column = event.target.getAttribute("x");

        {/* find which row in the column the token needs to appear */}
        const row = gameBoard.findIndex((rowArr, index) => {
            {/* return true if the space is occuppied (not empty) and if it is the bottom most slot (in the row) in the column */}
            return (rowArr[column] !== "" || (index === gameBoard.length - 1));
        });
        {/* if the row is not the bottom most row, decrement the row by 1 */}
        if (row !== gameBoard.length - 1) row -= 1;
        {/* if the slot is not occupied, decrememt the row by 1  */}
        if (gameBoard[row][column] !== "") row -= 1;
    };

    return (
        <>
            {/* declares winner */}
            {gameOver && (
                <h1>{oppPlayer === "X" ? "Cosmo" : "Wanda"} Wins!</h1>
            )}
            
            {/* creates header to show current player's turn */}
            <h2 id="showPlayer">{currPlayer === "X" ? "Cosmo's" : "Wanda's"} Move</h2>

            {/* gameBoard */}
            <div 
                id="gameBoard"
                onClick={gameOver ? null : handleClick}
            >

                {/* copy board using map, giving coordinates of each row and column */}
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