import React, {useState} from 'react';

const MainPage = () => {
    const [toggle, setToggle] = useState(true);
    return(
        <div> 
            <h1>Question 4</h1>
            <button   onClick={() => setToggle(!toggle)}>{(toggle) ? "i am true" : "i am false"}</button>
        </div>
    )
}
export default MainPage;