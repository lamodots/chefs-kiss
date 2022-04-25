import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselSlider from '../../component/carousel/CarouselSlider';
import Gallery from './Gallery/Gallery';
import OwnerSection from './Owner/OwnerSection';
import GiftSection from './Gift/GiftSection';
import VIPSection from './VIPSection/VIPSection';

const Home = () => {
    
    return (
      <>
          <CarouselSlider />
          <Gallery />
          <OwnerSection />
          <GiftSection />
          <VIPSection />
     </>
    );
}

export default Home