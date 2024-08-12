const React = require("react");
const { Component } = React;

const WordRelay = () => {
  const [word, setWord] = useState("끝말잇기");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);

    if (word[word.length - 1] === e.target.word.value[0]) {
      setResult("ok");
      e.target.children.word.value = "";
      setWord(value);
      inputRef.current.focus();
      //hooks에서는 Ref에 current를 항상 붙여야 한다.
    } else {
      setResult("game over");
      e.target.children.word.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input defaultValue="끝말잇기" id="word" ref={inputRef} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

// Uncontrolled input과 controlled input을 써야하는 경우는 각각 간단한 동작을 구현하는 앱을 쓰는 경우와 복잡한 앱을 쓰는 경우로 나뉘어진다.

// 보통 on Submit에서만 특정 동작을 하는 경우 Uncontrolled input을, 그 외에 다른 기능에도 쓰이는 경우에는 Controlled input을 쓴다.

// 위 예시의 경우 WordRelay() 안의 Form태그에서만 onSubmit이 쓰이고 있으므로 해당 input은 Uncontrolled input으로 만들기 적합하다고 볼 수 있다.

// value={value}
// onChange={onChange}

// input안의 위 코드 두 줄을 지우고 다음과 같이 id를 추가해준다.

// id="word"

//onSubmit()의 setValue('')을 지우고 위와 같이 e.target.children.word="";를 추가한다.

// Uncontrolled input에서 value를 추가하면 자칫 Controlled input으로 간주될 수 있으니 defaultValue를 사용한다.

module.exports = WordRelay;
