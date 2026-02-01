// import React, {useState,useEffect, useRef} from 'react';

// const MainPage = () => {
//     const [counter, setCounter] = useState(0);
//     // const counterRef = useRef(null);
//     const[state, setState] = useState(true);

//     useEffect(() => {
//         if(!state) return;
//         const id = setInterval(() => {
//             setCounter(counter => counter + 1);
//         }, 1000);

//         return () => clearInterval(id);
//     }, [state]);
//     return (
//         <div>
//             <h1>Question2</h1>
//             <h2>Counter: {counter}</h2>
//             <button onClick={() => setState(true)}>Start</button>
//             <button onClick={() => setState(false)}>End</button>
//         </div>
//     )
// }

// export default MainPage;

// using useRef
import React, { useState, useRef } from "react";

const MainPage = () => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null); // stores interval ID

  const handleStart = () => {
    if (intervalRef.current !== null) return; // prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const handleEnd = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Question 2</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleEnd}>End</button>
    </div>
  );
};

export default MainPage;
