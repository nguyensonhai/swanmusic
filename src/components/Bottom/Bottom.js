import React from "react";
import Footer from "components/Footer/Footer.js";
import SectionDownload from "views/Components/Sections/SectionDownload.js";
import "assets/css/components/bottomStyle.css";
export default function Bottom() {
  return (
    <div className={"bottom-container"}>
      <SectionDownload />
      <Footer />
    </div>
  );
}
