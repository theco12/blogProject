import React from "react";
import data from "../data/data.json";
const Map1 = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <ul>
      {arr.map((a, i) => {
        return <li key={i}>{a}</li>;
      })}
    </ul>
  );
};

export default Map1;
