// that is the code using useEffect and what if we did not use useEffect
// import React, {useState, useEffect} from 'react';

// const MainPage = () => {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title  = `Count: ${count}`;
//     }, [count]);
//     return (
//         <div>
//             <p>Count : {count}</p>
//             <button onClick={() => setCount(count => count + 1)}>Increment</button>
//         </div>
//     )   
// }

// export default MainPage;

// import React, {useState} from 'react';

// const MainPage = () => {
//     const [count, setCount] = useState(0);
//     const handleIncrement = () => {
//         setCount((prev) => {
//             const newCount = prev + 1;
//             document.title = `Count: ${newCount}`;
//             return newCount;
//         });
//     };
//     return (
//         <div> 
//             <p>Count: {count}</p>
//             <button onClick={handleIncrement}>Increment</button>
//         </div>
//     )
// }
// export default MainPage;

// how optimal solution according to the fang
import React, { useState, useEffect } from 'react';

const MainPage = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const prevTitle = document.title;
        document.title = `Count: ${count}`;

        return () => {
            document.title = prevTitle;
        }
    }, [count])

    const handleClick = () => {
        setCount(count => count + 1);
    }
    return(
        <div> 
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export default MainPage;