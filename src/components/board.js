import React from 'react';
import Square from './square';

function Board() {
    return (
        <div className="board">
            {
                [...Array(9)].map((el) => {
                    return (
                        <Square />
                    )
                })
            }
        </div>
    )
}

export default Board;
