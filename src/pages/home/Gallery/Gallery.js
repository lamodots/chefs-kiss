import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <section className='info-gallery'>
        <h2>FINE DINING SANTA FE STYLE</h2>
        <p className='description'>
            Welcome to Via Reál, where we offer a one of a kind fine dining experience with the unique taste of Southwestern Cuisine. Whether you are here for a business lunch or dinner, celebrating a special occasion, or looking for a romantic setting for a date, our menu offers something for everyone.
        </p>
        <div className='gallery-section'>
            <div className='gallery'>
                <img src='assets/images/home/grid/1.jpeg' alt='gallery' />
            </div>
            <div className='gallery'>
                <img src='assets/images/home/grid/2.jpeg' alt='gallery' />
            </div>
            <div className='gallery'>
                <img src='assets/images/home/grid/3.jpeg' alt='gallery' />
            </div>
            <div className='gallery'>
                <img src='assets/images/home/grid/4.jpeg' alt='gallery' />
            </div>
            <div className='gallery'>
                <img src='assets/images/home/grid/5.jpeg' alt='gallery' />
            </div>
            <div className='gallery'>
                <img src='assets/images/home/grid/6.jpeg' alt='gallery' />
            </div>
        </div>
    </section>
  )
}

export default Gallery