import React from 'react';


function GameStatus({ xTurn, gameEnd }) {
    return (
        <div className="game-status">
            <p>
                {gameEnd ? 'player ' + (xTurn ? 'O' : 'X') + ' wins' :
                    (xTurn ? 'player X turn' : 'player O turn')}
            </p>
        </div>
    )
}

export default GameStatus;
