import { useState } from "react"
import Cell from "./Cell"

const App = () => {
  // creates div for each square on the game board
  const [cells, setCells] = useState(["", "", "", "","","","","",""])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => 
          <Cell 
            key={index} 
            id={index} 
            cell={cell}
          />)}

      </div>
      <p></p>
    </div>
  )
}

export default App;
