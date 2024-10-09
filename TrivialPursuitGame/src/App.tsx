import { useState } from "react";
import "./App.css";
import Message from "./Message";
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

      <div className="card">
        <div className="container center">
          <Message/>
        </div>
        { !playAnswer &&
            <button
            className="h2 container button center"
            onClick={(playHandler)}>
          Click to Play Game!
        </button>}
        {  !quit &&
            <button
            className="h2 container button center"
            onClick={(quitHandler)}>
          Click to Quit Game!
        </button>
        }

        { playAnswer &&
            <>
              <div className="h2 container center">{gameName}</div>

              <div className="topnav flex-container center child">
                Enter Player Name
                <input
                    type="string"
                    id="playerName"
                    name="playerName"
                    onChange={handleChange}
                    value={playerName}
                />

              </div>
              <div className="topnav container card child">Lets play Trivial Pursuit {playerName}</div>
              {{playerName} && <div className="topnav container card">
                <GameCard/>
              </div>}
              <div className="topnav container">
                      <span className="button-nav button left">
                          Prev Question
                      </span>
                <span className="button-nav button right">
                          Next Question
                      </span>
              </div>
              <div className="topnav container">
              <span className="h2 topnav button-item center">Previous Category</span>
              <span className="h2 topnav button-item center">Next Category</span>
              </div>
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
            </>
        }


      </div>
    </div>
  );
}

export default App;
