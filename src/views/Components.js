import React, { Component } from "react";
import Banner from "../components/Banner";
import Soundcloud from "../components/Soundcloud";
import TitleText from "../components/TitleText";
import Footer from "../components/Footer";
import Parallax from "../components/Parallax";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/jss/components";
import classNames from "classnames";
const useStyles = makeStyles(styles);

function Components(props) {
  const classes = useStyles();
  return (
    <div>
      <Parallax>
        <div className={classes.container}>
          <Banner />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <TitleText text="MUSIC" />
        <Soundcloud />
        <Footer />
      </div>
    </div>
  );
}

export default Components;
