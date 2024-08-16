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

    {/* create function to determine winner of game, 4 slots in a row */}
    const checkWin = (row, column, ch) => {

        {/* checks down */}
        try {
            if (gameBoard[row + 1][column] === ch) {
                if (gameBoard[row + 2][column] === ch) {
                    if (gameBoard[row + 3][column] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

        {/* checks diagonal right */}
        try {
            if (gameBoard[row + 1][column + 1] === ch) {
                if (gameBoard[row + 2][column + 2] === ch) {
                    if (gameBoard[row + 3][column + 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

        {/* checks diagonal left */}
        try {
            if (gameBoard[row + 1][column - 1] === ch) {
                if (gameBoard[row + 2][column - 2] === ch) {
                    if (gameBoard[row + 3][column - 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

         {/* checks right */}
         try {
            if (gameBoard[row][column + 1] === ch) {
                if (gameBoard[row][column + 2] === ch) {
                    if (gameBoard[row][column + 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

        {/* checks left */}
        try {
            if (gameBoard[row][column - 1] === ch) {
                if (gameBoard[row][column - 2] === ch) {
                    if (gameBoard[row][column - 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

         {/* checks diagnol up right */}
         try {
            if (gameBoard[row - 1][column - 1] === ch) {
                if (gameBoard[row - 2][column - 2] === ch) {
                    if (gameBoard[row - 3][column - 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}

         {/* checks diagnol up left */}
         try {
            if (gameBoard[row - 1][column + 1] === ch) {
                if (gameBoard[row - 2][column + 2] === ch) {
                    if (gameBoard[row - 3][column + 3] === ch) {
                        return true;
                    }
                }
            }   
        } catch (event) {console.log(event)}
    }
    
    {/* create copy of game board to update as game progresses */}
    const updateBoard = (row, column, ch) => {
        setGameBoard(prev => {
            const gameBoardCopy = [...prev];
            gameBoardCopy[row][column] = ch;
            return gameBoardCopy;
        });
        return checkWin(row, column, ch);
    }

    {/* creates event listener for board components */}
    const handleClick = event => {
        const column = event.target.getAttribute("x");

        {/* find which row in the column the token needs to appear */}
        let row = gameBoard.findIndex((rowArr, index) => {
            {/* return true if the space is occuppied (not empty) and if it is the bottom most slot (in the row) in the column */}
            return (rowArr[column] !== "" || (index === gameBoard.length - 1));
        });
        {/* if the row is not the bottom most row, decrement the row by 1 */}
        if (row !== gameBoard.length - 1) row -= 1;
        {/* if the slot is not occupied, decrememt the row by 1  */}
        if (gameBoard[row][column] !== "") row -= 1;

        setGameOver(updateBoard(row, column, currPlayer));

        { /* swap turns of players as long as game continues (is not over) */}
        if(!gameOver) {
            const currPlayerCopy = currPlayer;
            setCurrPlayer(oppPlayer);
            setOppPlayer(currPlayerCopy);
        }
    };

    return (
        <>
            {/* declares winner */}
            {gameOver && (
                <h1 id ="winner">{oppPlayer === "X" ? "Cosmo" : "Wanda"} Wins!</h1>
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