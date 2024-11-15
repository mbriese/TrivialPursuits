import { useState } from "react";
import "./App.css";
import Message from "./Message";
import GetName from "./components/GetName";
import GameCard from "./components/GameCard";

function App() {
  const [count, setCount] = useState(0);

  const [playAnswer, setPlayAnswer] = useState(false);
  const playHandler = () => {
    setPlayAnswer(true);
    // setQuitAnswer(false);
  };
  // const [quitAnswer, setQuitAnswer] = useState(false);
  const quitHandler = () => {
    setPlayAnswer(false);
    //   setQuitAnswer(true);
  };
  let quit = !playAnswer;
  let [playerName, setName] = useState("");
  let categories = [
    "Geography",
    "Entertainment",
    "History",
    "Art &",
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

      <div className="containerCard">
        <div className="h2 cardsContainer center">
          <Message />
        </div>

        {!playAnswer && (
          <button
            className="cardsContainer button"
            onClick={playHandler}>
            Click to Play Game!
          </button>
        )}
        {!quit && (
          <button
            className="cardsContainer button"
            onClick={quitHandler}>
            Click to Quit Game!
          </button>
        )}

        {playAnswer && (
          <>
            <div className="badge cardsContainer">{gameName}</div>

            <div className="badge cardsContainer">
              Enter Player Name
              <input
                type="string"
                id="playerName"
                name="playerName"
                onChange={handleChange}
                value={playerName}
              />
            </div>
            <div className="badge main-nav cardsContainer top">
              Lets play Trivial Pursuit {playerName}
            </div>
            <div className="content">
              <div className="cardContainer">
                <div className="card">
                <GameCard
                  category="geography"
                  question="Which of the five Great Lakes does not have a border with Canada?"
                  answer="Lake Michigan"
                />
                </div>

                <div className="badge cardsContainer col-md-8">
                  <span className="badge category-nav left">Prev Question</span>
                  <span className="badge category-nav right">
                    Next Question
                  </span>
                </div>

                <div className="badge cardsContainer col-md-8">
                  <span className="badge category-nav left">Prev Category</span>
                  <span className="badge category-nav right">
                    Next Category
                  </span>
                </div>
                <div className="badge category-nav left">
                  <span
                    className="badge"
                    onClick={() => setCount((count) => count + 1)}>
                    category score is {count}
                  </span>
                  <span
                    className="badge"
                    onClick={() => setCount((count) => count + 1)}>
                    overall score is {count}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
