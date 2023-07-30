import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import HotelList from "../../components/HotelList/HotelList";
import Mailinglist from "../../components/Mailinglist/Mailinglist";
import Footer from "../../components/Footer/Footer";

const Liste = () => {
  const [vocherInfoPass, setVocherPass] = useState({
    erwachsene: 1,
    kinder: 0,
    zimmer: 1,
  });
  return (
    <div>
      <NavBar />
      <Header pagename="hotels" />
      <Banner bannertype="hotels" changeVocher={setVocherPass} />
      <HotelList vocherInfo={vocherInfoPass} />
      <Mailinglist />
      <Footer />
    </div>
  );
};

export default Liste;
