import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0);
  const gameTitle = "Family Game Night";
  
  return (
    <div className="App">
      <div>
        <a
          // href="https://vitejs.dev"
          target="_blank">
          <img
            src="/trivialpursuitssmallimage.webp"
            className="logo align-center"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>Trivial Pursuit</h1>
      <div className="card">
        <div className="message">{gameTitle}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
