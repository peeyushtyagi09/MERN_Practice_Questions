import React from 'react';

const Child = ( {onIncrement} )=> {
    return(
        <div> 
            <h1>Child</h1>
            <button onClick={onIncrement}>Increment</button> 
        </div>
    )
}
export default Child;