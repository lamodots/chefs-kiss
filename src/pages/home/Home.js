import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselSlider from '../../component/carousel/CarouselSlider';
import Gallery from './Gallery';

const Home = () => {
    
    return (
      <>
          <CarouselSlider />
          <Gallery />
     </>
    );
}

export default Home