const React = require("react");
const { Component } = React;

const WordRelay = () => {
  const [word, setWord] = useState("끝말잇기");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (word[word.length - 1] === value[0]) {
      setResult("ok");
      setWord(value);
      value("");

      inputRef.current.focus();
      //hooks에서는 Ref에 current를 항상 붙여야 한다.
    } else {
      setResult("game over");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <div>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <label id="label" htmlFor="wordInput">
          글자를 입력해주세요.
        </label>
        <input
          className="wordInput"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

module.exports = WordRelay;

// 정상적으로 작동되었을 때 콘솔에 뜨는 [HMR]는 HotModule-Reload, [WDS]는 Webpack-Dev-Server이다.
