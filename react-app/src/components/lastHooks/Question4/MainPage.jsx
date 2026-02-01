import React, {useState, useMemo} from 'react';

// The mistake is a typo in the event handler prop: it should be "onClick", not "onClck".
// This typo prevents the buttons from responding to clicks.

const MainPage = () => {
    const [countA, setCountA] = useState(1);
    const [countB, setCountB] = useState(2);
    const [countC, setCountC] = useState(0);

    const result = useMemo(() => {
        console.log("recalculating...");
        return countA * countB;
    }, [countA, countB]);
    
    return (
        <div>
            <h1>result: {result}</h1>
            <button  onClick={() => setCountA(prev => prev + 1)}>IncrementA</button>
            <button  onClick={() => setCountB(prev => prev + 1)}>IncrementB</button>
            <button  onClick={() => setCountC(prev => prev + 1)}>IncrementC</button>
        </div>
    )
}
export default MainPage;