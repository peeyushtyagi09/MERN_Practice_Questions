import React, {useState} from 'react';

const MainPage = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <h1>Question 5</h1>
            <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)} 
            />
            <p>Name: {name}</p>
        </div>
    )
}

export default MainPage;