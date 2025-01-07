'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '@/components/ui/TitleReveal';
import Button from '@/components/ui/Button';
import Footer from '@/components/layout/footer';

interface Service {
  title: string;
}

interface PageContent {
  subtitle: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string[];
  services: Service[];
  buttonAlt?: string;
}

const PAGE_CONTENT: Record<string, PageContent> = {
  creation: {
    subtitle: "Creation and Launch",
    title: "Take the leap!",
    imageSrc: "https://www.eliott-markus.com/wp-content/uploads/2023/05/jump.png",
    imageAlt: "Take the Leap",
    description: [
      "We understand the unique challenges that emerging entities face as they enter the market.",
      "That is why we have developed a specialized package tailored to address your unique needs and enhance your communication strategy.",
      "Through Jump, we embrace the power of innovative ideas and are dedicated to supporting young entrepreneurs on their creative journey."
    ],
    services: [
      { title: 'Marketing' },
      { title: 'Branding and Identity' },
      { title: 'Website' },
      { title: 'Content Strategy' },
      { title: 'Media Relations' },
      { title: 'Social Media Management' },
      { title: 'Web maintenance and outsourcing' },
    ],
  },
  management: {
    subtitle: "Transition management",
    title: "Focus on your core business",
    imageSrc: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Shift.png",
    imageAlt: "Chart Your Course",
    description: [
      "We offer communication outsourcing and strategic project management, coordinated by an experienced interim manager.\n\n Our team, which specializes in transitional and exceptional situations, or in replacing existing communications teams, takes full responsibility for managing your communications, from planning to implementation.\n\n A transition manager ensures effective coordination and execution of all communication initiatives. Our aim is to ensure a smooth transition and continued performance during these critical periods, by ensuring the continuity and effectiveness of your strategic communications.\n\n With Shift, you benefit from our experience with professional structures and our operational task force of 45 in-house experts."
    ],
    services: [
      { title: 'Diagnosis and Planning' },
      { title: 'Communication Strategy' },
      { title: 'Communication Management' },
      { title: 'Media Relations Management' },
      { title: 'Social Media Management' },
      { title: 'Creation/Updating of communication supports' },
      { title: 'Guides and Rankings' },
      { title: 'Executive Personal Branding' },
    ],
  },
  business: {
    subtitle: "Business Development",
    title: "Harness your growth potential and broaden your horizons",
    imageSrc: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Boost.png",
    imageAlt: "Chart Your Course",
    description: [
      "Business development is crucial for ensuring the sustainability and success of your company.\n\n Our Business Development offer is designed to assist your company drive growth, identify new opportunities, and develop  strategic relationships. \n\n With Boost, we support you in the development of a strategy aligned with your organization, from the analysis stage through to the resulting operational actions, to ensure the sustainability of your business."
    ],
    services: [
      { title: 'Analysis and Planning' },
      { title: 'Marketing and Offering Marketecture' },
      { title: 'Inbound Marketing and Customer Acquisition' },
      { title: 'Marketing and Communication Strategies' },
      { title: 'Strategic Partnerships' },
      { title: 'Public Relations' },
     
    ],
  },
  esg: {
    subtitle: "Business Development",
    title: "Harness your growth potential and broaden your horizons",
    imageSrc: "https://www.eliott-markus.com/wp-content/uploads/2023/05/Boost.png",
    imageAlt: "Chart Your Course",
    description: [
      "Business development is crucial for ensuring the sustainability and success of your company.\n\n Our Business Development offer is designed to assist your company drive growth, identify new opportunities, and develop  strategic relationships. \n\n With Boost, we support you in the development of a strategy aligned with your organization, from the analysis stage through to the resulting operational actions, to ensure the sustainability of your business."
    ],
    services: [
      { title: 'Analysis and Planning' },
      { title: 'Marketing and Offering Marketecture' },
      { title: 'Inbound Marketing and Customer Acquisition' },
      { title: 'Marketing and Communication Strategies' },
      { title: 'Strategic Partnerships' },
      { title: 'Public Relations' },
     
    ],
  },
};

const MadeInPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const ref = React.useRef(null);
  const imageRef = React.useRef(null);
  const nextContentRef = React.useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  if (!slug || typeof slug !== 'string') {
    return <p>Loading...</p>; //  replace with a proper loading indicator
  }

  const content = PAGE_CONTENT[slug.toLowerCase()];
  console.log('Retrieved content:', content);

  if (!content) {
    return <p>Page not found</p>;
  }

  const {
    subtitle,
    title,
    imageSrc,
    imageAlt,
    description,
    services,
    buttonAlt = "Arrow Icon",
  } = content;

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
            <h5 className="font-semibold text-[56px] animate-slide-in-up">
              {title}
            </h5>
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
        <div className="relative mt-8 mx-4 2xl:mx-12 w-auto xl:h-[344px] h-[255px] overflow-hidden rounded-lg ">
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="h-full w-full "
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
                  {paragraph
                    .split('.')
                    .filter((sentence) => sentence.trim())
                    .map((sentence, i) => (
                      <React.Fragment key={i}>
                        {sentence.trim()}.{i < paragraph.split('.').length - 1 && <><br /><br /></>}
                      </React.Fragment>
                    ))}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <div key={service.title} className="flex items-center gap-2">
                  <p className="text-sm relative -top-1 font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <p className="text-[20px] font-bold">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default MadeInPage;
