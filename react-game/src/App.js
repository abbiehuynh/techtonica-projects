import { useState } from "react"
import Cell from "./Cell"

const App = () => {
  // creates div for each square on the game board
  const [cells, setCells] = useState(["1", "2", "3", "4","5","6","7","8","9"])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => <Cell key={index} id={index} cell={cell}/>)}

      </div>
    </div>
  )
}

export default App;
