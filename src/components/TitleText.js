import React from "react";
import "../styles/scss/TitleText.scss";

function TitleText(props) {
  const { text, link } = props;

  return (
    <div className="title-container">
      <a href={link} target="_blank">
        <div class="btn from-left">{text}</div>
      </a>
    </div>
  );
}
export default TitleText;
