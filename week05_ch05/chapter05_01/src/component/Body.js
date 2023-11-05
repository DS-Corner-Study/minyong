// function Body() {
//     const numA = 1; 
//     const numB = 2;

//     const strA = "안녕";
//     const strB = "리액트";

//     const boolA = true;
//     const boolB = false;

//     //JSX은 원시 자료형만 사용가능.. if) 객체 자료형 사용 시 오류 -> 프로퍼티 접근 표기법으로 원시 자료형으로 바꿔줌.
//     const objA = {
//         a: 1,
//         b: 2,
//     };

//     return (
//         <div>
//             <h1>body</h1>
//             <h2>{numA + numB}</h2> 
//             <h2>{strA + strB}</h2>
//             <h2>{String(boolA || boolB)}</h2>
//             {/* <h2>{objA}</h2> */}
//             {/* if) 객체 자료형 사용 시 오류 -> 프로퍼티 접근 표기법으로 원시 자료형으로 바꿔줌. */}
//             <h2>a: {objA.a}</h2>
//             <h2>b: {objA.b}</h2>
//         </div>
//     );
// }





// [최상위 태그 규칙]
// JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야 함.(아니면 오류 발생)
// HTML 태그를 최상위 태그로 사용하지 않으려면, 다음과 같이 <React.Fragment> 태그를 사용.

// import React from "react";
// function Body() {
//     return (
//         <React.Fragment>  
//             <div>div 1</div>
//             <div>div 1</div>
//         </React.Fragment>
//     );
// }
// export default Body;

// </React.Fragment> 대신 빈 태그 '<></>'를 사용해도 최상위 태그 역할 해줌.





//[조건부 렌더링]

//[삼항 연산자를 활용한 조건부 렌더링]
// import React from "react";
// function Body() {
//     const num = 19;
//     return (
//         <>
//             <h2>
//                 {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다.
//             </h2>
//         </>
//     );
// }
// export default Body;



//[조건문을 이용한 조건부 렌더링]
// import React from "react";
// function Body() {
//     const num = 200;
//     if(num % 2 === 0) {
//         return <div>{num}은(는) 짝수입니다.</div>;
//     } else {
//         return <div>{num}은(는) 홀수입니다.</div>;
//     }
// }
// export default Body;





//[JSX 스타일링]

//[인라인 스타일링]
// function Body() {
//     return (
//         <div style={{ backgroundColor: "red", color: "blue" }}>
//             <h1>body</h1>
//         </div>
//     );
// }
// export default Body;



//[스타일 파일 분리]
// import "./Body.css";
// function Body() {
//     return (
//         <div className="body">
//             <h1>body</h1>
//         </div>
//     );
// }
// export default Body;

//[Props로 하나의 값 전달하기]
// function Body(props) {
//     console.log(props);
//     return (
//         <div className="body">
//             {props.name}는 {props.location}에 거주합니다.
//         </div>
//     );
// }
// export default Body;

//[구조 분해 할당으로 여러 개의 값 사용하기]
// function Body(props) {
//     const { name, location }=props;
//     console.log(name, location);
//     return (
//         <div className="body">
//             {name}는 {location}에 거주합니다.
//         </div>
//     );
// }
// export default Body;
//+)매개변수에서 구조 분해 할당
// function Body({name,location}) {
//     console.log(name, location);
//     return (
//         <div className="body">
//             {name}는 {location}에 거주합니다.
//         </div>
//     );
// }
// export default Body;



//[기본값 설정하기]
// function Body({name,location,favorList}) {
//     console.log(name, location, favorList);
//     return (
//         <div className="body">
//             {name}는 {location}에 거주합니다.
//             <br />
//             {favorList.length}개의 음식을 좋아합니다.
//         </div>
//     );
// }
// Body.defaultProps = {
//     favorList: [],
// };
// export default Body;



//[Props로 컴포넌트 전달하기]
function Body({ children}) {
    console.log(children);
    return (
        <div className="body">
            {children}
        </div>
    );
}
export default Body;