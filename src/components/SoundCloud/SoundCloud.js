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
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/bloom&show_artwork=false&color=%23EBA431"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/*Checkpoint */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/checkpoint&amp;show_artwork=false&color=%23EB8B15"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* Horizon */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/horizon-1&amp;show_artwork=false&color=%2397C4D0"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className={"soundclound"}>
        {/* Breeze */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-breeze&show_artwork=false&color=%2333393E"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* Sunset */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-sunset&amp;show_artwork=false&color=%23BC4F64"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* Lights */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-lights&amp;show_artwork=false&color=%23C07442"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
export default SoundCloud;
