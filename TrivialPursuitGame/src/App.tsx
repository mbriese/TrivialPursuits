import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Message from "./Message";
import NameText from "./components/GetName";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState('');
  const [contestantName, setName] = useState('');
  const gameTitle = "Trivial Pursuit";


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

      <div className="card">
        <div className="h2 page-section-inner"><Message /></div>
        <div className="h2 page-section-inner message">{gameTitle}</div>
        
        <button onClick={() => setCount((count) => count + 1)}>
          score is {count}
        </button>
      </div>
      <button onClick={() => setAnswer((answer) => 'true')}>
          Click to Play Game
      </button>

    </div>
  );
}

export default App;
