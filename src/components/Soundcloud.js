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
              url="https://soundcloud.com/khuongquach/swan-breeze&amp;show_artwork=false&color=#33393E"
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
            style={{ backgroundColor: "#D2B3B1" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-sunset&amp;show_artwork=false&color=#D2B3B1"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/sunset.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#D2B3B1" }}
            />
          </div>

          {/* Lights */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#D79E65" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-lights&amp;show_artwork=false&color=#D79E65"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/lights.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#D79E65" }}
            />
          </div>
        </div>
        <div className={"soundclound"}>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-midnight&amp;show_artwork=false&color=#D2B3B1"
              width="100%"
              height="100%"
            />
          </div>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-sky&amp;show_artwork=false&color=#D2B3B1"
              width="100%"
              height="100%"
            />
          </div>
          <div className="soundclound-player">
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-lunar&amp;show_artwork=false&color=#D2B3B1"
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
