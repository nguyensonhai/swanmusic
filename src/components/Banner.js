import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "../styles/Banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className={"banner"}>
        <Image fluid src={require("../assets/home/bg.png")} className="image" />
      </div>
    );
  }
}
export default Banner;
