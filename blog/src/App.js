import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0); // react 내자된 훅 api 라서

  const clickFunc = () => {
   
    setNum((prev) => {
      console.log(prev); // 이전 상태값
      return prev + 1;
    });
    // 함수를 인자로 넣어주세요!

  };


  return (
    <div>
      <span>{num}</span>
      <button onClick={clickFunc}>+</button>
    </div>
  );
};

export default App;
