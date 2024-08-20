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
          />
        </form>
        <div>try : {this.state.tries.length}</div>
        <ul>
          {[
            { fruit: "apple", taste: "good" },
            { fruit: "banana", taste: "sweet" },
            { fruit: "grape", taste: "favorite" },
            { fruit: "apple", taste: "not bad" },
          ].map((v, i) => (
            // 여기에서 i는 인덱스를 나타낸다. (v, 0)은 첫번째 객체를 뜻한다.
            // i는 고유한 값(겹치지 않는 숫자)이라 종종 key에 i를 넣는 실수를 할 때가 있다.
            // 하지만 이 경우 성능최적화에 문제가 생길 수 있기 때문에 key에는 i를 입력하지 않는 것이 좋다.
            // (리액트에서 무엇이 바뀌었는지 인식하는 데 어려움이 있을 수 있다고 한다.)
            <li key={v.fruit + v.taste}>
              {/* v.fruit만 키 값으로 입력할 경우 마지막 객체에서 "apple"이 겹치기 때문에 v.fruit + v.taste를 키 값으로 입력해주었다. */}
              <b>{v.fruit}</b>- {i}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
