import React, { useEffect, useMemo, useState } from "react";

const hardCalculate = (number) => {
  for (let i = 0; i < 9999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  for (let i = 0; i < 200; i++) {}
  return number + 1;
};

const UseMemo1 = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  const [number, setNumber] = useState(0);
  const [iskorea, setIskorea] = useState(true);

  const location = iskorea ? "한국" : "외국";
  const location2 = useMemo(() => {
    return { country: iskorea ? "한국" : "외국" };
  }, [iskorea]);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = useMemo(() => {
    return easyCalculate(easyNumber);
  }, [easyNumber]);

  useEffect(() => {
    console.log("useEffect 호출");
  }, [location2]);

  return (
    <div>
      <h1>어려운 계산기</h1>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => {
          setHardNumber(parseInt(e.target.value));
        }}
      />
      <span> +100 = {hardSum}</span>

      <h1>쉬운 계산기</h1>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => {
          setEasyNumber(parseInt(e.target.value));
        }}
      />
      <span> +1 = {easySum}</span>

      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />

      <h2>어느나라에 있어요?</h2>
      <p>나라 : {location2.country}</p>
      <button
        onClick={() => {
          setIskorea(!iskorea);
        }}
      >
        비행기 타자
      </button>
    </div>
  );
};

export default UseMemo1;
