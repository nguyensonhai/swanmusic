import React, { Component } from "react";
import "../styles/TitleText.scss";

class TitleText extends Component {
  state = {
    text: this.props.text,
  };
  render() {
    return (
      <div className="title-container">
        <p className="title-text">{this.state.text}</p>
      </div>
    );
  }
}
export default TitleText;
