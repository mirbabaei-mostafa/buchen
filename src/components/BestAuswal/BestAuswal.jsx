import React, { useState } from "react";
import "./bestAuswal.css";

const BestAuswal = () => {
  const [descShowList, setShow] = useState({
    Anklamer: false,
  });
  return (
    <div className="bestAuswahlContainer">
      <div className="baItem">
        <img className="baImage" src={require("./HotelAnklamerHof.webp")} />
        <h1 className="baTitle">Hotel Anklamer Hof, BW Signature Collection</h1>
        <h2 className="baSubtitle">Hotel in Anklam</h2>
        <div className="baItemInfo">
          <span className="baPunktzahl">9,0</span>
          <span className="baLevel">Hervorragend </span>
          <span className="baRequest"> . 1.100 Bewertungen</span>
        </div>
        <div className="baDescription">
          Der Anklamer Hof; BW Signature Collection erwartet Sie mit Stadtblick
          in Anklam, 1,1 km vom Otto-Lilienthal-Museum entfernt.
          {descShowList.Anklamer && (
            <span className="baMehr">
              Stylish lovely place, amazing breakfast!
            </span>
          )}
          <div className="baDescription">
            {descShowList.Anklamer ? (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: false })}
                className="homeLink"
              >
                Weniger anzeigen
              </a>
            ) : (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: true })}
                className="homeLink"
              >
                Mehr anzeigen
              </a>
            )}
          </div>
          <button className="baButton">Dieses Hotel buchen</button>
        </div>
      </div>
      <div className="baItem">
        <img className="baImage" src={require("./NSCityHotelNeumarkt.webp")} />
        <h1 className="baTitle">N+S City Hotel Neumarkt</h1>
        <h2 className="baSubtitle">Hotel in Neumarkt in der Oberpfalz</h2>
        <div className="baItemInfo">
          <span className="baPunktzahl">9,0</span>
          <span className="baLevel">Hervorragend </span>
          <span className="baRequest"> . 1.129 Bewertungen</span>
        </div>
        <div className="baDescription">
          Das N+S City Hotel Neumarkt begrüßt Sie in Neumarkt in der Oberpfalz,
          45 km von der Meistersingerhalle und 49 km vom Hauptbahnhof Nürnberg
          entfernt.
          {descShowList.Anklamer && (
            <span className="baMehr">
              Very clean, nice hotel. Spacious, comfortable room.
            </span>
          )}
          <div className="baDescription">
            {descShowList.Anklamer ? (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: false })}
                className="homeLink"
              >
                Weniger anzeigen
              </a>
            ) : (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: true })}
                className="homeLink"
              >
                Mehr anzeigen
              </a>
            )}
          </div>
          <button className="baButton">Dieses Hotel buchen</button>
        </div>
      </div>
      <div className="baItem">
        <img className="baImage" src={require("./DasJames.webp")} />
        <h1 className="baTitle">Das James</h1>
        <h2 className="baSubtitle">Hotel in Flensburg</h2>
        <div className="baItemInfo">
          <span className="baPunktzahl">9,5</span>
          <span className="baLevel">Außergewöhnlich </span>
          <span className="baRequest"> . 1.169 Bewertungen</span>
        </div>
        <div className="baDescription">
          Das James liegt direkt am Flensburger Fjord in der Hafenstadt
          Flensburg.
          {descShowList.Anklamer && (
            <span className="baMehr">
              Stylish with good quality without being too posh. Room was
              spacious with own balcony and bed excellent, adding nice area for
              work (rare in even business hotels). Splendid bar, and brilliant
              breakfast.
            </span>
          )}
          <div className="baDescription">
            {descShowList.Anklamer ? (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: false })}
                className="homeLink"
              >
                Weniger anzeigen
              </a>
            ) : (
              <a
                onClick={() => setShow({ ...descShowList, Anklamer: true })}
                className="homeLink"
              >
                Mehr anzeigen
              </a>
            )}
          </div>
          <button className="baButton">Dieses Hotel buchen</button>
        </div>
      </div>
    </div>
  );
};

export default BestAuswal;
