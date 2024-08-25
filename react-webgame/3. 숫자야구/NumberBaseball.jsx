import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  // this를 쓰지 않는 경우 이렇게 전역 함수로 만들 수 있다.(함수의 사용범위가 좀 더 넓어져서 좋음)
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
    tries: [],
  };

  onSubmit = (e) => {
    const { value, tries, answer } = this.state;
    // 구조분해 문법으로 코드를 hooks와 비슷하게 정리할 수 있다.
    e.preventDefault();
    if (value === answer.join("")) {
      this.setState({
        result: "홈런!",
        tries: [...tries, { try: value, result: "홈런!" }],
      });
      alert("게임을 다시 시작합니다.");
      this.setState({
        value: "",
        answer: getNumbers(),
        tries: [],
      });
    } else {
      // 답을 틀렸을 경우
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때 답을 알려준 후 게임 초기화
        this.setState({
          result: `실패!(실패 횟수 10번 초과) 답은 ${answer.join(
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
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries: [
            ...tries,
            {
              try: value,
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
    const { result, value, tries } = this.state;
    return (
      <div>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmit}>
          <input maxLength={4} value={value} onChange={this.onChange} />
        </form>
        <div>try : {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
          })}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
