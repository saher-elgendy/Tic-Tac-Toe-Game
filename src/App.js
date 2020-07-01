import React, { useState } from 'react';
import Game from './components/game';
import GameStatus from './components/gameStatus';
import Moves from './components/moves';


function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xTurn, setXTurn] = useState(true);

  const handleClick = (idx) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];
    if (squares[idx]) {
      return
    }
    squares[idx] = xTurn ? 'X' : 'O';

    setHistory([...newHistory, { squares }]);
    setXTurn(!xTurn);
    setStepNumber(stepNumber + 1);
  }

  const moveTo = (move) => {
    setStepNumber(move);
    move % 2 === 0 ? setXTurn(true) : setXTurn(false);
  }

  const current = history[stepNumber];
  const squares = current.squares;

  return (
    <div className="App">
      <GameStatus xTurn={xTurn}/>
      <Game squares={squares} handleClick={handleClick} />
      <Moves history={history} moveTo={moveTo} />

    </div>
  );
}

export default App;
