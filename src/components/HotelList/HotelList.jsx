import React, { useState } from "react";
import "./hotelList.css";
import HotelSearch from "../HotelSearch/HotelSearch";
import {
  Arten,
  Ausstatungen,
  Bewertung,
  Freizeit,
  Sehenswürdigkeiten,
  ZimmerAusstattung,
  HotelListArray,
} from "../HotelList/HotelListData";

const HotelList = ({ vocherInfo }) => {
  const [searchStadt, setStadt] = useState("");
  const [searchArten, setArten] = useState([]);
  const [searchBewertung, setBewertung] = useState([]);
  const [searchFreizeit, setFreizeit] = useState([]);
  const [searchZimmerausstattung, setZimmerausstattung] = useState([]);
  const [searchAusstattung, setAusstattung] = useState([]);
  const [searchSehenswürdigkeiten, setSehenswürdigkeiten] = useState([]);
  const updateArten = (item) => {
    searchArten.some((name) => name === item)
      ? setArten(searchArten.filter((name) => name != item))
      : setArten([...searchArten, item]);
  };
  const updateBewertung = (item) => {
    searchBewertung.some((name) => name === item)
      ? setBewertung(searchBewertung.filter((name) => name != item))
      : setBewertung([...searchBewertung, item]);
  };
  const updateFreizeit = (item) => {
    searchFreizeit.some((name) => name === item)
      ? setFreizeit(searchFreizeit.filter((name) => name != item))
      : setFreizeit([...searchFreizeit, item]);
  };
  const updateZimmerausstattung = (item) => {
    searchZimmerausstattung.some((name) => name === item)
      ? setZimmerausstattung(
          searchZimmerausstattung.filter((name) => name != item)
        )
      : setZimmerausstattung([...searchZimmerausstattung, item]);
  };
  const updateAusstattung = (item) => {
    searchAusstattung.some((name) => name === item)
      ? setAusstattung(searchAusstattung.filter((name) => name != item))
      : setAusstattung([...searchAusstattung, item]);
  };
  const updateSehenswürdigkeiten = (item) => {
    searchSehenswürdigkeiten.some((name) => name === item)
      ? setSehenswürdigkeiten(
          searchSehenswürdigkeiten.filter((name) => name != item)
        )
      : setSehenswürdigkeiten([...searchSehenswürdigkeiten, item]);
  };
  return (
    <div className="hotelListContainer">
      <div className="hotelListWrapper">
        <div className="hotelListSearch">
          <HotelSearch
            artenUpdater={updateArten}
            bewertungUpdater={updateBewertung}
            freizeitUpdater={updateFreizeit}
            zimmerausstattungUpdater={updateZimmerausstattung}
            sehenswürdigkeitenUpdater={updateSehenswürdigkeiten}
            ausstattungUpdater={updateAusstattung}
          />
        </div>
        <div className="hotelListResult">
          <div className="hotelSearchTitle">
            {HotelListArray.length + " Unterkünfte gefunden"}
          </div>
          <div className="searchItems">
            {searchStadt && (
              <button onClick={() => setStadt("")} className="searchItemButton">
                Alle Städte
              </button>
            )}
            {searchArten.length > 0 && (
              <button onClick={() => setArten([])} className="searchItemButton">
                Alle Unterkunftstypen
              </button>
            )}
            {searchBewertung.length > 0 && (
              <button
                onClick={() => setBewertung([])}
                className="searchItemButton"
              >
                Alle Bewertungen
              </button>
            )}
            {searchFreizeit.length > 0 && (
              <button
                onClick={() => setFreizeit([])}
                className="searchItemButton"
              >
                Alle Freizeiten
              </button>
            )}
            {searchZimmerausstattung.length > 0 && (
              <button
                onClick={() => setZimmerausstattung([])}
                className="searchItemButton"
              >
                Alle Zimmerausstattungen
              </button>
            )}
            {searchSehenswürdigkeiten.length > 0 && (
              <button
                onClick={() => setSehenswürdigkeiten([])}
                className="searchItemButton"
              >
                Alle Sehenswürdigkeiten
              </button>
            )}
            {searchAusstattung.length > 0 && (
              <button
                onClick={() => setAusstattung([])}
                className="searchItemButton"
              >
                Alle Ausstattungen
              </button>
            )}
          </div>
          {HotelListArray.map((hotel) => {
            console.log(searchFreizeit);
            console.log(searchFreizeit.length);
            console.log(searchFreizeit.some((name) => name === hotel.freizeit));
            if (
              (searchStadt && hotel.stadt !== searchStadt) ||
              (searchArten.length > 0 &&
                !searchArten.some((name) => name === hotel.art)) ||
              (searchBewertung.length > 0 &&
                !searchBewertung.some((name) => name === hotel.qualitat)) ||
              (searchFreizeit.length > 0 &&
                !searchFreizeit.every((name) =>
                  hotel.freizeit.includes(name)
                )) ||
              (searchZimmerausstattung.length > 0 &&
                !searchZimmerausstattung.every((name) =>
                  hotel.zimmerausstattung.includes(name)
                )) ||
              (searchSehenswürdigkeiten.length > 0 &&
                !searchSehenswürdigkeiten.every((name) =>
                  hotel.sehenswürdigkeiten.includes(name)
                )) ||
              (searchAusstattung.length > 0 &&
                !searchAusstattung.every((name) =>
                  hotel.ausstatung.includes(name)
                ))
            ) {
              return "";
            } else {
              return (
                <div className="hotelItemBox">
                  <div className="hotelItemImageBox">
                    <img
                      className="hotelItemImage"
                      src={require("./images/" + hotel.hauptbild)}
                      title={hotel.name}
                    />
                  </div>
                  <div className="hotelItemInfo">
                    <div className="hotelItemInfoTitleBox">
                      <div className="hotelItemInfoTitle">
                        <a className="hotelItemInfoTitleLink">{hotel.name}</a>{" "}
                        {[...Array(hotel.stern).keys()].map(() => {
                          return (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="12px"
                              height="12px"
                            >
                              <path
                                d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"
                                className="hotelItemInfoIcon"
                              ></path>
                            </svg>
                          );
                        })}{" "}
                        {hotel.level === 1 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 18"
                            width="15px"
                            height="15px"
                            title="Preferred-Plus-Unterkunft"
                          >
                            <path
                              d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"
                              className="hotelItemInfoIcon"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        )}
                        {hotel.level === 2 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 18"
                            width="30px"
                            height="20px"
                            title="Preferred Unterkunft"
                          >
                            <path
                              fill="#FEBB02"
                              fill-rule="evenodd"
                              d="M6.73157e-08 2.25225C6.73157e-08 1.00912 1.00688 0 2.25225 0H15.7478C15.8167 0 15.885 0.00310154 15.9524 0.00917326C16.0199 0.00310178 16.0882 0 16.1572 0H29.6528C30.8959 0 31.905 1.00688 31.905 2.25225V15.7478C31.905 16.9909 30.8981 18 29.6528 18H16.1572C16.0888 18 16.0207 17.9969 15.9531 17.9908C15.8855 17.9969 15.817 18 15.7478 18H2.25225C1.65487 18.0002 1.08192 17.7629 0.659507 17.3405C0.237096 16.9181 -0.000145899 16.3451 6.73157e-08 15.7478V2.25225ZM7.335 13.545H12.1364C13.5486 13.545 13.5486 12.416 13.5486 12.416C14.6783 11.8516 14.1134 10.7226 14.1134 10.7226C14.9607 9.8759 14.1134 9.02919 14.1134 9.02919C14.6783 8.18247 14.1134 7.33576 13.2661 7.33576H9.59447L10.1593 5.36009C10.7242 3.66666 9.02961 3.10218 8.46474 5.07785L7.335 8.46471V13.545ZM3.915 8.46V13.545H6.705V8.46H3.915ZM21.99 6C21.99 5.56698 21.99 5.35048 22.0538 5.17732C22.1585 4.89281 22.3828 4.66855 22.6673 4.56377C22.8405 4.5 23.057 4.5 23.49 4.5C23.923 4.5 24.1395 4.5 24.3127 4.56377C24.5972 4.66855 24.8215 4.89281 24.9262 5.17732C24.99 5.35048 24.99 5.56698 24.99 6V7.5H26.49C26.923 7.5 27.1395 7.5 27.3127 7.56377C27.5972 7.66855 27.8215 7.89281 27.9262 8.17732C27.99 8.35048 27.99 8.56698 27.99 9C27.99 9.43302 27.99 9.64952 27.9262 9.82268C27.8215 10.1072 27.5972 10.3315 27.3127 10.4362C27.1395 10.5 26.923 10.5 26.49 10.5H24.99V12C24.99 12.433 24.99 12.6495 24.9262 12.8227C24.8215 13.1072 24.5972 13.3315 24.3127 13.4362C24.1395 13.5 23.923 13.5 23.49 13.5C23.057 13.5 22.8405 13.5 22.6673 13.4362C22.3828 13.3315 22.1585 13.1072 22.0538 12.8227C21.99 12.6495 21.99 12.433 21.99 12V10.5H20.49C20.057 10.5 19.8405 10.5 19.6673 10.4362C19.3828 10.3315 19.1585 10.1072 19.0538 9.82268C18.99 9.64952 18.99 9.43302 18.99 9C18.99 8.56698 18.99 8.35048 19.0538 8.17732C19.1585 7.89281 19.3828 7.66855 19.6673 7.56377C19.8405 7.5 20.057 7.5 20.49 7.5H21.99V6Z"
                              clip-rule="evenodd"
                              className="hotelItemInfoIcon"
                            ></path>
                          </svg>
                        )}
                        <div className="hotelItemInfoTitleCity">
                          <a onClick={() => setStadt(hotel.stadt)}>
                            {hotel.stadt}
                          </a>
                        </div>
                        <div className="hotelItemInfoTitleNachhaltiger">
                          {[...Array(hotel.nachhaltiger).keys()].map(() => {
                            return (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="13px"
                                height="13px"
                              >
                                <path
                                  d="M16.29 19.72c4.22-4.22 8.4-17.56 6.7-19.26S7.95 2.93 3.73 7.16C.67 10.22.62 15.58 3.5 18.98L15.62 6.86c.29-.29.77-.29 1.06 0s.29.77 0 1.06L4.57 20.03l-2.14 2.14c-.29.29-.29.77 0 1.06s.77.29 1.06 0l2.34-2.34c3.34 1.88 7.78 1.51 10.46-1.17Z"
                                  className="hotelItemInfoTitleNachhaltigerPath"
                                ></path>
                              </svg>
                            );
                          })}{" "}
                          Level {hotel.nachhaltiger} im Programm „Nachhaltiger
                          reisen“
                        </div>
                      </div>
                      <div className="hotelItemInfoTitlePunkt">
                        <div className="hotelItemInfoTitlePunktBewertungPanel">
                          <div className="hotelItemInfoTitlePunktBewertungQualitat">
                            {hotel.qualitat}
                          </div>
                          <div className="hotelItemInfoTitlePunktBewertung">
                            {hotel.bewertung} Bewertungen
                          </div>
                        </div>
                        <div>
                          <div className="hotelItemInfoTitlePunktPunktzahl">
                            {hotel.punktzahl}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hotelItemInfoBox">
                      <div className="hotelItemInfoBoxLeft">
                        <div className="hotelItemInfoBoxLeftBold">
                          {hotel.adresse}
                        </div>
                        {hotel.erklarung}
                      </div>
                      <div className="hotelItemInfoBoxRight">
                        <div className="hotelItemInfoBoxRightPrise">
                          € {hotel.preise * vocherInfo.zimmer}
                        </div>
                        <div className="hotelItemInfoBoxRightReservInfo">
                          {vocherInfo.erwachsene} Erwachsene,{" "}
                          {vocherInfo.kinder} Kinder, {vocherInfo.zimmer} Zimmer
                        </div>
                        <div className="hotelItemInfoBoxRightButtonBox">
                          <div className="hotelItemInfoBoxRightButton">
                            <div className="hotelItemInfoBoxRightButtonLeft">
                              Verfügbarkeit anzeigen
                            </div>
                            <div className="hotelItemInfoBoxRightButtonRight">
                              {">"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
