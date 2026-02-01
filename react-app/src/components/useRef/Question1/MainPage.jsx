// 1) Auto-focus input on mount

// Question:
// Build a component that automatically focuses an input field when the page loads.

// Why is useRef better than document.querySelector here?

import React, {useEffect, useRef} from "react";

const MainPage = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div>
            <h1>Question 1</h1>
            
            <input ref={inputRef} placeholder="Type here..." /> 
        </div>
    )
}

export default MainPage;