import { useState } from "react";

const getName = () => {
  const [name, setName] = useState('');
  const handleChange = (event: { target: { value: any; }; }) => {
    console.log('name is: ', event.target.value);
  };
  return (
    <div>
      <h2>this is where I will enter player name</h2>
      <input type = "text" id="nameText" name="name" onChange={handleChange} value={name} />
      <h2>Enter name: {name}</h2>
    </div>
  );
};

export default getName;