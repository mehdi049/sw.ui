import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../src/images/background/img1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../src/images/background/img2.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../src/images/background/img3.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../src/images/background/img4.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
