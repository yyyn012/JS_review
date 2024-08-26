import React, { PureComponent } from "react";

class RenderTest extends PureComponent {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.counter !== nextState.counter) {
      return true;
      // 현재 state와 미래 state가 같지 않을 경우 true를 return한다.
    }
    return false;
    // 현재 state와 미래 state가 같을 경우(달라진 게 없을 경우) false를 return한다.
  }
  // shouldComponentUpdate()는 업데이트가 되어야 하는 컴포넌트를 리액트에게 알려주는 함수이다.
  // 리액트를 활용한 코드 최적화 시에 PureComponent와 자주 같이 쓰인다.

  onClick = () => {
    this.setState({});
  };
  // state에 변화가 없어도 불필요한 리렌더링이 되는 경우 발생

  render() {
    console.log("렌더링", this.state);
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default RenderTest;
