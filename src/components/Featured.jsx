import React from "react";
import { dataFeatured } from "../data/Featured_data";
import {
  FeaturedCon,
  Container,
  ImageCon,
  Image,
  Info,
} from "../styles/Featured_styled";

function Featured() {
  return (
    <FeaturedCon>
      {dataFeatured.map((item) => {
        return (
          <Container key={item.title}>
            <ImageCon>
              <Image src={item.image} alt={item.title} />
            </ImageCon>
            <Info>
              <h1>{item.title}</h1>
              <h3>{item.properties} properties</h3>
            </Info>
          </Container>
        );
      })}
    </FeaturedCon>
  );
}

export default Featured;
