import React, { memo } from "react";

const Try = memo(({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

Try.displayName = "Try";
//displayName은 memo로 인해 개발자 도구에서 컴포넌트의 이름이 다르게 보이는 것을 바로잡아준다.

export default Try;

// memo : class에서는 불필요한 리렌더링을 막기 위해 Pure Component라는 기능을 이용할 수 있다. memo가 Hooks(위와 같은 함수 컴포넌트)에서 쓸 수 있는 Pure Component역할을 해준다.
// memo는 DOM 컴포넌트가 리렌더링 됐을 때나 props나 state가 달라졌을 때, 부모 컴포넌트가 리렌더링 됐을 때, 딱 바뀐 부분에 대해서만(자식 컴포넌트의 리렌더링을 막는 등) 리렌더링을 할 수 있도록 돕는다.

// 위와 같이 memo를 import한 후, 해당 컴포넌트 코드 전체를 memo()로 감싸주면 된다.

// 위 Try 컴포넌트를 Pure Component로 바꾼 코드는 다음과 같다.

// import React, { PureComponent } from "react";

// class Try extends PureComponent {
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

// export default Try;

//Numberbaseball.jsx에서 위 Try 컴포넌트를 import할 경우 다음과 같이 뒤에 Class를 붙여줘야 함.
// import Try from './TryClass';
