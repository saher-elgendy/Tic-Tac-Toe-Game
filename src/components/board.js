import React from 'react';
import Square from './square';

function Board({squares}) {
    return (
        <div className="board">
            {
                [...Array(9)].map((item, i) => {
                    return (
                        <Square key={i} value={squares[i]} {...props}/>
                    )
                })
            }
        </div>
    )
}

export default Board;
