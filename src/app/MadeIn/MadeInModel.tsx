"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AnimatedTitle from "@/components/ui/TitleReveal";
import Button from "@/components/ui/Button";
import Footer from "@/components/layout/footer";

interface ServiceItemProps {
  number: string;
  title: string;
}

export interface Service {
  title: string;
}

export interface MadeInModelProps {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string[];
  services: Service[];
  buttonAlt?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title }) => (
  <div className="flex items-center gap-2">
    <p className="text-sm relative -top-1 font-bold">{number.padStart(2, "0")}</p>
    <p className="text-[20px] font-bold">{title}</p>
  </div>
);

const MadeInModel: React.FC<MadeInModelProps> = ({
  subtitle,
  title,
  imageSrc,
  imageAlt,
  description,
  services,
  buttonAlt = "Arrow Icon",
}) => {
  const ref = React.useRef(null);
  const imageRef = React.useRef(null);
  const nextContentRef = React.useRef<HTMLDivElement>(null); 
  const isInView = useInView(ref, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  const imageVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const handleScrollToNextContent = () => {
    if (nextContentRef.current) {
      nextContentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="py-8">
        <div className="container flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text={subtitle}
              className="font-semibold text-[14px]"
            />
            <h3 className="font-semibold text-[56px] animate-slide-in-up">
              {title}
            </h3>
          </div>
          <div className="w-[60px]">
            <Button
              lightImageSrc="/images/icons/arrowAltVdark.svg"
              darkImageSrc="/images/icons/arrowAltV.svg"
              altText={buttonAlt}
              onClick={handleScrollToNextContent} 
            />
          </div>
        </div>
        <div className="relative mt-8 mx-4 2xl:mx-12 w-auto xl:h-[344px] h-[255px] overflow-hidden rounded-lg">
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="h-full w-full"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container"
        >
          <div className="mt-10 flex flex-col xl:flex-row items-start justify-center gap-16 max-w-6xl mx-auto">
            <div className="text-[20px] font-medium leading-[30px] max-w-xl">
              {description.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                  <br />
                  {index < description.length - 1 && <br />}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <ServiceItem
                  key={service.title}
                  number={(index + 1).toString()}
                  title={service.title}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div ref={nextContentRef} className="py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-[32px] font-bold">Next Content Section</h2>
          <p>This is where the user will land after clicking the button.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MadeInModel;
