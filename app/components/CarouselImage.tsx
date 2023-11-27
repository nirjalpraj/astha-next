"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const CarouselImage = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <img src="/abstract.jpg" />
        <img src="unity.jpg" />
      </Carousel>
    </div>
  );
};

export default CarouselImage;
