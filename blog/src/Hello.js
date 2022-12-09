import { useState } from "react";

const Hello = (props) => {
  const [name, setName] = useState("Mike");
  console.log();

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Hello;
