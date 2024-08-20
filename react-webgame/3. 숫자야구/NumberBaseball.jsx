import React, { Component } from "react";

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

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChange}
            //value와 onChange 둘 다 쓰고 싶지 않다면 이 둘 대신에 defaultValue={this.state.value}를 쓰면 된다.
          />
        </form>
        <div>try : {this.state.tries.length}</div>
        <ul>
          {[
            ["apple", "good"],
            ["banana", "sweet"],
            ["grape", "sour"],
            // 이 배열 자체가 map()에 전달한 v라는 인자가 된다.
          ].map((v) => {
            return (
              <li>
                <b>
                  {v[0]} - {v[1]}
                  {/* v에서 첫번째 인자와 두번째 인자를 꺼내온다. */}
                </b>
              </li>
            );
          })}

          {/* 리액트에서 복잡한 반복문 쓰는 법 - 반복되는 부분을 위처럼 2차원 배열로 만들어 map함수 인자로 전달하면 된다. */}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
