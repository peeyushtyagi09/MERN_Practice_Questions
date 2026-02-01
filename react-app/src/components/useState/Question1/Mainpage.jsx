import React, {useState} from 'react';

const MainPage = () => {
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter((counter) => counter + 1);
    }
    const Decrement = () => {
        setCounter((counter) => counter - 1 < 0 ? 0 : counter - 1);
    }
    const Reset = () => {
        setCounter(0);
    }

    return(
        <div>
            <h1>Question 1</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            <p>Counter: {counter}</p>
        </div>
    )
}
export default MainPage;