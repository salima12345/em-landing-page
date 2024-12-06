'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '@/components/ui/TitleReveal';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/footer';

interface ServiceItemProps {
  number: string;
  title: string;
}

interface Service {
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title }) => (
  <div className="flex items-center gap-2">
    <p className="text-sm relative -top-1 font-bold">{number.padStart(2, '0')}</p>
    <p className="text-[20px] font-bold">{title}</p>
  </div>
);

const services: Service[] = [
  { title: 'Marketing' },
  { title: 'Branding and Identity' },
  { title: 'Website' },
  { title: 'Content Strategy' },
  { title: 'Media Relations' },
  { title: 'Social Media Management' },
  { title: 'Web maintenance and outsourcing' }
];

const MadeInModel: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="py-8">
        <div className="container flex items-end justify-between">
          <div className="flex flex-col gap-4">
            <AnimatedTitle
              text="Creation and Launch"
              className="font-semibold text-[14px]"
            />
            <h3 className="font-semibold text-[56px] animate-slide-in-up">
              Take the leap!
            </h3>
          </div>
          <div className="w-[60px]">
            <Button
              imageSrc="/images/icons/arrowAltV.svg"
              altText="Arrow Icon"
            />
          </div>
        </div>
        <div className="relative mt-8 mx-12 w-auto h-[344px] overflow-hidden rounded-lg custom-reveal">
          <Image
            src="https://www.eliott-markus.com/wp-content/uploads/2023/05/jump.png"
            alt="Take the Leap"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="container mx-auto px-4"
        >
          <div className="mt-10 flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto">
            <p className="text-[20px] font-medium leading-[30px] max-w-xl">
              We understand the unique challenges that emerging entities face as they enter the market.
              <br/>
              That is why we have developed a specialized package tailored to address your unique needs and enhance your communication strategy.
              <br />
              <br/>
              Through Jump, we embrace the power of innovative ideas and are dedicated to supporting young entrepreneurs on their creative journey.
            </p>
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
      <Footer/>
    </>
  );
};

export default MadeInModel;

