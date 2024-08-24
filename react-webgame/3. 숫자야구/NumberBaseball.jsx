import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [], // 배열에 값을 넣을 때 push()를 자주 쓰는데 여기서는 push()를 쓸 수 없음
    // 리액트에서는 기존 배열을 복사해서 새로운 배열을 만든 후 써야 함.(리액트가 무엇이 바뀌었는지 감지하지 못하기 때문)
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result: "홈런!",
        tries: [
          ...this.state.tries, // 예전 배열 복사
          { try: this.state.value, result: "홈런!" }, // 복사된 배열에 새로운 값 넣어주기
        ],
      });
      alert("게임을 다시 시작합니다.");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      // 답을 틀렸을 경우
      const answerArray = this.state.value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        // 10번 이상 틀렸을 때 답을 알려준 후 게임 초기화
        this.setState({
          result: `실패!(실패 횟수 10번 초과) 답은 ${this.state.answer.join(
            ","
          )}였습니다!`,
        });
        alert("게임을 다시 시작합니다.");
        this.setState({
          value: "",
          answer: getNumbers(),
          tries: [],
        });
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...this.state.tries,
            {
              try: this.state.value,
              result: `${strike}, 스트라이크, ${ball} 볼`,
            },
          ],
          value: "",
        });
      }
    }
  };

  onChange = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

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
          {this.state.tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
          })}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
