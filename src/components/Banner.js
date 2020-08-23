import React from "react";
import { Image } from "react-bootstrap";
import "../styles/scss/Banner.scss";

function Banner() {
  return (
    <div className={"banner"}>
      <Image fluid src={require("../assets/home/bg.jpg")} className="image" />
    </div>
  );
}
export default Banner;
