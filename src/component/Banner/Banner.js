import React from 'react';
import './Banner.css';

function Banner(props) {
  const title = props.title;

  return(
    <section className='banner-hero'>
      <h6><b>ABOUT </b> </h6>
    <h1>{title}</h1> 
  </section>
  );
  }
  export default Banner;