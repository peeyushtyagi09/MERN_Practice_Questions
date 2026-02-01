import React, { useState, useMemo } from 'react';

const MainPage = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    // 1. The "Heavy" Function
    const calculateFactorial = (n) => {
        console.log(`Calculating Factorial for ${n}...`);
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    // 2. Optimal Logic with useMemo
    // This ONLY runs if 'number' changes.
    // Clicking 'Re-render Page' will NOT trigger this log.
    const factorial = useMemo(() => calculateFactorial(number), [number]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>1. Expensive Calculation (useMemo)</h2>
            
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(Number(e.target.value))} 
            />
            <p>Factorial: <strong>{factorial}</strong></p>

            <hr />

            <h2>2. Unrelated State</h2>
            <p>This state exists just to force a re-render: {inc}</p>
            <button onClick={() => setInc(i => i + 1)}>
                Re-render Page (Watch Console)
            </button>
        </div>
    );
};

export default MainPage;