import React, { Component } from "react";

class ResponseCheck extends Component {
  //게임 시작 전 첫 화면
  state = {
    state: "waiting", //색깔 담당 state
    message: "클릭해서 시작하세요.", //메시지 담당 state
    result: [],
  };

  timeout;
  startTime; // 클릭 하자마자
  endTime; // 클릭하고나서

  onClickScreen = () => {
    const { state } = this.state;
    if (state === "waiting") {
      // state가 'waiting' 상태일 경우
      console.log(state);
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });

      this.timeout = setTimeout(() => {
        console.log(state);
        this.setState({
          state: "now",
          message: "지금 클릭",
        });

        this.startTime = new Date();
        //this.을 붙이지 않으면 리렌더링됨
        // Date 생성자 : 시간의 특정 지점을 나타내는 Date 객체를 플랫폼에 종속되지 않는 형태로 생성(state를 클릭한 시간)
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤 시작
    } else if (state === "ready") {
      // 시작 전에(state가 ready상태일 때) 클릭했을 경우
      console.log(state);
      // setTimeout 초기화(clearTimeout으로 setTimeout 취소 = 시간 측정 취소)
      clearTimeout(this.timeout);

      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요",
      });
    } else if (state === "now") {
      // 게임을 시작한 후에 클릭했을 경우
      // 반응속도 체크 시작
      console.log(state);
      this.endTime = new Date();

      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요.", // 초기화
          result: [...prevState.result, this.endTime - this.startTime], // 이전 state 복사값, endTime에서 startTime을 뺀 값을 result에 배열로 저장한다.
        };
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      //JSX에서는 null이 태그조차 없는 것을 뜻한다.
      <div>
        평균 시간 : {result.length},
        {result.reduce((a, c) => a + c) / result.length}
        ms
      </div>
      // result가 0이 아닐 경우 측정된 결과 출력

      //reduce()를 이용하여 result에 저장되어 있던 인자 값 두 개(전 state 복사값, endTime에서 startTime을 뺀 값)를 더해 출력한다.

      // reduce() : arr.reduce(callback[, initialValue])

      // reduce()에는 누산기가 포함되어 있어 배열에 포함된 모든 값을 순회하며 사용자가 설정한 함수가 실행된다.

      // 위와 같이 Array의 모든 요소들에 대해 체크하고 누적된 값을 출력하고 싶을 때 용이하다.
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <div>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </div>
    );
  }
}

export default ResponseCheck;
