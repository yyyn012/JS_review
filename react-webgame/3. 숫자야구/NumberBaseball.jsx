import React, { Component } from "react";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: "",
  };

  onSubmit = () => {};

  onChange = () => {};

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChange}
          />
        </form>
        <div>try : {this.state.tries.length}</div>
        <ul>
          {["likes", "likes", "likes", "likes", "likes"].map(() => {
            return <li>likes</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
