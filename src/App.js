import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

let post = '공동교육과정'

function App() {
  let [title, setTitle] = useState(['스마트폰 추천', '웹 프로그래밍', '자바스크립트']);
  let [like, setLike] = useState(0);

  return (
    <div>
      <div className="black-nav">
        <h3>블로그</h3>
      </div>
      <button onClick={()=>{
        setTitle(['공동교육과정', '웹 프로그래밍', '자바스크립트'])
      }}>버튼</button>
      <div className="list">
        <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>좋아요 👍</span>{like}</h4>
        <p>2023년 4월 11일</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2023년 4월 11일</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2023년 4월 11일</p>
      </div>
      
    </div>
  );
}

export default App;
