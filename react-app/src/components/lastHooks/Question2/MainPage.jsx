import React, {useState} from 'react';
import Child from './Child';

const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const renderCount = 5000;
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(prev => prev + 1)}>Increment</button>
            {
                Array.from({ length: renderCount }).map((_, i) => (
                    <Child key={i} />
                ))
            }
        </div>
    );
}
export default MainPage;