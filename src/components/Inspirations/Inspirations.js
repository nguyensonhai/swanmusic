import React from "react";
import "assets/css/components/inspirationsStyle.css";

export default function Inspirations() {
  return (
    <div id="myinspirations">
      <div className="span-container">
        <span className="cta">
          <span id="spandark">My Inspirations</span>
        </span>
      </div>
      <div className="inspirations">
        <span
          data-title="Cavlin Harris"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/cavlin-harris.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Cavlin Harris <br /> <br />
          </span>
        </span>
        <span data-title="Kygo" className="inspirationsSvg" alt="inspirations">
          <img
            src={require("assets/img/inspirations/kygo.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Kygo <br /> <br />
          </span>
        </span>
        <span
          data-title="The ChainSmokers"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/the-chainsmokers.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            The ChainSmokers <br /> <br />
          </span>
        </span>
        <span
          data-title="Martin Garrix"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/martin.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Martin Garrix <br /> <br />
          </span>
        </span>
        <span
          data-title="Illenium"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/illenium.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Illenium <br /> <br />
          </span>
        </span>
        <span
          data-title="Peptit Biscuit"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/petit.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Peptit Biscuit <br /> <br />
          </span>
        </span>
        <span
          data-title="Gryffin"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/gryffin.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Gryffin <br /> <br />
          </span>
        </span>
        <span
          data-title="Medasin"
          className="inspirationsSvg"
          alt="inspirations"
        >
          <img
            src={require("assets/img/inspirations/medasin.jpg")}
            className={"trans"}
            alt={"inspirations-trans"}
          />
          <span className="spanInspirations">
            {" "}
            Medasin <br /> <br />
          </span>
        </span>
      </div>
    </div>
  );
}
