import React, { useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운계산");
  for (let i = 0; i < 200; i++) {}
  return number + 100;
};

const UseMemo1 = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const hardSum = hardCalculate(hardNumber);

  return (
    <div>
      <h1>계산기</h1>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      />
      <span> +100 = {hardSum}</span>
    </div>
  );
};

export default UseMemo1;
