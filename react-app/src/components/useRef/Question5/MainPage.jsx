import React, {useState, useRef, useEffect} from 'react';

const MainPage = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(count);

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);
    return(
        <div>
            <p>Current: {count}</p>
            <p>Previous: {prevCountRef.current}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
export default MainPage;