import React from 'react';
import './Banner.css';

function Banner(props) {
  const titles = props.title;

  return(
    <section className='hero'>
    <h1>{titles}</h1> 
  </section>
  );
  }
  export default Banner;