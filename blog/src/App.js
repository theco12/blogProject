
import './App.css';
import { useState } from 'react';

function App() {
  

  let [글제목, 제목변경] =  useState(['남자 코트 추천', '아이 코트 추천' ,'react']);
  let logo = 'ReactBlog';
  let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      
      <div className="gnb">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
        <button onClick={ () => {
          글제목[0] = '여자코트추천';
          제목변경(글제목)
          }}>글수정</button>
      </div>
      <div className="list">
        <h4>{ 글제목[1] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] } <span onClick={() => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 18일 발행</p>
      </div>
    </div>
  );
}

export default App;
