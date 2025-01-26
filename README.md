# Jest Testing Framework

Jest is a popular JavaScript testing framework developed by Facebook. It's widely used for testing JavaScript code, especially for React applications, but it works with any JavaScript project. Jest makes it easy to write tests for your code by providing a set of tools and utilities for running tests, mocking functions, and checking results.

## Key features of Jest:

- **Zero Configuration**: Jest works out of the box for most JavaScript projects, especially those using React. You can get started with minimal setup.

- **Test Runner**: Jest runs your tests and outputs the results, showing which tests passed or failed.

- **Assertions**: Jest comes with a set of built-in assertion functions (like `expect()`) that allow you to compare actual values against expected ones to verify your code works correctly.

- **Mocking**: Jest has built-in support for mocking functions, modules, and timers, which makes it easy to simulate different scenarios in your tests without relying on external dependencies.

- **Snapshots**: Jest allows you to take "snapshots" of your components or other data structures and compare them to previous snapshots to catch unintended changes.

- **Parallel Test Execution**: Jest runs tests in parallel, which makes it faster for large codebases by running multiple tests simultaneously.

- **Code Coverage**: Jest can track and generate code coverage reports to show you how much of your code is covered by tests.

- **Asynchronous Testing**: Jest supports testing asynchronous code with promises, `async/await`, and callbacks, making it useful for testing APIs, async functions, and more.

# Project Setup

This project uses Babel, Jest, and React Testing Library for modern JavaScript and React development. The following command installs necessary dependencies for setting up Babel and testing tools.

## Installation

To get started, run the following command to install the required dependencies as development dependencies:

```bash
npm install --save-dev @babel/preset-env @babel/preset-react jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event

```

### Breakdown of the Installed Packages

- **`@babel/preset-env`**: This Babel preset allows you to use the latest JavaScript features while ensuring compatibility with the environments you target.

- **`@babel/preset-react`**: This Babel preset is necessary to compile JSX syntax for React projects.

- **`jest`**: A popular testing framework for JavaScript applications.

- **`@testing-library/react`**: A set of utilities for testing React components in a way that simulates real user behavior.

- **`@testing-library/jest-dom`**: Custom matchers for Jest, making it easier to assert things about DOM elements.

- **`jest-environment-jsdom`**: Configures Jest to use `jsdom` (a browser-like environment) for running tests.

- **`@testing-library/user-event`**: A library for simulating user interactions in tests, such as clicks, typing, etc.



# Running Tests While Keeping the App Active

To run your tests while keeping your app active, follow these steps:

1. Open another terminal window (while your app is running).
2. In the new terminal, type the following command:

```bash
npm run test
```

This will run your tests, and the app will continue running in the original terminal.
