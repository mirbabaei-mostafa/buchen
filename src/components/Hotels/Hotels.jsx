import React from "react";
import "./hotels.css";

const Hotels = () => {
  return (
    <div className="hotelsContainer">
      <div className="hotelsItsm">
        <img
          className="hotelsImage"
          src={require("./Kleinwalsertal.webp")}
        ></img>
        <h1 className="hotelsTitle">Kleinwalsertal</h1>
        <h2 className="hotelsSubtitle">151 Hotels</h2>
      </div>
      <div className="hotelsItsm">
        <img className="hotelsImage" src={require("./Tegernsee.webp")}></img>
        <h1 className="hotelsTitle">Tegernsee</h1>
        <h2 className="hotelsSubtitle">201 Hotels</h2>
      </div>
      <div className="hotelsItsm">
        <img className="hotelsImage" src={require("./Ostsee.webp")}></img>
        <h1 className="hotelsTitle">Ostsee</h1>
        <h2 className="hotelsSubtitle">25022 Hotels</h2>
      </div>
      <div className="hotelsItsm">
        <img
          className="hotelsImage"
          src={require("./Fischland-Darß-Zingst.webp")}
        ></img>
        <h1 className="hotelsTitle">Fischland-Darß-Zingst</h1>
        <h2 className="hotelsSubtitle">2049 Hotels</h2>
      </div>
      <div className="hotelsItsm">
        <img className="hotelsImage" src={require("./Bremen.webp")}></img>
        <h1 className="hotelsTitle">Bremen</h1>
        <h2 className="hotelsSubtitle">479 Hotels</h2>
      </div>
    </div>
  );
};

export default Hotels;
