import "./App.css";
import ApiTesting from "./components/apiTesting";
import Counter from "./components/counter";
import HelloWorld from "./components/helloWorld";

function App() {
  return (
    <>
      <div>
        <h1>React Unit Testing</h1>
        <HelloWorld />
        <Counter />
        <ApiTesting />
      </div>
    </>
  );
}

export default App;
