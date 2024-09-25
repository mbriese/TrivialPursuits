import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Message from "./Message";
import NameText from "./components/GetName";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [contestantName, setName] = useState("");
  const gameTitle = "Trivial Pursuit";

  function displayGameName() {
    <span>gameName</span>;
  }

  return (
    <div className="App">
      <div>
          <img
            src="/trivialpursuitssmallimage.webp"
            className="logo align-center"
            alt="Vite logo"
          />
      </div>

      <div className="card">
        <div className="h2 page-section-inner">
          <Message />
        </div>
        <div className="h2 page-section-inner message">{gameTitle}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          category score is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          overall score is {count}
        </button>
      </div>
      <button onClick={() => setAnswer(answer => !answer)}>
        Click to Play Game
      </button>
    </div>
  );
}

export default App;
