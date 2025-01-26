import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Child from "../components/child";

test("should check props value", () => {
  const { getByTestId } = render(<Child count={786} />);
  const getElement = getByTestId("child-count-value");

  expect(getElement.textContent).toBe("786");
});
