import React, { Component } from "react";
import "../styles/scss/TitleText.scss";

function TitleText(props) {
  const { text } = props;

  return (
    <div className="title-container">
      <p className="title-text">{text}</p>
    </div>
  );
}
export default TitleText;
