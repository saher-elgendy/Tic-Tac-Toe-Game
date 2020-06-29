import React, { useState } from 'react';
import Game from './components/game';


function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);


  const current = history[stepNumber];
  const squares = current.squares;
  return (
    <div className="App">
      <Game squares={squares}/>
    </div>
  );
}

export default App;
