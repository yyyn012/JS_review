import React, { useState, useRef } from "react";

const ResponseCheck = () => {
  //게임 시작 전 첫 화면
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요!");
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요!");

      timeOut.current = setTimeout(() => {
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
