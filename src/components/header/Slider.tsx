"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules"; 
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/parallax"; 

const images = [
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/strategy.svg",
    alt: "Stratégie marketing",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/influence.svg",
    alt: "Relations Media",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/design.svg",
    alt: "Design visuel",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/tech.svg",
    alt: "Tech & Web",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/content.svg",
    alt: "Edition & contenus",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/digital.svg",
    alt: "Social Media / Référencement",
  },
  {
    url: "https://www.eliott-markus.com/wp-content/uploads/2023/05/consulting.svg",
    alt: "Outsourcing",
  },
];

const ImageSlider = () => {
  const slideVariants = {
    initial: { opacity: 0, scale: 0.8, zIndex: 0 },
    animate: { opacity: 1, scale: 1, zIndex: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0, scale: 1.2, zIndex: 0, transition: { duration: 1.2 } },
  };

  return (
    <section className="fixed top-40 right-0 h-full w-[500px] z-50 rounded-l-[35px] ">
      <div className="buge-images p-4 relative rounded-l-[35px] overflow-hidden">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20} 
          loop={true}
          speed={1500} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          parallax={true}
          modules={[Autoplay, Parallax]}
        >
          
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative overflow-hidden rounded-[35px]"
            >
              <motion.div
                className="swiper-slide-inner"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideVariants}
                data-swiper-parallax="20%"
                data-swiper-parallax-duration="1500"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="rounded-[35px] max-w-[287px] mx-auto"
                  data-swiper-parallax="10%"
                  data-swiper-parallax-duration="1500"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageSlider;
