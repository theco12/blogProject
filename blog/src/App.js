/*eslint-disable*/
import "./App.css";
import { useState, useTransition } from "react";

const App = () => {
  let [글제목, 글제목변경] = useState([
    "여자코트추천",
    "남자코트추천",
    "파이썬공부",
  ]);

  let logo = useState("reactblog");
  let [like, setlike] = useState(0);
  let [modal, setmodal] = useState(false);

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
            👍{like}
          </span>
        </h4>
        <p>2022년 9월 29일</p>
      </div>

      {modal === true ? <Modal /> : null}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
    </div>
  );
};

export default App;
