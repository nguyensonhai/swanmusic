import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../styles/scss/Banner.scss";

function Banner() {
  return (
    <div className={"banner"}>
      <Image fluid src={require("../assets/home/bg.png")} className="image" />
    </div>
  );
}
export default Banner;
