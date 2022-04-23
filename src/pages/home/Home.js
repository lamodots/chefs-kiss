import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselSlider from '../../component/carousel/CarouselSlider';
import Gallery from './Gallery';
import OwnerSection from './OwnerSection';

const Home = () => {
    
    return (
      <>
          <CarouselSlider />
          <Gallery />
          <OwnerSection />
     </>
    );
}

export default Home