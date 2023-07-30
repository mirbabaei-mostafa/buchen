import React, { useState } from "react";
import {
  Arten,
  Ausstatungen,
  Bewertung,
  Freizeit,
  Sehenswürdigkeiten,
  ZimmerAusstattung,
} from "../HotelList/HotelListData";
import "./hotelSearch.css";

const HotelSearch = ({
  artenUpdater,
  bewertungUpdater,
  freizeitUpdater,
  zimmerausstattungUpdater,
  sehenswürdigkeitenUpdater,
  ausstattungUpdater,
}) => {
  const maxShow = 4;
  const [isFreizeit, setFreizeit] = useState(false);
  const [isAusstattung, setAusstattung] = useState(false);
  const [isZimmerausstattung, setZimmerausstattung] = useState(false);
  const [isSehenswürdigkeiten, setSehenswürdigkeiten] = useState(false);
  return (
    <div className="hotelSearchPannelContainer">
      <div className="hotelSearchPannelTitle">Filtern nach:</div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Unterkunfttyp</h1>
        {Arten.map((item) => {
          return (
            <div className="hotelSearchPannelItem">
              <input
                value={item}
                type="checkbox"
                className="hotelSearchCheckbox"
                id={item}
                onClick={() => artenUpdater(item)}
              />
              <label for={item}>{item}</label>
            </div>
          );
        })}
      </div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Bewertung</h1>
        {Bewertung.map((item) => {
          return (
            <div className="hotelSearchPannelItem">
              <input
                value={item}
                type="checkbox"
                className="hotelSearchCheckbox"
                id={item}
                onClick={() => bewertungUpdater(item)}
              />
              <label for={item}>{item}</label>
            </div>
          );
        })}
      </div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Freizeit</h1>
        {Freizeit.map((item, index) => {
          if (index < maxShow || isFreizeit) {
            return (
              <div className="hotelSearchPannelItem">
                <input
                  value={item}
                  type="checkbox"
                  className="hotelSearchCheckbox"
                  id={item}
                  onClick={() => freizeitUpdater(item)}
                />
                <label for={item}>{item}</label>
              </div>
            );
          }
        })}
        {isFreizeit ? (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setFreizeit(!isFreizeit)}
              className="hotelSearchPannelListLink"
            >
              Weniger anzeigen
            </a>
          </div>
        ) : (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setFreizeit(!isFreizeit)}
              className="hotelSearchPannelListLink"
            >
              Alle {Freizeit.length} anzeigen
            </a>
          </div>
        )}
      </div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Ausstattung</h1>
        {Ausstatungen.map((item, index) => {
          if (index < maxShow || isAusstattung) {
            return (
              <div className="hotelSearchPannelItem">
                <input
                  value={item}
                  type="checkbox"
                  className="hotelSearchCheckbox"
                  id={item}
                  onClick={() => ausstattungUpdater(item)}
                />
                <label for={item}>{item}</label>
              </div>
            );
          }
        })}
        {isAusstattung ? (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setAusstattung(!isAusstattung)}
              className="hotelSearchPannelListLink"
            >
              Weniger anzeigen
            </a>
          </div>
        ) : (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setAusstattung(!isAusstattung)}
              className="hotelSearchPannelListLink"
            >
              Alle {Ausstatungen.length} anzeigen
            </a>
          </div>
        )}
      </div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Zimmerausstattung</h1>
        {ZimmerAusstattung.map((item, index) => {
          if (index < maxShow || isZimmerausstattung) {
            return (
              <div className="hotelSearchPannelItem">
                <input
                  value={item}
                  type="checkbox"
                  className="hotelSearchCheckbox"
                  id={item}
                  onClick={() => zimmerausstattungUpdater(item)}
                />
                <label for={item}>{item}</label>
              </div>
            );
          }
        })}
        {isZimmerausstattung ? (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setZimmerausstattung(!isZimmerausstattung)}
              className="hotelSearchPannelListLink"
            >
              Weniger anzeigen
            </a>
          </div>
        ) : (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setZimmerausstattung(!isZimmerausstattung)}
              className="hotelSearchPannelListLink"
            >
              Alle {ZimmerAusstattung.length} anzeigen
            </a>
          </div>
        )}
      </div>
      <div className="hotelSearchPannelList">
        <h1 className="hotelSearchPannelListTitle">Sehenswürdigkeiten</h1>
        {Sehenswürdigkeiten.map((item, index) => {
          if (index < maxShow || isSehenswürdigkeiten) {
            return (
              <div className="hotelSearchPannelItem">
                <input
                  value={item}
                  type="checkbox"
                  className="hotelSearchCheckbox"
                  id={item}
                  onClick={() => sehenswürdigkeitenUpdater(item)}
                />
                <label for={item}>{item}</label>
              </div>
            );
          }
        })}
        {isSehenswürdigkeiten ? (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setSehenswürdigkeiten(!isSehenswürdigkeiten)}
              className="hotelSearchPannelListLink"
            >
              Weniger anzeigen
            </a>
          </div>
        ) : (
          <div className="hotelSearchPannelItem">
            <a
              onClick={() => setSehenswürdigkeiten(!isSehenswürdigkeiten)}
              className="hotelSearchPannelListLink"
            >
              Alle {Sehenswürdigkeiten.length} anzeigen
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelSearch;
