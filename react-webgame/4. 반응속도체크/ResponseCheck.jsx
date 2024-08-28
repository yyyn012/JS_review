import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting", //색깔 담당
    message: "클릭해서 시작하세요.", //메시지 담당
    result: [],
  };

  onClickScreen = () => {};

  render() {
    return (
      <div>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        <div>
          평균 시간 :
          {this.state.result.reduce((a, c) => a + c) / this.state.result.length}
          ms
        </div>
      </div>
    );
  }
}

export default ResponseCheck;
