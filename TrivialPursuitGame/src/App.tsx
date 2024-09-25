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
  const gameTitle = "Trivial Pursuit Game Title";

  function displayGameName() {
    <span>gameName</span>;
  }

  function getName() {
    <span>display Name</span>;
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
        <div className="h2 page-section-inner message">put in text field to getName</div>
        <div className="h2 page-section-inner message">this is where we select category</div>
        <div className="h2 category-section-title message">this will be category display</div>
        <div className="h2 page-section-item message">this will be question display</div>
        <div className="h2 page-section-item message">this will be answer1 button</div>
        <div className="h2 page-section-item message">this will be answer2 button</div>
        <div className="h2 page-section-item message">this will be answer3 button</div>
        <div className="h2 button-item message">Back</div>
        <div className="h2 button-item message">Next</div>
        <div className="h2 button-item message">Previous Category</div>
        <div className="h2 button-item message">Next Category</div>
        <button className="h2 button-item" onClick={() => setCount((count) => count + 1)}>
          category score is {count}
        </button>
        <button className="h2 button-item" onClick={() => setCount((count) => count + 1)}>
          overall score is {count}
        </button>
      </div>
      <button className="h2 button-item" onClick={() => setAnswer(answer => !answer)}>
        Click to Play Game - this will make things appear/disapper
      </button>
    </div>
  );
}

export default App;
