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
          message: "클릭해서 시작하세요.", // 게임 초기화
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  // 리셋 버튼
  onReset = () => {
    this.setState({
      result: [],
    });
  };

  // reduce()로 평균 시간 계산
  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        <div>
          평균 시간 : {result.length},
          {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={this.onReset}>Reset</button>
      </div>
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
