import React from 'react';


function GameStatus({ xTurn }) {
    return (
        <div className="game-status">
            <p>
                {xTurn ? 'player X turn' : 'player O turn'}
            </p>
        </div>
    )
}

export default GameStatus;
