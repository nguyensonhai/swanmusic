import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Banner.scss";
class Banner extends Component {
  render() {
    return (
      <div className={"banner"}>
        <Image fluid src={require("../../assets/home/banner.png")} />
      </div>
    );
  }
}
export default Banner;
