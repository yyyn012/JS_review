import React from "react";
import { useState, useRef } from "react";

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

export default WordRelay;
