import React, { useState } from "react";

const Question4 = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);

    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "") {
      setCelsius("");
    } else {
      setCelsius((((value - 32) * 5) / 9).toFixed(2));
    }
  };

  return (
    <div>
      <h1>Lifting State Up</h1>

      <div>
        <label>Celsius:</label>
        <input value={celsius} onChange={handleCelsiusChange} />
      </div>

      <div>
        <label>Fahrenheit:</label>
        <input value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
};

export default Question4;
