import React, { Component } from "react";
import Banner from "../components/Banner";
import Soundcloud from "../components/Soundcloud";
import TitleText from "../components/TitleText";

class Components extends Component {
  render() {
    return (
      <div>
        <Banner />
        <TitleText text="MUSIC" />
        <Soundcloud />
      </div>
    );
  }
}
export default Components;
