import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 제목변경] = useState([
    "남자 코트 추천",
    "아이 코트 추천",
    "부모님선물",
  ]);
  let logo = "ReactBlog";
  let [따봉, 따봉변경] = useState(0);
  let [modal, setmodal] = useState(false);
  let [title, settitle] = useState(0);

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
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트추천";
            제목변경(copy);
          }}
        >
          글수정
        </button>

        <button
          onClick={() => {
            let arr = [...글제목];
            //document.write(글제목.sort());
            arr = arr.sort();
            제목변경(arr);
          }}
        >
          가다다순 정렬
        </button>
      </div>
      <div className="list">
        <h4>
          {글제목[1]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>
          {글제목[2]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}{" "}
        </h4>
        <p>2월 18일 발행</p>

        <button
          onClick={() => {
            setmodal(true);
          }}
        >
          팝업창 열기
        </button>

        <button
          onClick={() => {
            setmodal(false);
          }}
        >
          팝업창 닫기
        </button>
      </div>

      <button
        onClick={() => {
          settitle(0);
        }}
      >
        글제목0
      </button>

      <button
        onClick={() => {
          settitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          settitle(2);
        }}
      >
        글제목2
      </button>

      <div>
        <input type= "text" title="입력"></input>
        <button onClick={() => {}}>클릭</button>
      </div>

      {modal == true ? (
        <Modal title={title} 제목변경={제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

//컴포넌트를 쓰면 좋은것들
//1.반복적인 html을 축약할때
//2.큰페이지들
//3.자주변경되는것들
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.제목변경(["여자 코트 추천", "아이 코트 추천", "부모님선물"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
