import React from "react";
import Banner from "../components/Banner";
import Soundcloud from "../components/Soundcloud";
import TitleText from "../components/TitleText";
import Footer from "../components/Footer";
import Parallax from "../components/Parallax";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/jss/components";
import classNames from "classnames";
// import Header from "../components/Header/Header";
// import HeaderLinks from "../components/Header/HeaderLinks.js";
const useStyles = makeStyles(styles);

function Components(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <div>
      {/* <Header
        brand="kelly makes vlog"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      /> */}
      <Parallax>
        <div className={classes.container}>
          <Banner />
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <TitleText text="MUSIC" link="/music" />
        <Soundcloud />
        <Footer />
      </div>
    </div>
  );
}

export default Components;
