import "./App.css";
import ApiTesting from "./components/apiTesting";
import Counter from "./components/counter";
import HelloWorld from "./components/helloWorld";
import ThemeButton from "./components/themeButton";
import ThemeRender from "./components/themeRender";

function App() {
  return (
    <>
      <div>
        <h1>React Unit Testing</h1>
        <HelloWorld />
        <Counter />
        <ApiTesting />
        <ThemeRender />
        <ThemeButton />
      </div>
    </>
  );
}

export default App;
