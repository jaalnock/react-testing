import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/counter";

test("should test counter logic", () => {
  // Firstly getting the element by text
  // so it'll be Count is: 0
  // After getting text, getting button element
  // so that we can fire an event on it of click
  // After event check if counter value has increased by 1

  const { getByText } = render(<Counter />);
  const getCounterText = getByText("Count is: 0");
  const getButtonElementByText = getByText("Click");

  // clicking the button having text click
  fireEvent.click(getButtonElementByText);

  expect(getCounterText.textContent).toBe("Count is: 1");

  fireEvent.click(getButtonElementByText);

  expect(getCounterText.textContent).toBe("Count is: 2");
});


// Another way to test the same using "getByRole"
test('increases counter on button click', () => {
  const { getByText, getByRole } = render(<Counter />);

  const counterText = getByText(/Count is:/);
  const button = getByRole('button', { name: /Click/ });

  fireEvent.click(button);

  expect(counterText).toHaveTextContent('Count is: 1');
});
