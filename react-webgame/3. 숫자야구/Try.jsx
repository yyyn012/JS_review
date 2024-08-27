import React, { memo, useState } from "react";

const Try = memo(({ tryInfo }) => {
  const [result, setResult] = useState(tryInfo.result);
  // 위와 같은 코드가 좋은 코드는 아니지만 가끔 실무에서 어쩔 수 없이 쓰는 경우가 있다.
  // (props는 부모 쪽에서 바꾸는 것이 원칙이다.)

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
