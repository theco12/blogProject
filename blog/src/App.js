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
  let [입력값, 입력값변경] = useState("");

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

      {글제목.map(function (a) {
        return (
          <div className="list">
            <h4>{a}</h4>
            <p>2022년 9월 29일</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          setmodal(true);
        }}
      >
        팝업열기
      </button>

      <button
        onClick={() => {
          setmodal(false);
        }}
      >
        팝업닫기
      </button>
      {modal === true ? <Modal 글제목={글제목} /> : null}
    </div>
  );
};

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
    </div>
  );
};

export default App;
