import React, { useState } from 'react';
import Game from './components/game';


function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (id) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];
    squares[id] = xTurn ? 'X' : 'O';

    setHistory([...newHistory, { squares }]);
    setXTurn(!xTurn);
    setStepNumber(stepNumber + 1);
  }
  console.log(history)
  const current = history[stepNumber];
  const squares = current.squares;
  return (
    <div className="App">
      <Game squares={squares} handleClick={handleClick} />
    </div>
  );
}

export default App;
