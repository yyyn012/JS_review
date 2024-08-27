// import React, { memo, useState } from "react";

// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result);

//   const onClick = () => {
//     setResult("1");
//   };

//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{result}</div>
//     </li>
//   );
// });

// Try.displayName = "Try";

// export default Try;

//

//

//아래는 class에서 자식 props의 값을 설정하는 코드이다.
import React, { PureComponent } from "react";

class Try extends PureComponent {
  state = {
    result: this.props.result,
    try: this.props.try,
  };

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div onClick={onClick}>{result}</div>
      </li>
    );
  }
}

export default Try;
