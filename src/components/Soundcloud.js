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
              id="breeze"
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
              id="sunset"
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
              id="lights"
            />
          </div>
        </div>
        {/* Midnight */}
        <div className={"soundclound"}>
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#98725B" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-midnight&amp;show_artwork=false&color=%2398725B"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/midnight.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#98725B" }}
              id="midnight"
            />
          </div>
          {/* Sky */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#6981A9" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-sky&amp;show_artwork=false&color=%236981A9"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/sky.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#6981A9" }}
              id="sky"
            />
          </div>
          {/* Lunar */}
          <div
            className="soundclound-player"
            style={{ backgroundColor: "#D1604E" }}
          >
            <ReactPlayer
              url="https://soundcloud.com/khuongquach/swan-lunar&amp;show_artwork=false&color=%23D1604E"
              width="100%"
              height="100%"
            />
            <Image
              src={require("../assets/artwork/lunar.jpg")}
              width="100%"
              height="100%"
              className={"artwork"}
              style={{ backgroundColor: "#D1604E" }}
              id="lunar"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Soundcloud;
