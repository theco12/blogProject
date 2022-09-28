import "./App.css";
import { useState } from "react";

function App() {
  let logo = "react blog";
  let [글제목, 글제목변경] = useState([
    "여자코트추천",
    "남자코트추천",
    "파이썬공부",
  ]);
  let [like, setlike] = useState(0);

  return (
    <div className="App">
      <div className="gnb">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              setlike(like + 1);
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
