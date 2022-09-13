import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남우동맛집';
  useState('남자 코트 추천')

  return (
    <div className="App">
      <div className="blog_nav">
        <h4>블로그임</h4>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>9월 11일 발행</p>
      </div>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    
    </div>
  );
}

export default App;
