 import React from 'react';

function Square({value, key, handleClick}) {
    return (
        <li className="square" onClick = {() => handleClick(key)}>
            {value}
        </li>
    )
}

export default Square;
