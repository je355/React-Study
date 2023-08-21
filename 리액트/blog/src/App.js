import logo from './logo.svg';
import './App.css';
// css 파일 쓸려면 경로 꼭

function App() {

  let post = '대소고 기숙사 204호';
  // 기존 Js는 document.querySelector등등 엄청 길게 써야함 
  // 하지만 JSX는 변수 사용 시 중괄호만 하면 됨

  //중괄호 변수 : 데이터 바인딩
  return (
    <div className="App">
      <div className="black-nav">
        {/* class 넣을땐 className 사용 */}
        <h4 style={{color : 'red', fontsize: '16px'}}>
          {/* font-size 사용 불가능, -기호 존재 */}
          블로그</h4>
        {/* css도 사용 가능함  
        style 넣을 땐 style={ { 스타일명 : 값 }}*/}
        
        {/* <h4 id="{post}">블로그</h4>도 가능 
        이케 사용하면 아이디가 대소고 기숙사 204호가 되는것 */}
      </div>
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
