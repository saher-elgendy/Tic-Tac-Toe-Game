import React from 'react';
import Board from './board';

function Game(props) {
    return (
        <div className="game">
            <Board {...props}/>
        </div>
    )
}

export default Game;
