import "./carousel.scss";
import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (prevState == data.length - 1) {
          return (prevState = 0);
        } else {
          return prevState + 1;
        }
      });

      return () => {
        clearInterval(interval);
      };
    }, 8000);
  }, []);

  return (
    <div className="carousel-wrapper">
      <img src={data[currentIndex]} />
    </div>
  );
};

export default Carousel;
