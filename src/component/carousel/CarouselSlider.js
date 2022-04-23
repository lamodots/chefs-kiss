import React, { useState } from 'react'
import './CarouselSlider.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';


const dots = [0,1,2]
const CarouselSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const onPrevClick = ()=>{
      if (index > 0){
        setIndex(index - 1)
      }else if(index === 0){
        setIndex(3)
      }
    }
    const onNextClick = ()=>{
      if (index === 3){
        setIndex(0)
      }else if(index === 0 || index > 0){
        setIndex(index + 1)
      }
    }
  
    return (
      <section className='hero'>
          <div className='banner '>
            <div className='content-wrapper'>
              <div className='welcome'>
                <h1>WELCOME</h1>
                <p>To the oasis of Las Colinas in Irving, TX.</p>

                <a href='#'>BOOK A TABLE</a>
              </div>
              <div className='carousel-control-wrapper'>
               <div>
                <button onClick={onPrevClick}> prev</button>
                  <div className='dots'>
                    {dots.map(dot=>(
                      <div className={`dot ${index === dot? 'active': ""}`} onClick={()=>setIndex(dot)}></div>
                    ))}
                  </div>
                  <button onClick={onNextClick}>next</button>
               </div>
              </div>
            </div>
          </div>
          <div>
            <Carousel 
              activeIndex={index} 
              onSelect={handleSelect}
              indicators={false}
              controls={false}
            >
            
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/home/hero/2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/home/hero/3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="assets/images/home/hero/4.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
      </section>
    );
}

export default CarouselSlider