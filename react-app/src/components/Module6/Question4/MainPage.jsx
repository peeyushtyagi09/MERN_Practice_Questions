import React from "react";
import MouseTracker from "./MouseTracker";

const MainPage = () => {
  return (
    <div>
      <h1>Render Props Pattern</h1>

      <MouseTracker
        render={({ x, y }) => (
          <h2>
            Mouse Position: {x}, {y}
          </h2>
        )}
      />
    </div>
  );
};

export default MainPage;
