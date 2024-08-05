const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "끝말잇기",
    value: "",
    result: "",
  };

  onSubmit = () => {
    e.preventDefault();

    // 앞 단어의 마지막 글자와 현재 입력한 단어의 첫번째 글자가 같은 지 비교
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      //같을 경우
      this.setState({
        result: "ok",
        word: this.state.value,
        value: "",
      });
      this.input.focus();

      //같지 않을 경우
    } else {
      this.setState({
        result: "game over",
        value: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  input;

  onRef = (c) => {
    this.input = c;
  };

  render() {
    return (
      <div>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input
            ref={this.onRef}
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

module.exports = WordRelay;
