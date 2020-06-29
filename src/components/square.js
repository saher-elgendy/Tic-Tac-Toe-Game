 import React from 'react';

function Square({value, id, handleClick}) {
    return (
        <li className="square" onClick = {() => handleClick(id)}>
            {value}
        </li>
    )
}

export default Square;
