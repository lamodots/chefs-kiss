import React from "react";
import PrimaryButton from "../button/PrimaryButton";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYelp,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export function ServiceLink({ title, services }) {
  return (
    <section className="service-link">
      <ul className="menu">
        <l1 className="submenu">
          <label className="submenu-label">{title}</label>
          <nav>
            <ul>
              {services.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="!#">{item}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </l1>
      </ul>
    </section>
  );
}

export function ServiceContact() {
  return (
    <div className="service-contact">
      <div class="contacts">
        <div class="phone" style={{ paddingBottom: "25px" }}>
          <label style={{ textAlign: "left", marginLeft: "0" }}>Call Us</label>
          <a href="tel:(234) 813 344 5566" style={{ color: "#fff" }}>
            (234) 813 344 5566
          </a>
        </div>
        <div className="footerbtn">
          <PrimaryButton>
            <a href="!#">Book a Table</a>
          </PrimaryButton>
        </div>
        <div class="social">
          <label>Follow Us</label>

          <div class="networks">
            <a href="!#" class="facebook" target="_blank">
              <FaFacebookSquare />
            </a>

            <a href="!#" class="twitter" target="_blank">
              <FaTwitterSquare />
            </a>

            <a href="!#" class="yelp" target="_blank">
              <FaYelp />
            </a>

            <a href="!#" class="instagram" target="_blank">
              <FaInstagramSquare />
            </a>

            <a href="!#" class="linkedin" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export function Payment() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/home/payments.png)",

        width: "175px",
        height: "29px",
        paddingLeft: "10px",
        textAlign: "left",
        marginTop: "-20px",
      }}
      className="payments"
      title="We accept Mastercard, Visa, American Express and Discover cards"
      aria-label="We accept Mastercard, Visa, American Express and Discover cards"
    ></div>
  );
}
export function FooterCredit() {
  return (
    <div className="copy-credits">
      <span className="copy">© 2022 SideHustle — All rights reserved.</span>
      <span className="credits">
        Designed and developed by<a href="!#" className="link" target="_blank"> React Group 63</a>
      </span>
    </div>
  );
}

const FooterServiceLink = () => {
  return <div></div>;
};

export default FooterServiceLink;
