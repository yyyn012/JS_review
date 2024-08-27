import React, { useRef, useState } from "react";
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
  const [tries, setTries] = useState([]);
  const inputRef = useRef(null);

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
      setTries([]);
      inputRef.current.focus();
    } else {
      // 답을 틀렸을 경우
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때 답을 알려준 후 게임 초기화
        setResult(`실패 횟수 10번 초과! 답 : ${answer.join(",")}`);

        alert("게임을 다시 시작합니다.");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputRef.current.focus();
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
        <input ref={inputRef} maxLength={4} value={value} onChange={onChange} />
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
