import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Child from "../components/child";

test("should check props value", () => {
  const { getByTestId } = render(<Child count={786} />);
  const getElement = getByTestId("child-count-value");

  expect(getElement.textContent).toBe("786");
});

test("should toggle the theme", () => {
  const { getByTestId } = render(<Child count={500} />);
  const getThemeElement = getByTestId("toggle-text");
  const getButtonElement = getByTestId("toggle-button");

  expect(getThemeElement.textContent).toBe("dark");

  fireEvent.click(getButtonElement);

  expect(getThemeElement.textContent).toBe("light");
});
