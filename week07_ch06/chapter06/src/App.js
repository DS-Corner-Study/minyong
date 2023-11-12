import "./App.css";
import { useRef, useState, useEffect } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false); //마운트 여부 판단 변수(Ref객체, 초깃값 false)

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  //[여러 개의 값 검사하기: 의존성 배열 요소 변경 시 콜백 함수 실행]
  // useEffect(() => {
  //   console.log("업데이트: ", text, count);
  // }, [count, text]);

  //[라이프 사이클 제어: 빈 의존성 배열 -> 렌더링할 때마다 콜백 함수 실행]
  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });

  //[라이프 사이클 제어2: 마운트 시점 제외, 리렌더될 때만 콜백 함수 실행]
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true; //마운트 시점(didMountRef=false)에서 이 문장 실행하면 didMountRef=true가 되어 다음 실행(마운트 제외, 리렌더)부터 "컴포넌트 업데이트!" 실행
      return;
    } else {
      console.log("컴포넌트 업데이트!");
    }
  });

  // //[마운트 제어: didMountRef와 조건문을 이용한 위 useEffect + 새로운 useEffect에 빈 의존성 배열 -> 마운트 시점에만 "컴포넌트 마운트", 리렌더에는 "컴포넌트 업데이트!"]
  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  // //[언마운트 제어: 의존성 배열x -> 렌더링할 때마다 콜백 함수 실행. 콜백 함수는 setInterval 함수 호출. setInterval 함수는 시간 간격 설정 함수.]
  // useEffect(() => {
  //   const intervalID = setInterval(() => { //인터벌 식별자(intervalID 생성 후 setInterval로 새 인터벌 생성하면 식별자를 반환해 intervalID에 저장.)
  //     console.log("깜빡");
  //   }, 1000);
  //   return () => { //클린업 함수: useEffect에 인수로 전달한 콜백 함수가 새 함수 반환. useEffect의 콜백 함수가 실행되기 전이나 컴포넌트가 언마운트하는 시점에 실행됨.
  //     console.log("클린업");
  //     clearInterval(intervalID); //clearInterval함수: 인수로 인터벌 식별자 전달해 앞서 생성한 인터벌 삭제.
  //   };
  // });


  //[클립업을 이용해 컴포넌트 언마운트 제어]

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />} 
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> 
      </section>
    </div>
  );
}

export default App;