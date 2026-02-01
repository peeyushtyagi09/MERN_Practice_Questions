import React, {useState} from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

const MainPage = () => {
    const [text, setText] = useState("");
    const onchnage = (e) => {
        setText(e.target.value);
    }
    return(
        <div>
            <h1>Child1</h1>
            <Child2 changetext={onchnage} />
            <Child1 text={text} />
        </div>
    )
}
export default MainPage;