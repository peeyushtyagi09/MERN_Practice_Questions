import React, {useRef, useState} from "react";

const MainPage = () => {
    const renderCountRef = useRef(0);
    const [count, setCount] = useState(0);

    renderCountRef.current += 1;

    return (
        <div>
            <h1>Render Counter </h1>
            <p>This component has rendered {renderCountRef.current} times.</p>

            <button onClick={() => setCount(count + 1)}>Force Re-render</button>
        </div>
    )
}

export default MainPage;
