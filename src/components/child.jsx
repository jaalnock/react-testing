import React, { useState } from "react";

const Child = ({ count }) => {
  const [theme, setTheme] = useState(true);

  return (
    <div>
      <p data-testid="child-count-value">{count}</p>
      <button onClick={() => setTheme(!theme)} data-testid="toggle-button">
        Toggle
      </button>
      <h2 data-testid='toggle-text'>{theme ? "dark" : "light"}</h2>
    </div>
  );
};

export default Child;
