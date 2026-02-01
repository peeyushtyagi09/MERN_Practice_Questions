import React, { useState } from 'react';

const Email = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
      };
      

      const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!email.includes("@")) {
          setError("Invalid email");
          return;
        }
      
        setError("");
        alert(`Submitted: ${email}`);
      };
      
    
    return(
        <form onSubmit={handleSubmit}>
            <input
            value={email}
            onChange={handleChange}
            placeholder="Enter email"
                />
                {error && <p>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Email;