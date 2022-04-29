import React from 'react'
import './product.css'

export default function Product() {
  return (
    <>
      <section className='meal'>
          <div className='meal_banner' id='lunch'>
        <h6> MENU </h6>
        <h2> LUNCH </h2>
        <p> Stop in today and enjoy one of our delicious, light and hearty lunch options </p>
    <button> ORDER NOW</button>
      </div>
        <div className='meal_gallery'>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2> CEVICHE</h2>
            
              <p>Chilled shrimp and bay scallops with lime and tomato juices.</p>
       <br/>
              <b> - 18 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='ceviche'>
            </div>

          </div>
          <div className='gallery_card column-sm'>
          <div className='gallery_card_image item-sm' id='mexicanas'>
            </div>
            <div className='gallery_card_text item-sm'>
              <h2>ENCHILADAS MEXICANAS</h2>
            
              <p>Sautéed tips of beef tenderloin in corn tortillas topped with ancho-chili sauce, served with Spanish rice and black beans.</p>
       <br/>
              <b> - 16 - </b>
            </div>
            

          </div>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2> SALMON TACOS</h2>
            
              <p>Blackened Salmon with fresh spinach, avocado and pineapple-corn relish.</p>
       <br/>
              <b> - 14 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='tacos'>
            </div>

          </div>
          
      </div>
      </section>
      <section className='meal'>
          <div className='meal_banner' id='dinner'>
        <h6> MENU </h6>
        <h2> DINNER </h2>
        <p>Delicious fresh southwest and mexican cuisine prepared by our expert chefs

</p>
    <button> ORDER NOW</button>
      </div>
        <div className='meal_gallery'>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2> SHRIMP COCKTAIL</h2>
            
              <p>Four jumbo shrimp with our homemade Cocktail sauce.</p>
       <br/>
              <b> - 18 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='shrimp'>
            </div>

          </div>
          <div className='gallery_card column-sm'>
          <div className='gallery_card_image item-sm' id='bass'>
            </div>
            <div className='gallery_card_text item-sm'>
              <h2>CHILEAN SEA BASS</h2>
            
              <p>Pecan encrusted Sea Bass, sautéed asparagus, cilantro potatoes, and pineapple cream sauce.</p>
       <br/>
              <b> - 16 - </b>
            </div>
            

          </div>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2>RED OAK SMOKED TENDERLOIN</h2>
            
              <p>10 oz Beef Tenderloin, Yukon potatoes, grilled vegetables, and house demi-glaze.</p>
       <br/>
              <b> - 14 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='smoked'>
            </div>

          </div>
          
      </div>
      </section>
      <section className='meal'>
          <div className='meal_banner' id='dessert'>
        <h6> MENU </h6>
        <h2> DESSERTS </h2>
        <p>Delicious desserts made to order in-house

</p>
      </div>
        <div className='meal_gallery'>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2> WHITE CHOCOLATE CRÈME BRÛLÉE</h2>
            
              <p>Elegant white chocolate and Grand Marnier crème brûlée topped with caramelized sugar.</p>
       <br/>
              <b> - 18 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='creme'>
            </div>

          </div>
          <div className='gallery_card column-sm'>
          <div className='gallery_card_image item-sm' id='bean'>
            </div>
            <div className='gallery_card_text item-sm'>
              <h2>VANILLA BEAN FLAN</h2>
            
              <p>Vanilla bean infused custard with a light caramel sauce.</p>
       <br/>
              <b> - 16 - </b>
            </div>
            

          </div>
          <div className='gallery_card column-sm-r'>
            <div className='gallery_card_text item-sm'>
              <h2>CHOCOLATE RASPBERRY CAKE</h2>
            
              <p>Three layers of chocolate with raspberry marmalade topped with mini chocolate chips.</p>
       <br/>
              <b> - 14 - </b>
            </div>
            <div className='gallery_card_image item-sm' id='cake'>
            </div>

          </div>
          
      </div>
      </section>
    
    
        
    
    </>
  )
}
