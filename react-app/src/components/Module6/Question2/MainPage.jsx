import React, {useState} from 'react';
import Child from './Child';
const MainPage = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter((prev) => prev  + 1);
    };
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Child onIncrement={handleIncrement}/>
        </div>
    )
}
export default MainPage;