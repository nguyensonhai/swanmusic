import React from "react";
import "../styles/scss/TitleText.scss";

function TitleText(props) {
  const { text, link } = props;

  return (
    <div className="title-container">
      <a href={link}>
        <p className="title-text">{text}</p>
      </a>
    </div>
  );
}
export default TitleText;
