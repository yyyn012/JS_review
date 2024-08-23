import React, { Component } from "react";

class Try extends Component {
  render() {
    return (
      <li>
        <b>{this.props.value.fruit}</b> - {this.props.index}
        <div>content 1</div>
        <div>content 2</div>
        <div>content 3</div>
      </li>
    );
  }
}

export default Try;
