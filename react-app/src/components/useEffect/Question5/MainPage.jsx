import React, {useEffect} from 'react';

const MainPage = () => {

    useEffect(() => {
        alert("i run only once"); 
        return () => {
            alert("i am unmounted");
        }
    }, []);
    return (
        <div> 
            <p>i am mounted</p>
        </div>
    )
}

export default MainPage;