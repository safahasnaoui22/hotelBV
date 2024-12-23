import "swiper/css";
import "swiper/css/effect-fade";
import React from "react";
import Video1 from "../assets/img/heroSlider/bg.mp4";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    bg: Video1,
    btnText: "See our rooms",
  },

 
];

function HeroSlider() {
  return (
    <Swiper className="heroSlider h-[600px] lg:h-[700px] ">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="h-full relative"
            key={index}
          >
            <video
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
              style={{ objectFit: "cover", backgroundColor: "transparent" }}
            >
              <source src={bg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex justify-center items-center text-white z-20">
              <div className="text-center">
                <div className="uppercase front-tertiary tracking-[6px] mb-5">
                  Just Enjoy and relax
                </div>
                <h1 className="text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                  {title}
                </h1>
                <button className="btn btn-lg btn-primary mx-auto">
                  {btnText}
                </button>
           
              </div>
            </div>
            {/** overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HeroSlider;
