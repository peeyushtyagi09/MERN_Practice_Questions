// basic solution
import React, {useState, useEffect} from 'react';

const MainPage = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(id); // what this line are doing and  if i doe not use it 
    }, [time]);

    return (
        <div>
            <p>Timer: {time}</p> 
        </div>
    )
}
export default MainPage;