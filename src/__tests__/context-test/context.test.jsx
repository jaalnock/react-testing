//Firstly check if context is receiving child components
//which are themeButton.jsx and themeRender.jsx

import React from "react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../../context";
import { render } from "@testing-library/react";

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
});
