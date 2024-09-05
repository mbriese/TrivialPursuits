import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
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
      <h1 className="page-section-title">Trivial Pursuit</h1>
      <div className="card">
        <div className="h2 page-section-inner message">{gameTitle}</div>
        <div className="h2 page-section-inner">Select a Subject</div>
        <button onClick={() => setCount((count) => count + 1)}>
          score is {count}
        </button>
        <p>
          Click Here to Play
        </p>
      </div>
      <p className="page-section-inner read-the-docs">
        Click Directions to read the docs
      </p>
    </div>
  );
}

export default App;
