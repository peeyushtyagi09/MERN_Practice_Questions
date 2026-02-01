import React, { useState, useRef, useEffect } from "react";

const MainPage = () => {
  const [counter, setCounter] = useState(0);
  const prevCounter = useRef();

  useEffect(() => {
    prevCounter.current = counter;
  }, [counter]);

  return (
    <div>
      <h1>Previous Value with useRef</h1>

      <p>Counter: {counter}</p>
      <p>Previous Counter: {prevCounter.current}</p>

      <button onClick={() => setCounter((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
};

export default MainPage;
