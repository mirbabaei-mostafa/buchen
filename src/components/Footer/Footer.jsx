import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLinks">
        <ul className="footerLinkList">
          <li className="footerLinkItem">Länder</li>
          <li className="footerLinkItem">Regionen</li>
          <li className="footerLinkItem">Städte</li>
          <li className="footerLinkItem">Stadtteile</li>
          <li className="footerLinkItem">Flughäfen</li>
          <li className="footerLinkItem">Hotels</li>
          <li className="footerLinkItem">Orientierungspunkte</li>
        </ul>
        <ul className="footerLinkList">
          <li className="footerLinkItem">Wie Zuhause</li>
          <li className="footerLinkItem">Ferienwohnungen</li>
          <li className="footerLinkItem">Resorts</li>
          <li className="footerLinkItem">Villen</li>
          <li className="footerLinkItem">Hostels</li>
          <li className="footerLinkItem">Bed & Breakfasts</li>
          <li className="footerLinkItem">Pensionen</li>
        </ul>
        <ul className="footerLinkList">
          <li className="footerLinkItem">Einzigartige Unterkünfte</li>
          <li className="footerLinkItem">Bewertungen</li>
          <li className="footerLinkItem">
            Aufenthalte von einem Monat oder mehr entdecken
          </li>
          <li className="footerLinkItem">Artikel</li>
          <li className="footerLinkItem">Reiseangebote der Saison</li>
          <li className="footerLinkItem">Traveller Review Awards</li>
        </ul>
        <ul className="footerLinkList">
          <li className="footerLinkItem">Autovermietung</li>
          <li className="footerLinkItem">Flugsuche</li>
          <li className="footerLinkItem">Restaurantreservierungen</li>
          <li className="footerLinkItem">Booking.com für Reisevermittler</li>
        </ul>
        <ul className="footerLinkList">
          <li className="footerLinkItem">
            Häufig gestellte Fragen zum Coronavirus (COVID-19)
          </li>
          <li className="footerLinkItem">Über Booking.com</li>
          <li className="footerLinkItem">Hilfe vom Kundenservice</li>
          <li className="footerLinkItem">Partnerhilfe</li>
          <li className="footerLinkItem">Careers</li>
          <li className="footerLinkItem">Nachhaltigkeit</li>
          <li className="footerLinkItem">Presse</li>
          <li className="footerLinkItem">Sicherheit - Informationen</li>
          <li className="footerLinkItem">Investorenbeziehungen</li>
          <li className="footerLinkItem">Allgemeine Geschäftsbedingungen</li>
          <li className="footerLinkItem">Streitbeilegung für Partner</li>
          <li className="footerLinkItem">Unser Konzept</li>
          <li className="footerLinkItem">Datenschutz- und Cookie-Erklärung</li>
          <li className="footerLinkItem">MSA-Erklärung</li>
          <li className="footerLinkItem">Firmenkontakt</li>
          <li className="footerLinkItem">Richtlinien für Inhalte</li>
          <li className="footerLinkItem">Impressum</li>
        </ul>
      </div>
      <div className="footerSign">
        <span className="footerCopy">
          Urheberrecht © 1996–2023 Booking.com™. Alle Rechte vorbehalten.
        </span>
        <span className="footerInfo">
          Booking.com ist Teil von Booking Holdings Inc., dem weltweiten
          Marktführer für Online-Reisen und ähnliche Dienstleistungen.
        </span>
        <div className="footerLogos">
          <img src={require("./01.png")} />
          <img src={require("./02.png")} />
          <img src={require("./03.png")} />
          <img src={require("./04.png")} />
          <img src={require("./05.png")} />
          <img src={require("./06.png")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
