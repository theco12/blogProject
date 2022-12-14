import { useState } from "react";
import { useRecoilState } from "recoil";
import { textState } from "./atom";

const Hello = (props) => {
  const [name, setName] = useRecoilState(textState);
  console.log();

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Hello;
