import React from 'react'
import PrimaryButton from '../../../component/button/PrimaryButton'
import './GiftSection.css'

const GiftSection = () => {
  return (
    <section className='gift-section'>
        <div className='picture'>
          <img src='assets/images/home/gift-card.jpg' />
        </div>
        <div className='gift-text'>
          <h2>GIFT CARD</h2>
          <p>Present a Gift Card to your family, friends and business colleagues.</p>
          <PrimaryButton color="#000" shadow="shadow-dark">PURCHASE GIFT CARD</PrimaryButton>
        </div>
    </section>
  )
}

export default GiftSection