import React, { Component } from "react";
import Banner from "../components/Banner";
import Soundcloud from "../components/Soundcloud";
import TitleText from "../components/TitleText";
import Footer from "../components/Footer";
class Components extends Component {
  render() {
    return (
      <div>
        <Banner />
        <TitleText text="MUSIC" />
        <Soundcloud />
        <Footer />
      </div>
    );
  }
}
export default Components;
