import React from 'react';


function Moves({ moveTo, history }) {
    return (
        <div className="moves">
            <ol>
                {
                    history.map((move, i) => {
                        return (
                            <button key={move} onClick={() => moveTo(i)}>
                                {i ? 'Go to Move#' + i : 'start Game'}
                            </button>
                        );  
                    })
                }
            </ol>

        </div>
    )
}

export default Moves;
