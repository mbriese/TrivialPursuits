import { SetStateAction, useState } from "react";

const GetName = () => {
  const [name, setName] = useState('');
  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setName(event.target.value);
    console.log('name is: ', event.target.value);
  };
  return (
    <div>
      <input type = "text"></input>
      
    </div>
  )
}

export default GetName;