import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { dataHomeGuest } from "../data/HomeGuest_data";
import {
  Wraper,
  SlideCon,
  Image,
  HeaderInfo,
  Span,
} from "../styles/HomeGuest_styled";

function HomeGuests() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
  };

  return (
    <Wraper>
      <h1>HomeGuests</h1>
      <Slider {...settings} className="slide">
        {dataHomeGuest.map((item, index) => {
          const { header, image, price, rates } = item;
          return (
            <SlideCon key={index}>
              <Image src={image} />
              <HeaderInfo>
                <h3>{header.title}</h3>
                <h4>{header.subtitle}</h4>
                <h2>Starting from THB {price}</h2>
              </HeaderInfo>
              <Span>
                <button>{rates?.rating}</button>
                {rates?.level}
                <p>{rates?.reviews} reviews</p>
              </Span>
            </SlideCon>
          );
        })}
      </Slider>
    </Wraper>
  );
}

export default HomeGuests;
