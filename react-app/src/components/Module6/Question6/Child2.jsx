import React from 'react';

const Child2 = ( {changetext} ) => {
    return(
        <div>
            <h1>Child2</h1>
            <input type="text" onChange={changetext} />
        </div>
    )
}
export default Child2;