import { render } from "@testing-library/react";
import HelloWorld from "../components/helloWorld";
import "@testing-library/jest-dom";

test("render hello world text", () => {
  //Checking if Hello World text is present in the HelloWorld component
  const { getByText } = render(<HelloWorld />);
  const checkHelloWorldText = getByText("Hello World");

  expect(checkHelloWorldText).toBeInTheDocument();
});

test("should check name by test id", () => {
  const { getByTestId } = render(<HelloWorld />);
  const getElement = getByTestId("name");
  // const getElement = getByTestId("name1");

  expect(getElement.textContent).toBe("Sahil Katkamwar");
});
