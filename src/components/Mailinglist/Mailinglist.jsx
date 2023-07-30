import React from "react";
import "./mailinglist.css";

const Mailinglist = () => {
  return (
    <div className="mailingBanner">
      <div className="mailingContainer">
        <h1 className="mailingTitle">Sparen Sie Zeit - sparen Sie Geld!</h1>
        <h2 className="mailingDescription">
          Melden Sie sich an und wir schicken Ihnen die besten Angebote
        </h2>
        <div className="mailingForm">
          <input
            type="text"
            className="mailinhInput"
            placeholder="Ihre E-Mail:"
          />
          <button className="mailingButton">Registerieren</button>
        </div>
      </div>
    </div>
  );
};

export default Mailinglist;
