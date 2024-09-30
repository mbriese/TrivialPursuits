import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Message from "./Message";
import getName from "./components/GetName";

function App() {
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  let [playerName, setName] = useState("");
  let categories = [
    "Arts & Leisure",
    "Entertainment",
    "Geography",
    "Science & Nature",
    "Sports & Leisure",
  ];
  const gameTitle = "Trivial Pursuit Game Title";
  const handleChange = (event: { target: { value: string } }) => {
    setName(event.target.value);
    console.log("name is: ", event.target.value);
  };
  const onClick = (event: { target: { value: boolean } }) => {
    setAnswer(event.target.value);
    console.log("do I want to play: ", event.target.value);
  };
  const [quit, setQuit] = useState(false);

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

        <button
          className="h2 button-item"
          onClick={() => setAnswer(!answer)}>
          Click to Play Game
        </button>

        <div className="h2 page-section-inner">{gameTitle}</div>
        <div className="p page-section-inner">
          Enter Player Name
          <input
            type="string"
            id="playerName"
            name="playerName"
            onChange={handleChange}
            value={playerName}
          />
          {<p>Lets play {playerName}</p>}
        </div>
        <div className="h2 page-section-inner">
          <p>Categories</p>
          <p>Select a Category</p>
          <ul className="page-section-item">
            {categories.map((categories) => (
              <li key={categories}>{categories}</li>
            ))}
          </ul>
        </div>
        <div className="h2 category-section-title message">
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
        <table>
          <tbody>
            <tr>
              <td className="h2 button-item message d-table-cell display:inline">
                Back
              </td>
              <td className="h2 button-item message d-table-cell display:inline">
                Next
              </td>
            </tr>
          </tbody>
        </table>
        <div className="h2 button-item message">Previous Category</div>
        <div className="h2 button-item message">Next Category</div>
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
        <button
          className="h2 button-item"
          onClick={() => setQuit((quit) => !quit)}>
          Exit?
        </button>
      </div>
    </div>
  );
}

export default App;
