import React, { useEffect, useState } from "react";
import "./banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { type } from "@testing-library/user-event/dist/type";

const Banner = ({ bannertype, changeVocher = "" }) => {
  const [showCalendar, setCalendar] = useState(false);
  const [dateduration, serDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showPersonen, setPersonen] = useState(false);
  const [vocherInfo, setVocher] = useState({
    erwachsene: 1,
    kinder: 0,
    zimmer: 1,
    kinderAlter: [],
  });

  const saveKinderAlter = (id, value) => {
    setVocher({
      ...vocherInfo,
      kinderAlter: vocherInfo.kinderAlter.map((item, index) =>
        index === id ? value : item
      ),
    });
  };

  useEffect(() => changeVocher(vocherInfo), [vocherInfo]);

  let bannerStyle = "";
  switch (bannertype) {
    case "hotels":
      bannerStyle = "bannerHotels";
      break;
    default:
      bannerStyle = "banner";
  }

  return (
    <div className={bannerStyle}>
      <div className="bannerCover">
        <div className="bannerContainer">
          <h1 className="bannerTitle">Hotels in Deutschland</h1>
          <p className="bannerDescription">
            Geben Sie Ihre Reisedaten ein und wählen Sie aus 109.925 Hotels und
            anderen Unterkünften!
          </p>
          <div className="searchBar">
            <div className="searchItem">
              <FontAwesomeIcon icon={faBed} className="searchIcon" />
              <input
                type="text"
                placeholder="Wo möchten Sie reisen?"
                className="searchInput"
              />
            </div>
            <div className="searchItem">
              <FontAwesomeIcon icon={faCalendar} className="searchIcon" />
              <span
                onClick={() => setCalendar(!showCalendar)}
                className="searchDuration"
              >
                {dateduration[0].startDate !== ""
                  ? `${format(
                      dateduration[0].startDate,
                      "MM/dd/yyyy"
                    )} to ${format(dateduration[0].endDate, "MM/dd/yyyy")}`
                  : "Anreise - Abreise"}
              </span>
              {showCalendar && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => serDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dateduration}
                  className="searchDate"
                />
              )}
            </div>
            <div className="searchItem">
              <FontAwesomeIcon icon={faPeopleGroup} className="searchIcon" />
              <span
                className="searchGeustInfo"
                onClick={() => setPersonen(!showPersonen)}
              >
                {vocherInfo.erwachsene} Erwachsene . {vocherInfo.kinder} Kinder
                . {vocherInfo.zimmer} Zimmer
              </span>
              {showPersonen && (
                <div className="vocherPanel">
                  <div className="vocherContent">
                    <div className="vocherItem">
                      <span className="vocherTitle">Erwachsene</span>
                      <div className="vocherChooser">
                        <button
                          onClick={() =>
                            vocherInfo.erwachsene > 1 &&
                            setVocher({
                              ...vocherInfo,
                              erwachsene: vocherInfo.erwachsene - 1,
                            })
                          }
                          className={
                            vocherInfo.erwachsene > 1
                              ? "vocherButton"
                              : "vocherButton disable"
                          }
                        >
                          -
                        </button>
                        <span className="vocherInfoOption">
                          {vocherInfo.erwachsene}
                        </span>
                        <button
                          onClick={() =>
                            setVocher({
                              ...vocherInfo,
                              erwachsene: vocherInfo.erwachsene + 1,
                            })
                          }
                          className="vocherButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="vocherItem">
                      <span className="vocherTitle">Kinder</span>
                      <div className="vocherChooser">
                        <button
                          onClick={() =>
                            vocherInfo.kinder > 0 &&
                            setVocher({
                              ...vocherInfo,
                              kinder: vocherInfo.kinder - 1,
                              kinderAlter: vocherInfo.kinderAlter.filter(
                                (item, index) =>
                                  index !== vocherInfo.kinderAlter.length - 1
                              ),
                            })
                          }
                          className={
                            vocherInfo.kinder > 0
                              ? "vocherButton"
                              : "vocherButton disable"
                          }
                        >
                          -
                        </button>
                        <span className="vocherInfoOption">
                          {vocherInfo.kinder}
                        </span>
                        <button
                          onClick={() => {
                            setVocher({
                              ...vocherInfo,
                              kinder: vocherInfo.kinder + 1,
                              kinderAlter: [...vocherInfo.kinderAlter, 0],
                            });
                          }}
                          className="vocherButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="vocherItem">
                      <span className="vocherTitle">Zimmer</span>
                      <div className="vocherChooser">
                        <button
                          onClick={() =>
                            vocherInfo.zimmer > 1 &&
                            setVocher({
                              ...vocherInfo,
                              zimmer: vocherInfo.zimmer - 1,
                            })
                          }
                          className={
                            vocherInfo.zimmer > 1
                              ? "vocherButton"
                              : "vocherButton disable"
                          }
                        >
                          -
                        </button>
                        <span className="vocherInfoOption">
                          {vocherInfo.zimmer}
                        </span>
                        <button
                          onClick={() =>
                            setVocher({
                              ...vocherInfo,
                              zimmer: vocherInfo.zimmer + 1,
                            })
                          }
                          className="vocherButton"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {vocherInfo.kinder > 0 && (
                      <div className="vocherFooter">
                        <span className="vocherFoorerText">
                          Bitte geben Sie das Alter des mitreisenden Kindes an:
                        </span>
                        {[...Array(vocherInfo.kinder).keys()].map((index) => {
                          return (
                            <div className="alterChooserContainer">
                              <select
                                className="alterChooser"
                                id={"kindalter" + index}
                                name={"kindalter" + index}
                                onChange={(e) =>
                                  saveKinderAlter(index, e.target.value)
                                }
                              >
                                <option value="">Alter beim Check-Out</option>
                                {[...Array(18).keys()].map((item) => {
                                  return (
                                    <option key={item} value={item}>
                                      {item} Jahre alt
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="searchItem">
              <button className="searchButton">Suche</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
