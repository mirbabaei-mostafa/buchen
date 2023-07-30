import React from "react";
import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Features/Feature";
import Hotels from "../../components/Hotels/Hotels";
import BestAuswal from "../../components/BestAuswal/BestAuswal";
import Mailinglist from "../../components/Mailinglist/Mailinglist";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Banner bannertype="home" />
      <div className="container">
        <Feature />
        <div className="sliderContainer">
          <div className="homeTitle">
            Hotels in Deutschland in der Nähe von den beliebtesten
            Sehenswürdigkeiten
          </div>
          <div className="hotelDescription">
            Erkunden Sie die Top-Regionen in Deutschland und lernen Sie das Land
            besser kennen
          </div>
          <Hotels />
        </div>
        <div className="bestAuswal">
          <h1 className="homeTitle">Beste Auswahl an Hotels in Deutschland</h1>
          <h2 className="hotelDescription">
            Versuchen Sie eines dieser beliebten und gut bewerteten Hotels in
            Deutschland
          </h2>
          <BestAuswal />
        </div>
      </div>
      <Mailinglist />
      <Footer />
    </div>
  );
};

export default Home;
