import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  //게임 시작 전 첫 화면
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요!");
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  // timeOut;
  // startTime;
  // endTime;
  // 위와 같은 속성들을 hooks로 표현할 때에는 Ref()를 이용한다.
  // Ref()는 DOM에 접근할 때, 또는 위와 같이 this의 속성들을 표현할 때 쓰인다.
  // state는 값이 바뀔 때마다 리턴이 실행되지만 Ref()는 값이 바뀌어도 리턴이 실행되지 않는다.
  // useRef()는 값이 바뀌긴 해야하지만 화면에는 영향을 미치고 싶지 않을 때 사용되기도 한다.(ex - timeout, interval)

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요!");

      timeOut.current = setTimeout(() => {
        // Ref()는 current와 함께 쓰이므로 값을 불러올 때나 값을 가져올 때도 current를 붙여주면 된다.
        setState("now");
        setMessage("지금 클릭!");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤 시작);
    } else if (state === "ready") {
      // 시작 전에(state가 ready상태일 때) 클릭했을 경우
      // clearTimeout으로 setTimeout 초기화
      clearTimeout(timeOut.current);
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요");
    } else if (state === "now") {
      // 게임을 시작한 후에 클릭했을 경우
      // 반응속도 체크 시작
      endTime.current = new Date();

      setState("waiting");
      setMessage("클릭해서 시작하세요."); // 게임 초기화
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  };

  //리셋 버튼
  const onReset = () => {
    setResult([]);
  };

  //reduce()로 평균시간 계산
  const renderAverage = () => {
    return result.length === 0 ? null : (
      <div>
        <div>
          평균 시간 : {result.length},
          {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={onReset}>Reset</button>
      </div>
    );
  };

  return (
    <div>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </div>
  );
};

export default ResponseCheck;
