import React, {useState, useRef} from "react";

const MainPage = () => {
    const [query, setQuery] = useState("");
    const timeoutRef = useRef(null);

    const handleChnage = (e) => {
        const value = e.target.value;
        setQuery(value);

        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            console.log("AOI call with:", value);
        }, 100);
    };

    return(
        <div>
            <h1>Debouncee Search</h1>
            <input
            type="text"
            value={query}
            onChange={handleChnage}
            placeholder="Search...." 
             />
        </div>
    )
}

export default MainPage;