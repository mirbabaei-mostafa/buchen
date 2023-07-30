import React from "react";
import "./feature.css";

const Feature = () => {
  return (
    <div className="featureContainer">
      <div className="featureItsm">
        <img className="featureImage" src={require("./Düsseldorf.jpg")}></img>
        <div className="featuredTitle">
          <h1 className="featureTitle">Düsseldorf</h1>
          <h2 className="featureSubtitle">280 Hotels</h2>
        </div>
      </div>
      <div className="featureItsm">
        <img className="featureImage" src={require("./Köln.jpg")}></img>
        <div className="featuredTitle">
          <h1 className="featureTitle">Köln</h1>
          <h2 className="featureSubtitle">192 Hotels</h2>
        </div>
      </div>
      <div className="featureItsm">
        <img className="featureImage" src={require("./Berlin.jpg")}></img>
        <div className="featuredTitle">
          <h1 className="featureTitle">Berlin</h1>
          <h2 className="featureSubtitle">479 Hotels</h2>
        </div>
      </div>
      <div className="featureItsm">
        <img className="featureImage" src={require("./Hamburg.jpg")}></img>
        <div className="featuredTitle">
          <h1 className="featureTitle">Hamburg</h1>
          <h2 className="featureSubtitle">310 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Feature;
