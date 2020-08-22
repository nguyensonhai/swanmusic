import React, { Component } from "react";
import ReactPlayer from "react-player";
import "../styles/Soundcloud.scss";
import { Image } from "react-bootstrap";
class Soundcloud extends Component {
  render() {
    return (
      <div>
        <div className={"soundclound"}>
          {/* Breeze */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#33393E" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-breeze&show_artwork=false&color=%2333393E"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/breeze.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#33393E" }}
            />
          </div>

          {/* Sunset */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#BC4F64" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-sunset&amp;show_artwork=false&color=%23BC4F64"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/sunset.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#BC4F64" }}
            />
          </div>

          {/* Lights */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#C07442" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-lights&amp;show_artwork=false&color=%23C07442"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/lights.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#C07442" }}
            />
          </div>
        </div>
        <div className={"soundclound"}>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-midnight&amp;show_artwork=false&color=%23D2B3B1"
              width="100%"
              height="100%"
            />
          </div>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-sky&amp;show_artwork=false&color=%23D2B3B1"
              width="100%"
              height="100%"
            />
          </div>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-lunar&amp;show_artwork=false&color=%23D2B3B1"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Soundcloud;
