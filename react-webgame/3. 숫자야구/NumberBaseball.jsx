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
      // 답을 한번에 맞췄을 경우(입력한 value와 "answer"가 같을 때)
      setResult("홈런!");
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: "홈런!" }];
      });

      alert("게임을 다시 시작합니다.");

      // 게임 초기화
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      inputRef.current.focus();
    } else {
      // 한번이라도 답을 틀렸을 경우 answerArray와 strike, ball 생성
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      // 10번을 모두 틀렸을 때 답을 알려준 후 게임 초기화
      if (tries.length >= 9) {
        setResult(`실패 횟수 10번 초과! 답 : ${answer.join(",")}`);

        alert("게임을 다시 시작합니다.");

        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputRef.current.focus();
      } else {
        // 10번 이하로 틀렸을 경우
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            //answerArray 안의 객체와 answer의 객체가 인덱스번호까지 다 일치할 때 strike 누적
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            //answerArray와 answer 안의 객체 중 공통된 객체가 존재할 경우 ball 누적
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
        {/* 아래와 같이 즉시 실행 함수(선언되자마자 바로 실행되는 함수) 안에서는 Hooks임에도 for을 사용할 수 있음 */}
        {(() => {
          const array = [];
          for (let i = 0; i < tries.length; i++) {
            array.push(<Try key={`${i + 1}차 시도 : `} tryInfo={v} />);
          }
          return array;
        })()}
        {/* 하지만 위와 같은 즉시실행함수 안에 for문을 넣으면 가독성이 떨어진다는 단점이 있어 함수를 그냥 따로 빼는 방식이나 자식 컴포넌트로 만드는 방법이 더 나을 수 있다. */}
        {/* 사실 가장 좋은 방법은 자식 컴포넌트로 만드는 방법이라고 한다. */}

        {/* {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 : `} tryInfo={v} />;
        })} */}
      </ul>
    </div>
  );
};

export default NumberBaseball;
