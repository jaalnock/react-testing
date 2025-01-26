//Firstly check if context is receiving child components
//which are themeButton.jsx and themeRender.jsx

import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider, useTheme } from "../../context";
import { fireEvent, render } from "@testing-library/react";
import ThemeRender from "../../components/themeRender";

const ToggleConsumer = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <button role="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <ThemeRender />
    </div>
  );
};

describe("should test context theme provider", () => {
  // content which we are passing to our context provider must be there
  it("renders children with initial light theme value", () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>This is a child component</div>
      </ThemeProvider>
    );

    expect(getByText("This is a child component")).toBeInTheDocument();
  });

  it("toggles between light and dark value on click of button", () => {
    const { getByText, getByRole } = render(
      <ThemeProvider>
        <ToggleConsumer />
      </ThemeProvider>
    );

    const getToggleButtonByRole = getByRole("button", {
      name: /toggle theme/i,
    });

    expect(getByText("Current theme is: light")).toBeInTheDocument();

    fireEvent.click(getToggleButtonByRole);

    expect(getByText("Current theme is: dark")).toBeInTheDocument();

    fireEvent.click(getToggleButtonByRole);

    expect(getByText("Current theme is: light")).toBeInTheDocument();
  });
});
