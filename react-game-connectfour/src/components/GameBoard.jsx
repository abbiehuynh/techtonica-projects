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
        ])
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