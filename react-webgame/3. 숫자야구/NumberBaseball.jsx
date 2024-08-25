import React, { useState } from "react";
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

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers);
  // getNumbers()로 값을 넣을 경우 겉으로 볼 때 오류는 없지만 다음과 같은 문제가 생긴다.
  // useState는 getNumbers()의 첫번째 값을 answer에게 넘겨준다.
  // 이후 getNumbers()는 answer에 첫번째 값이 넘어가도 리렌더링이 될 때마다 새로운 값을 만들어낸다.
  // 다행히 useState는 getNumbers()에서 만들어지는 첫번째 이후의 값을 반복해서 넘겨주진 않는다.
  // 따라서 오류가 뜨진 않지만 getNumbers()는 넘겨지지 않는 값을 만들어내는 쓸데없는 리렌더링을 반복하게 된다.

  //이와 같이 함수가 useState에 들어가는 경우는 lazy init이라고 한다.
  //즉, 해당 함수가 호출되서 리턴 값을 돌려줄 때까지 리액트가 기다려 주는 것을 말한다.
  const [tries, setTries] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });

      alert("게임을 다시 시작합니다.");

      setValue("");
      setAnswer(getNumbers());
      //여기서는 함수를 호출해서 써야 하는 자리이기 때문에 getNumbers()를 써야 한다. (위의 useState 경우처럼 ()를 없애면 안 됨.)
      setTries([]);
    } else {
      // 답을 틀렸을 경우
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때 답을 알려준 후 게임 초기화
        setResult(
          `실패!(실패 횟수 10번 초과) 답은 ${answer.join(",")}였습니다!`
        );
        alert("게임을 다시 시작합니다.");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }

        setTries((prevTries) => [
          ...prevTries,
          {
            try: value,
            result: `${strike}, 스트라이크, ${ball} 볼`,
          },
        ]);
        setValue("");
      }
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange} />
      </form>
      <div>try : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
        })}
      </ul>
    </div>
  );
};

export default NumberBaseball;
