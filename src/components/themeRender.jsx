// Theme.jsx
import React from "react";
import { useTheme } from "../context";

const ThemeRender = () => {
  const { theme } = useTheme(); 

  return (
    <div>
      <h2>Current theme is: {theme}</h2>
    </div>
  );
};

export default ThemeRender;
