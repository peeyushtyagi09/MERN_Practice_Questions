import React, {useState} from 'react';

const MainPage = () => {
    const [text, setText] = useState();

    const handleText = (e) => {
        const value = e.target.value;
        setText(value);
    }

    return(
        <div>
            <h1>Question2</h1>
            <input
            value={text}
            type="text"
            onChnage={handleText}
             />
             <p>Text: {text}</p>
        </div>
    )
}

export default MainPage;