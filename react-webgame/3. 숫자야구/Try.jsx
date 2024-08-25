import React from "react";

const Try = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};
// 위와 같이 props자리에 tryInfo를 구조분해 문법으로 써주는 것이 깔끔하다.(실제로도 이 방법이 더 많이 쓰임)

// 구조분해 문법을 쓰지 않은 오리지널 코드는 다음과 같다.

// const Try = (props) => {
// return(
// <li>
// <div>{props.tryInfo.try}</div>
// <div>{props.tryInfo.result}</div>
// </li>
// )
// }

export default Try;
