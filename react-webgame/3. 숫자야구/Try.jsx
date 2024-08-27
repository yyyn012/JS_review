import React, { memo, useState } from "react";

const Try = memo(({ tryInfo }) => {
  const [result, setResult] = useState(tryInfo.result);

  const onClick = () => {
    setResult("1");
  };

  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  );
});

Try.displayName = "Try";

export default Try;

//

//

//아래는 class에서 자식 props의 값을 설정하는 코드이다.
// import React, { PureComponent } from "react";

// class Try extends PureComponent {
//   constructor(props) {
//     super(props);
// constructor를 쓰면 (constructor가 함수이기 때문에) 기본 객체들로는 실행불가능한 미세한 동작들을 설정할 수 있다.
// 꼭 constructor가 아니더라도 그때 그때 상황에 맞춰 Ref(), setState()등을 이용할 수도 있다.
// 예를 들어 다음과 같은 console.log나 변수 선언이나 필터링 등을 말한다.

// const filtered = this.props.filter(() => {
//  필터링 코드
//     });

//     state = {
//       result: filtered,
//       try: this.props.try,
//     };
//   }

//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div onClick={onClick}>{result}</div>
//       </li>
//     );
//   }
// }

// export default Try;
