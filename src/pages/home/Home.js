import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselSlider from "../../component/carousel/CarouselSlider";
import Gallery from "./Gallery/Gallery";
import OwnerSection from "./Owner/OwnerSection";
import GiftSection from "./Gift/GiftSection";
import VIPSection from "./VIPSection/VIPSection";
// import Footer from "../../component/footer/Footer";
// import FooterStyles from "../../component/footer/FooterStyles";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <>
      <CarouselSlider />
      <Gallery />
      <OwnerSection />
      <GiftSection />
      <VIPSection />
      <Footer />
      {/* <FooterStyles /> */}
    </>
  );
};

export default Home;
