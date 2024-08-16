
import './App.css';
import GameBoard from './components/GameBoard';
import Slot from './components/Slot';

function App() {
  return (
    
    <div> 
      {/* game header */}
      <h2 id="gameHeader">Fairly Four</h2>

      {/* game board component */}
      <GameBoard /> 

      </div>
  );
}

export default App;
