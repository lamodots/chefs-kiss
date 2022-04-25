import React from 'react'
import './OwnerSection.css'

const OwnerSection = () => {
  return (
    <section className='owner-section' >
        <div className='owner-info'>
            <h2>
                <small>OWNER</small>
                FRAN MATHERS    
            </h2>
            <p>
             Since 1985, I have loved having the opportunity to serve great food to our wonderful guests in Las Colinas. 
             Thank all of you for the privilege of hosting your business dinners, birthday celebrations, wedding feasts, and quiet nights out. We're honored that you've chosen to spend time with us.
             We will always work to earn that privilege.
            </p>
            <img src='assets/images/home/signature.png' alt='signature' />
        </div>

        <div className='owner-img'>
            <img src='assets/images/home/owner.png' alt='owner' />
        </div>
    </section>
  )
}

export default OwnerSection