import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ pagename }) => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div
              className={
                pagename === "hotels"
                  ? "headerListItem active"
                  : "headerListItem"
              }
            >
              <FontAwesomeIcon icon={faBed} />
              <span>Aufenthalte</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flüge</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Mietwagen</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attraktionen</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Flughafentaxi</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
