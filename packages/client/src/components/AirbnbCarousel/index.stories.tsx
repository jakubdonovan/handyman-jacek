import faker from "faker";
import React from "react";
import { AirbnbCarousel } from ".";
export default {
  title: "AirbnbCarousel",
  component: AirbnbCarousel,
};

const generateImages = (options?: { amount: number }) => {
  const { amount = 1 } = options || {};
  const images = [];

  for (let i = 0; i < amount; i++) {
    images.push({
      filename: faker.image.abstract(),
      alt: faker.random.words(),
      position: faker.random.number(),
    });
  }

  return images;
};
const images = generateImages({ amount: 14 });
export const AirbnbCarouselActive = () => <AirbnbCarousel images={images} />;
