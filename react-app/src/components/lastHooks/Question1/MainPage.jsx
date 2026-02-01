import React, { useState, useRef, useMemo } from 'react';
import Child from './Child';

// Pass object as a prop to a React.memo component to test: 
// If you create a new object inline every render, React.memo won't prevent the child from re-rendering.

const MainPage = () => {
    const currentrender = useRef(0);
    const [value, setValue] = useState(""); 

    // Re-create obj each render -- this will cause Child to re-render even with React.memo!
    const memoizedObj = useMemo(() => {
        return {name: "peeyush"};
    }, []);

    currentrender.current += 1;

    return (
        <div>
            <p>text: {value}</p>
            <p>currentrender: {currentrender.current}</p>
            <input
                type="text"
                value={value} 
                onChange={(e) => setValue(e.target.value)}
            />
            {/* MISTAKE: Passing a new object each render defeats React.memo's shallow props check */}
            <Child obj={memoizedObj} />
        </div>
    )
}

export default MainPage;