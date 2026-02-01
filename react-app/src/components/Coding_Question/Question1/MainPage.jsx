import React, { useState } from 'react';

const MainPage = () => {
    const [data, setData] = useState([]);
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        // Initialize an array with 0 to 100000
        const arr = Array.from({ length: 100001 }, (_, i) => i);
        setData(arr);
        setShowData(true);
    };

    return (
        <div>
            <h1>table</h1>
            <button onClick={handleClick}>Render Data</button>
            {showData && (
                <div>
                    {data.map((d) => (
                        <div key={d}>{d}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MainPage;