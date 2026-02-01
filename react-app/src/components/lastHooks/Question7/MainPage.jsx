import React, {useState, useEffect, useRef} from "react";

const MainPage = () => {

    const [text, setText] = useState('');
    const [debounceText, setDebounceText] = useState('');

    const timeoutRef = useRef(null);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    useEffect(() => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
            timeoutRef.current = setTimeout(() => {
                setDebounceText(text);
            }, 500);

            return () => clearTimeout(timeoutRef.current);
    }, [text]);

    useEffect(() => {
        if(!debounceText) return;
        console.log("Api called with:", debounceText);
    }, [debounceText]);
    return (
        <div>
          <h1>Question 1 – Debounced Search</h1>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
      );
    };
    
export default MainPage;