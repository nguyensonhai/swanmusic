import React from "react";
import ReactPlayer from "react-player";
import "assets/css/components/soundCloundStyle.css";

function SoundCloud() {
  return (
    <div id="mymusic">
      <div className="span-container">
        <span className="cta">
          <span id="spandark">My Music</span>
        </span>
      </div>
      <div className={"soundclound"}>
        {/* Bloom */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/bloom&show_artwork=false&color=%23EBA431"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
        {/* Checkpoint */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/checkpoint&amp;show_artwork=false&color=%23EB8B15"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
        {/* Horizon */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/horizon-1&amp;show_artwork=false&color=%2397C4D0"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
      </div>
      <div className={"soundclound"}>
        {/* Breeze */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/swan-breeze&show_artwork=false&color=%2333393E"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
        {/* Sunset */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/swan-sunset&amp;show_artwork=false&color=%23BC4F64"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
        {/* Lights */}
        <ReactPlayer
          url="https://soundcloud.com/khuongquach/swan-lights&amp;show_artwork=false&color=%23C07442"
          width={window.innerWidth >= 768 ? 400 : "90%"}
          height={window.innerWidth >= 768 ? 400 : 100}
          className={"soundclound-player"}
        />
      </div>
    </div>
  );
}
export default SoundCloud;
