// Button.jsx
import React from "react";
import { useTheme } from "../context";

const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeButton;
