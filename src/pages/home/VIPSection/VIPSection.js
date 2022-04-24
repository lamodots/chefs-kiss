import React from 'react'
import PrimaryButton from '../../../component/button/PrimaryButton'
import './VIPSection.css'

const VIPSection = () => {
  return (
    <section className='vip-section'>
        <article className='vip-grid'>
            <div className='vip-text'>
            <h2>
                <small>Join today</small>
                Join The <em>Reál</em> Deal
            </h2>
            <p>
                Our monthly newsletter will keep you up to date on our latest special occasions,
                important dates, recognitions, scholarship program, and any guest incentives available.
                We care about our guests' privacy, and will never sell or rent your information.
            </p>
            <PrimaryButton color="#000">JOIN HERE</PrimaryButton>
            </div>
            <div className='vip-img'>
                <img src='assets/images/home/vip.jpg' alt='vip'/>
            </div>
        </article>
    </section>
  )
}

export default VIPSection