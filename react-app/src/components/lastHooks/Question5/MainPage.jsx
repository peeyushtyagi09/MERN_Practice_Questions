import React, {useState} from 'react';

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div>
            <p>Question1</p>
            <button onClick={() => {setIsOpen(prev => !prev)}}>OpenIt</button>
            {
                isOpen ? <div>open</div> : <div></div>
            }
        </div>
    )
}
export default MainPage;

// i use useState in this because we are sharing data in a samll tree foryou can say in a single components so local state will perfect for that.