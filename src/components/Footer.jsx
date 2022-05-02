import React from "react";
import { dataFooter } from "../data/Footer_data";
import { FooterCon, ImageCon, Image } from "../styles/Footer_styled";

function Footer() {
  return (
    <FooterCon>
      <h3>Extranet login</h3>
      <small>
        Copyright &copy; {new Date().getFullYear()} GG Booking&trade; . All
        rights reserved.
      </small>
      <p>
        GG Booking.com is part of Booking Holding Inc., the world leader in
        online travel and related services.
      </p>
      <ImageCon>
        {dataFooter.map((item) => (
          <a hrefLang="en" href={item.link} key={item.title} target="_blank">
            <Image src={item.image} alt={item.title} />
          </a>
        ))}
      </ImageCon>
    </FooterCon>
  );
}

export default Footer;
