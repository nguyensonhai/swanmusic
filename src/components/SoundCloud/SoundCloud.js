import React from "react";
import ReactPlayer from "react-player";
import "assets/css/components/soundCloundStyle.css";

function SoundCloud() {
  return (
    <div id="mymusic">
      <div className="span-container">
        <span className="cta">
          <span id="spandark">Latest Releases</span>
        </span>
      </div>
      <div className={"soundclound"}>
        {/* bloom */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/bloom&show_artwork=false&color=%23EBA431"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/*checkpoint */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/checkpoint&amp;show_artwork=false&color=%23EB8B15"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* horizon */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/horizon-1&amp;show_artwork=false&color=%2397C4D0"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* breeze */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-breeze&show_artwork=false&color=%2333393E"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className={"soundclound"}>
        {/* sunset */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-sunset&amp;show_artwork=false&color=%23BC4F64"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* lights */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-lights&amp;show_artwork=false&color=%23C07442"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* midnight */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-midnight&amp;show_artwork=false&color=%2398725B"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* sky */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-sky&amp;show_artwork=false&color=%236981A9"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className={"soundclound"}>
        {/* lunar */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-lunar&amp;show_artwork=false&color=%23D1604E"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* daydreaming */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-daydreaming&amp;show_artwork=false&color=%23E8DE66"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* blue */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-azure&amp;show_artwork=false&color=%23BDCDFF"
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* by the river */}
        <div className={"soundclound-player"}>
          <ReactPlayer
            url="https://soundcloud.com/khuongquach/swan-by-the-river&amp;show_artwork=false&color=%23B4E477"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
export default SoundCloud;
