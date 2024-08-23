import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmit = () => {};

  onChange = () => {};

  fruits = [
    { fruit: "apple", taste: "good" },
    { fruit: "banana", taste: "sweet" },
    { fruit: "grape", taste: "my favorite" },
    { fruit: "apple", taste: "not bad" },
  ];

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
          {this.fruits.map((v, i) => {
            return <Try value={v} index={i} />;
            // 다음과 같이 컴포넌트를 분리했을 때 props를 이용하면 쉽게 인자 전달을 할 수 있다.
          })}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
