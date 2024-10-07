import { useState } from "react";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  const [count, setCount] = useState(0);
  const [playAnswer, setPlayAnswer] = useState(false);

  let [playerName, setName] = useState("");
  let categories = [
    "Arts & Leisure",
    "Entertainment",
    "Geography",
    "Science & Nature",
    "Sports & Leisure",
  ];
  const gameName = "Trivial Pursuit Game Title";

  const handleChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
    console.log("name is: ", event.target.value);
  };


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
        <div className="h2 header">
          <Message/>
        </div>
        <button
            className="h2 flex-container center button"
        >
          Click to Play Game
        </button>

        <div className="topnav container">
              <span className="topnav button left">
                Back
              </span>
          <span className="topnav button right">
                Next
              </span>
        </div>

        <div className="h2 container">{gameName} && {playAnswer}</div>
        <div className="flex-container child">
          Enter Player Name
          <input
              type="string"
              id="playerName"
              name="playerName"
              onChange={handleChange}
              value={playerName}
          />
          {<p>Lets play Trivial Pursuit {playerName}</p>}
        </div>
        <div>
          <ListGroup />
          <ListGroup />
          <ListGroup />
        </div>
        <div className="h2 container page-section-inner">
          <p>Categories</p>
          <p>Select a Category</p>
          <ul className="page-section-item">
            {categories.map((categories) => (
                <li key={categories}>{categories}</li>
            ))}
          </ul>
        </div>
        <div className="page-section-item message">
          this will be category display
        </div>
        <div className="h2 page-section-inner-bold message">
          this will be question display
        </div>
        <div className="h2 page-section-inner message">
          this will be answer1 button
        </div>
        <div className="h2 page-section-inner message">
          this will be answer2 button
        </div>
        <div className="h2 page-section-inner message">
          this will be answer3 button
        </div>

        <div className="h2 flex-container button-item">Previous Category</div>
        <div className="h2 flex-container button-item">Next Category</div>
        <button
            className="h2 button-item"
            onClick={() => setCount((count) => count + 1)}>
          category score is {count}
        </button>
        <button
            className="h2 button-item"
            onClick={() => setCount((count) => count + 1)}>
          overall score is {count}
        </button>

      </div>
    </div>
  );
}

export default App;
