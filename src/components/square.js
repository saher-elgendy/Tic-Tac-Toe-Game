 import React from 'react';

function Square({value, idx, handleClick}) {
    return (
        <li className="square" onClick = {() => handleClick(idx)}>
            {value}
        </li>
    )
}

export default Square;
