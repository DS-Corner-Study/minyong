import './App.css';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";



//[함수 선언식으로 컴포넌트 만드는 경우]
// function Header() { 
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   ); 
// }



//[화살표 함수로 컴포넌트 만드는 경우]
// const Header = () => { 
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };



//[Header.js, Body.js, Footer.js 파일 생성해서 따로 관리]
// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }
// export default App;



//[Props로 하나의 값 전달하기]
// function App(){
//   const name = "정민주";
//   return (
//     <div className="App">
//       <Header />
//       <Body name={name} />
//       <Footer />
//     </div>
//   );
// }
// export default App;



//[Props로 여러 개의 값 전달하기]
// function App(){
//   const name = "정민주";
//   return (
//     <div className="App">
//       <Header />
//       <Body name={name} location={"서울시"} />
//       <Footer />
//     </div>
//   );
// }
// export default App;



//[스프레드 연산자로 여러 개의 값 쉽게 전달하기]
// function App(){
//   const BodyProps = {
//     name: "정민주",
//     location: "서울시",
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Body {...BodyProps} />
//       <Footer />
//     </div>
//   );
// }
// export default App;



//[기본값 설정하기]
// function App(){
//   const BodyProps = {
//     name: "정민주",
//     location: "서울시",
//     //favorList: ["파스타", "빵", "떡볶이"],
//   };

//   return (
//     <div className="App">
//       <Header />
//       <Body {...BodyProps} />
//       <Footer />
//     </div>
//   );
// }
// export default App;



//[Props로 컴포넌트 전달하기]
function ChildComp() {
  return <div>child component</div>
}
function App(){
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}
export default App;