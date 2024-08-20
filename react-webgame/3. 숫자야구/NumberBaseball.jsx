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
            { fruit: "apple", taste: "good" },
            { fruit: "banana", taste: "sweet" },
            { fruit: "grape", taste: "favorite" },
            // 2차원 배열보다는 보통 위와 같이 배열 안의 객체를 많이 사용한다.
          ].map((v) => (
            <li key={v.fruit + v.taste}>
              <b>{v.fruit}</b>- {v.taste}
            </li>
          ))}
          {/* 화살표 함수에서 ()는 return을 뜻하기 때문에 return{}을 삭제해도 잘 돌아간다. */}

          {/* 이 경우 v가 객체 자체가 되므로 2차원 배열과는 다르게 v.속성으로 표기해야 한다. */}

          {/* map()을 쓸 때에는 바로 아래 child태그에 고유한 값으로 key를 입력해줘야 한다. */}
          {/*  key는 화면에 표시는 안되지만 리액트가 key를 보고 같은 컴포넌트인지 아닌지 판단하기 때문에 성능 최적화를 위해 웬만하면 적어주는 것이 좋다. */}

          {/* 리액트에서 복잡한 반복문 쓰는 법 - 반복되는 부분을 위처럼 배열 안의 객체로 만들어 사용한다.*/}

          {/* 이렇게 하면 가독성이 떨어진다는 단점이 있는데, 이게 바로 props를 쓰는 이유이다. props를 쓰면 가독성 문제가 어느정도 해결된다. */}
        </ul>
      </div>
    );
  }
}

export default NumberBaseball;
