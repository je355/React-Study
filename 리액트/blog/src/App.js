/*eslint-diable*/

import logo from './logo.svg';
import './App.css';
// css 파일 쓸려면 경로 꼭
import {useState} from 'react';

function App() {

  let post = '대소고 2023';
  // 기존 Js는 document.querySelector등등 엄청 길게 써야함 
  // 하지만 JSX는 변수 사용 시 중괄호만 하면 됨
  let [글제목, 글제목변경] = useState(['대소고 1학년 동복', '1학년 해양수련원 일정표', '9월 26-27일 중간고사'])
  // 자료 잠깐 보관하기
  // impot {useState} -> useState(보관자료) -> let [작명, 작명]
  //b -> state 변경 도와주는 함수
  //state는 html에 자동 재렌더링 되서 사용
  // let [logo, setLogo] = useState('ReactBlog')

  // let num = [1, 2];
  // let a = [0];
  // let c = [1];
  // let [a, c] = [1, 2];
  let [따봉, 따봉변경] = useState(0);
  //따봉변경은 state변경 함수 

  // function 함수(){
  //   console.log(1);
  // }

  //중괄호 변수 : 데이터 바인딩
  return (
    // 리턴 안에는 병렬로 태그 두개 불가
    <div className="App">
      <div className="black-nav">
        {/* class 넣을땐 className 사용 */}
        <h4 
        // style={{color : 'red', fontsize: '16px'}}
        >
          {/* font-size 사용 불가능, -기호 존재 */}
          ReactBlog</h4>
        {/* css도 사용 가능함  
        style 넣을 땐 style={ { 스타일명 : 값 }}*/}
        
        {/* <h4 id="{post}">블로그</h4>도 가능 
        이케 사용하면 아이디가 대소고 기숙사 204호가 되는것 */}
      </div>

      <button onClick={()=>{

        let arr = [1, 2, 3];
        // Array/object 담은 변수에만 화살표 저장 됨
        //array, object 는 referce data type

        let copy = [...글제목];
        copy[0] = '해양수련원 준비물'
        글제목변경(copy);
      }}> 글 수정 </button>
      {/* state 변경 함수 
      기존 state== 신규 state 경우 변경 불가 */}

      {/* state가 array/object면 독립적 카피본 만들어 수정해야 함 (shallow copy)*/}

      {/* 컴퍼넌트는 state를 사용 시 에러 */}

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=> { 따봉변경(따봉+1) }}> 👍 </span> { 따봉 } </h4>
        {/*onClick ={} 안에 함수 넣기*/}
        {/*항상 state 변경 함수 사용하기*/}
        <p> 8월 27일 발행 </p>
      </div>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p> 8월 27일 발행 </p>
      </div>
      
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p> 8월 27일 발행 </p>
      </div>
      {/* <h4>{ post }</h4> */}

      <Modal></Modal>
      {/* </Modal> */}
      {/* 도 가능 */}

    </div>
  );
}

// const Modal = () => {
// //  const 사용시 실수 에러 메세지 출력 해줌
// }

function Modal(){ 
  //Modal -> 컴포넌트
  // 다른 함수 밖에서 만들기, 영어 대문자
  return(
    <>
    {/* 리액트에서 병렬적으로 div 태그를 쓰기 위해서는 감싸는 게 필요
    의미 없는 div 대신 <>로 감싸기 가능 */}
    <div className='modal'>
        <h4> 제목 </h4>
        <p> 날짜 </p>
        <p> 상세내용 </p>
      </div>
      {/* 컴퍼넌트 만드는 법 
      1. function 만들기 
      2. return안에 html 담기 
      3. <함수명></함수명> 하기 */}

      {/* 컴퍼넌트로 만들면 좋은 것 
      1. 반복적 html 축약 시 
      2. 큰 페이지들 
      3. 자주 변경 되는 것 */}
      <div>야호</div>
    </>
  )
}

export default App;
