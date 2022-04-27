import './Contact.css';
import {FaFacebookSquare, FaGooglePlusG, FaTwitterSquare, FaYelp} from "react-icons/fa";
import { MapContainer, TileLayer} from 'react-leaflet';
function Contact (){
    return(
       <>
           <div className="container-fluid hero img-fluid">
                <h1 className="text-dark text-uppercase">Contact Us</h1>
           </div>
           <div className="container mt-5 pb-5">
               <div className="row">
                   <div className="col-12 col-md-6 my-5">
                       <div className="contact-form-header mb-3">
                           <h2 className="text-uppercase">
                               Send Us a Message
                           </h2>
                           <div>
                               We would love to hear from you.
                           </div>
                       </div>

                       <form className="contact-form text-start">
                           <div className="fields">
                               <div>
                                   <div className="field is-dropdown">
                                       <label>Title (optional)</label>
                                       <div className="input-container position-relative">
                                           <select name="title">
                                               <option value="">Select one</option>
                                               <option value="Mr.">Mr.</option>
                                               <option value="Mrs.">Mrs.</option>
                                               <option value="Ms.">Ms.</option>
                                            </select>
                                       </div>
                                   </div>
                                   <div className="field">
                                       <label>Name</label>
                                       <input type="text" name="name"
                                              placeholder="Enter your name"/>
                                   </div>
                                   <div className="field">
                                       <label>Email address</label>
                                       <input type="email"
                                              name="email"
                                              placeholder="Enter your email"/>
                                   </div>
                                   <div className="field">
                                       <label>Question/Comment</label>
                                       <textarea rows="3"
                                                 name="comment"
                                                 placeholder="Enter message">

                                       </textarea>
                                   </div>
                               </div>
                           </div>
                           <div className="actions">
                               <button disabled="disabled">Submit form</button>
                           </div>
                       </form>
                   </div>
                   <div className="col-12 col-md-6 my-5 contact-details">
                        <section className="section__phone">
                            <h3>Phone</h3>
                            <p className="position-relative">
                                <a href="tel:(972) 650 9001" className="text-uppercase link">(972) 650 9001</a>
                            </p>
                        </section>

                       <section className="section__address d-flex justify-content-between">
                           <div>
                               <span className="fw-bold mb-4">Address</span>
                               <p>
                                   Las Colinas Plaza<br/>
                                   4020 N MacArthur Blvd #100<br/>
                                   Irving, Texas 75038<br/>

                                   <a href="https://www.google.pt/maps/dir//Via+Real,+4020+North+Macarthur+Boulevard+%23100,+Irving,+TX+75038,+Estados+Unidos/@32.8612435,-96.9923168,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x864e82f48f0070ff:0xeeec21eed6aee306!2m2!1d-96.9572973!2d32.8612484"
                                      className="link fw-bold" target="_blank" rel={"noreferrer"}>
                                       Get directions
                                   </a>
                               </p>
                           </div>
                           <div className="contact-details__socials">
                                   <strong>Follow us</strong>
                                   <ul className="social">
                                       <li>
                                           <a href="https://www.facebook.com/viareal">
                                             <FaFacebookSquare style={{color: '#bc8d4b'}}/> Facebook
                                           </a>
                                       </li>
                                       <li>
                                           <a href="https://www.twitter.com/ViaReal">
                                             <FaTwitterSquare  style={{color: '#bc8d4b'}}/> Twitter
                                           </a>
                                       </li>
                                       <li>
                                           <a href="https://plus.google.com/+ViaRealIrving">
                                              <FaGooglePlusG  style={{color: '#bc8d4b'}}/> Google+
                                           </a>
                                       </li>
                                       <li>
                                           <a href="http://www.yelp.com/biz/via-real-gourmet-mexican-restaurant-irving">
                                              <FaYelp  style={{color: '#bc8d4b'}}/> Yelp
                                           </a>
                                       </li>
                                   </ul>
                           </div>
                       </section>
                       <section>
                           <div>
                               <strong>Hours of Operation</strong>
                               <ul>
                                   <li className="d-flex justify-content-between">
                                       <span>Monday - Thursday:</span>
                                       <span>11am - 10pm</span>
                                   </li>
                                   <li className="d-flex justify-content-between">
                                       <span>Friday:</span>
                                       <span>11am - 10pm</span>
                                   </li>
                                   <li className="d-flex justify-content-between">
                                       <span>Saturday:</span>
                                       <span>5pm - 10pm</span>
                                   </li>
                                   <li className="d-flex justify-content-between">
                                       <span>Sunday:</span>
                                       <span>11am - 2pm</span>
                                   </li>
                                   <li className="d-flex justify-content-between">
                                       <span></span>
                                       <span>5pm - 9pm</span>
                                   </li>
                               </ul>
                           </div>
                       </section>
                   </div>
               </div>
           </div>
           <div className="container-fluid pt-5">
                <div className="border-top border-secondary text-center pt-5">
                    <article>
                        <h2 className="text-uppercase py-3"> Book a Table</h2>
                        <p className="book_description mb-4">
                            In order for us to best serve you, please do not make reservations
                            by email. Please use OpenTable or give us a call.
                        </p>

                        <a href="http://www.opentable.com/via-real" className="book_button" target="_blank" rel={"noreferrer"}>Find a Table</a>
                    </article>
                </div>
               <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
                   <TileLayer
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                       url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
                   />
               </MapContainer>
           </div>
       </>
    )
}

export default Contact;