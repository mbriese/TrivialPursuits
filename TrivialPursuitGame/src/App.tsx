import { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [count, setCount] = useState(0);
  const [playAnswer, setPlayAnswer] = useState(false);
  const playHandler = () => {
    setPlayAnswer(true);
  }
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

 // const ToggleVisibility = (event: { target: { }})

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
          className="h2 container button"
          onClick={(playHandler)}>
          Click to Play Game!
        </button>

          {/*<div className="h2 container">( {gameName}  && { playAnswer })</div>*/}
          { playAnswer &&
          <div className="h2 container"> "Welcome" </div> }

          { playAnswer &&
         <div className="p page-section-inner">
          Enter Player Name
          <input
            type="string"
            id="playerName"
            name="playerName"
            onChange={handleChange}
            value={playerName}
          />
          {<p>Lets play Trivial Pursuit {playerName}</p>}
        </div>}
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

      </div>
    </div>
  );
}

export default App;
