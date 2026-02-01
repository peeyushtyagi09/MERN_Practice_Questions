import React, {useEffect, useRef, useState} from 'react';

const MainPage = () => {
    const counterRef = useRef(0);
    const[, forceRender] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            counterRef.current += 1;
            forceRender((x) => x + 1);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return (
        <div>
            <p>Counter: {counterRef.current}</p>
        </div>
    )
}

export default MainPage;