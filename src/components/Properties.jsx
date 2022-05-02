import React from "react";
import { dataProperties } from "../data/Properties_data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  Container,
  Wrapper,
  SliderCon,
  ImageCon,
  Image,
} from "../styles/Properties_styled";

function Properties() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
  };
  return (
    <Container>
      <h1>Browse by property type</h1>
      <Wrapper>
        <Slider {...settings}>
          {dataProperties.map((propertie, index) => {
            return (
              <SliderCon key={index}>
                <ImageCon>
                  <Image src={propertie.image} />
                </ImageCon>
                <h2>{propertie.title}</h2>
                <p>
                  {propertie.amount} {propertie.title}
                </p>
              </SliderCon>
            );
          })}
        </Slider>
      </Wrapper>
    </Container>
  );
}

export default Properties;
