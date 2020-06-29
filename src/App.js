import React, { useState } from 'react';
import Game from './components/game';


function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [step, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
