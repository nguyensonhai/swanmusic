import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "react-bootstrap";
import styles from "assets/jss/material-kit-react/views/components.js";
import "assets/css/components/infoAreaStyle.css";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
const useStyles = makeStyles(styles);
var audio = new Audio(require("assets/audio/breeze.mp3"));
audio.loop = true;

export default function InfoArea() {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const start = () => {
    if (play) {
      audio.pause();
    } else audio.play();
    setPlay(!play);
  };
  return (
    <div>
      <div className="buttonPlay">
        <Image
          src={
            play
              ? require("assets/img/icons/playing.gif")
              : require("assets/img/icons/music.png")
          }
          roundedCircle
          fluid
          className={"buttonPlayImage"}
          onClick={start}
        />
      </div>
      <div className={classes.container}>
        <GridContainer></GridContainer>
      </div>
    </div>
  );
}
