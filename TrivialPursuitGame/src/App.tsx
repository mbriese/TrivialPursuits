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
  }
 // const [quitAnswer, setQuitAnswer] = useState(false);
  const quitHandler = () => {
    setPlayAnswer(false);
 //   setQuitAnswer(true);
  }
  let quit = !playAnswer;
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

      <div className="containerCard">
        <div className="badge center">
          <Message/>
        </div>
        { !playAnswer &&
            <button
            className="h2 cardsContainer button center"
            onClick={(playHandler)}>
          Click to Play Game!
        </button>}
        {  !quit &&
            <button
            className="h2 cardsContainer button center"
            onClick={(quitHandler)}>
          Click to Quit Game!
        </button>
        }

        { playAnswer &&
            <>
              <div className="badeg cardsContainer">{gameName}</div>

              <div className="badge cardsContainer main-nav category-section-title">
                Enter Player Name
                <input
                    type="string"
                    id="playerName"
                    name="playerName"
                    onChange={handleChange}
                    value={playerName}
                />
              </div>
              <div className="badge main-nav cardsContainer">Lets play Trivial Pursuit {playerName}</div>
              {{playerName} && <div className="badge cardsContainer">
                <GameCard/>
              </div>}
              {{playAnswer} && <div className="flex-container">
                      <span className="badge category-nav left">
                          Prev Question
                      </span>
                <span className="badge category-nav right">
                          Next Question
                      </span>
              </div>}
              <div className="flex-container">
              <span className="badge button left">Prev Category</span>
              <span className="badge button right">Next Category</span>
              </div>
              <div>
              <span
                  className="flex-container"
                  onClick={() => setCount((count) => count + 1)}>
                category score is {count}
              </span>
              <span className="flex-container"
                  onClick={() => setCount((count) => count + 1)}>
                overall score is {count}
              </span>
              </div>
            </>
        }
      </div>
    </div>
  );
}

export default App;
