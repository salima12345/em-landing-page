"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";

const slides = [
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/strategy.svg", alt: "Stratégie marketing" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/influence.svg", alt: "Relations Media" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/design.svg", alt: "Design visuel" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/tech.svg", alt: "Tech & Web" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/content.svg", alt: "Edition & contenus" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/digital.svg", alt: "Social Media / Référencement" },
  { url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/consulting.svg", alt: "Outsourcing" },
];

const SliderSwiper = () => {
  return (
    <div className="w-full max-w-[450px] ml-auto py-8">
      <Swiper
        allowTouchMove={false}
        modules={[Navigation, EffectCreative, Autoplay]}
        slidesPerView={1.5}
        speed={2000}
        loop={true}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: [0, 0, 0],
            scale: 1,
          },
          next: {
            translate: ["100%", 0, 0],
          },
          limitProgress: 2,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-[250px] md:h-[287px] overflow-hidden "
        data-testid="swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-testid="swiper-slide">
            <div className="block w-[250px] md:w-[287px] h-[250px] md:h-[287px] relative rounded-[35px] overflow-hidden">
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;