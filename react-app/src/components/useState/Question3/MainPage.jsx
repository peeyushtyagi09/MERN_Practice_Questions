import React, {useState} from 'react';
 
const MainPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div> 
            <h1>Question 3</h1>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
            />

            <button onClick={handleToggle}> {showPassword ? "Hide" : "show" } </button>
        </div>
    )
}
export default MainPage;