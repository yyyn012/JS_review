import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting", //색깔 담당
    message: "클릭해서 시작하세요.", //메시지 담당
    result: [],
  };

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === "waiting") {
      // state가 'waiting' 상태일 경우
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });
      setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤 시작
    } else if (state === "ready") {
      // 시작 전에 클릭했을 경우
      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요",
      });
    } else if (state === "now") {
      // 반응속도 체크 시작
      this.setState({
        state: "waiting",
        message: "클릭해서 시작하세요.",
        result: [],
      });
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        평균 시간 :{result.reduce((a, c) => a + c) / result.length}
        ms
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
