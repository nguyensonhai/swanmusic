/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center" style={{ marginBottom: 20 }}>
            <h3 style={{ color: "black", width: "80%" }}>
              Create Art - Give Emotion.
            </h3>
          </GridContainer>
          <a
            id="facebook"
            href="https://www.facebook.com/sharer/sharer.php?u=https://swanmusic.web.app"
            target="_blank"
          >
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} />
              share
            </Button>
          </a>
          <a
            id="twitter"
            href="http://www.twitter.com/share?url=https://swanmusic.web.app"
            target="_blank"
          >
            <Button color="twitter">
              <i className={classes.socials + " fab fa-twitter"} /> tweet
            </Button>
          </a>
          <a id="google" href="" target="_blank">
            <Button color="google">
              <i className={classes.socials + " fab fa-google"} /> mail
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
