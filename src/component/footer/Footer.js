import React from "react";
import {
  ServiceLink,
  ServiceContact,
  FooterCredit,
  Payment,
} from "./FooterServiceLink";
import "./Footer.css";
import { FooterContainer, FooterWrap, FootNote } from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <section className="link-section">
          <article className="servicelink">
            <ServiceLink
              title="About"
              services={[
                "THE REÁL DEAL",
                "OUR STORY",
                "THE TEAM",
                "CAREERS",
                "SCHOLARSHIPS",
                "MERCHANDISE",
                "PRESS & AWARDS",
              ]}
            />
            <ServiceLink
              title="MENUS"
              services={[
                "LUNCH",
                "DINNER",
                "DESSERTS",
                "DRINKS",
                "CHILDREN",
                "SUNDAY BRUNCH",
              ]}
            />
            <ServiceLink
              title="GET IN TOUCH"
              services={[
                "PRIVATE ROOMS",
                "GIFT CARD",
                "RESERVATIONS",
                "CONTACT US",
              ]}
            />
          </article>
          <article className="service-contact">
            <ServiceContact />
          </article>
        </section>
      </FooterWrap>

      <Payment />

      <FootNote>
        <FooterCredit />
      </FootNote>
    </FooterContainer>
  );
}

export default Footer;
