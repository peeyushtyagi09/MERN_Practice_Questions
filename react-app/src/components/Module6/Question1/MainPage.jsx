import React, { useState } from "react";
import Child from "./Child";

const MainPage = () => {
  const [username] = useState("peeyush");

  return (
    <div>
      <h1>Parent</h1>
      <Child username={username} />
    </div>
  );
};

export default MainPage;
