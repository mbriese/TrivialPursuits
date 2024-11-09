import { useState } from "react";
let [playerName, setName] = useState("");
const getName = () => {
  const [name, setName] = useState("");
  const handleChange = (event: { target: { value: any } }) => {
    console.log("name is: ", event.target.value);
  };
  return (
    <>
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
      <div className="badge main-nav cardsContainer">
        Lets play Trivial Pursuit {playerName}
      </div>
    </>
  );
};

export default getName;
