import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ApiTesting from "../components/apiTesting";
import "@testing-library/jest-dom";

describe("Api testing file", () => {
  it("check list of users", async () => {
    // Mock the fetch call
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: "Sahil Katkamwar" },
            { id: 2, name: "JaaLNocK" },
          ]),
      })
    );

    render(<ApiTesting />);

    // Initially, "Loading data..." should be visible
    expect(screen.getByText("Loading data...")).toBeInTheDocument();

    // Wait for the users to load and check if they appear in the document
    await waitFor(() => {
      expect(screen.getByText("Sahil Katkamwar")).toBeInTheDocument();
      expect(screen.getByText("JaaLNocK")).toBeInTheDocument();
    });

    // "Loading data..." should no longer be visible once the data is loaded
    expect(screen.queryByText("Loading data...")).not.toBeInTheDocument();
  });
});
