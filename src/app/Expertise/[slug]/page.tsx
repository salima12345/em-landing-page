'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import AnimatedTitle from '@/components/ui/TitleReveal';
import Button from '@/components/ui/Button';
import TeamReveal from '@/components/TeamReveal';
import Footer from '@/components/layout/footer';
import { teamGroups } from '@/Data/TeamData';

interface ServiceItemProps {
  number: string;
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ number, title }) => (
  <div className="flex items-center gap-2">
    <p className="text-sm relative -top-1 font-bold">{number.padStart(2, '0')}</p>
    <p className="text-[20px] font-bold">{title}</p>
  </div>
);

interface PageContent {
  title: string;
  description: string;
  servicesDescription: string;
  heroTextColor: string;
  servicesBgColor: string;
  servicesTextColor: string;
  imageSrc: string;
  services: string[];
  footerIcon?: string;
}

const PAGE_CONTENT: Record<string, PageContent> = {
  Strategy: {
    title: 'Strategy',
    description:
      'Behind every success story lies a powerful brand strategy',
    servicesDescription:
      'At Eliott & Markus, our mission is to define and guide the way a brand presents itself, communicates and positions itself in its market. We work with our clients to develop strategies that not only strengthen their image, but help them achieve their growth objectives.\n\nOur approach covers a wide range of strategic services, from the creation of marketing strategies to benchmarking and the development of brand platforms. We integrate ESG principles into our approach to promote responsible brands that are adapted to market expectations.\n\nOur team of 45 professionals is crucial to turning these strategies into effective action and measurable results.',
    heroTextColor: '#1D4520',
    servicesBgColor: '#1D4520',
    servicesTextColor: '#FFFFFF',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/strategy.svg',
    services: [
      'Marketing',
      'Branding and Identity',
      'Website Development',
      'Content Strategy',
      'Social Media Management',
      'Web Maintenance',
    ],
  },
  Media: {
    title: 'Media',
    description:
      'Align your influence with your strategy, using the right levers.',
    servicesDescription:
      "We support our customers in developing their influence. Over the past 20 years, we have established close ties with influential editorial teams in the economic, financial and legal fields. This mutual trust not only means that we are frequently asked for relevant contributions, but also that we know exactly where to turn to maximize the impact of our actions.\n\n Beyond our role as intermediaries, we adopt a strategist's posture for our customers, creating opportunities for visibility and opinion leadership. We seek to position our customers as benchmarks in their field.\n\n In our approach to media relations, we adopt an innovative editorial approach, notably through the commissioning or creation of thought leadership content, such as sector analyses or cartographies, white papers or barometers.",
    heroTextColor: '#E0643A',
    servicesBgColor:"#F2BD41",
    servicesTextColor: '#1D4520',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/influence.svg',
    services: [
      'Influence Consulting',
      'Media relations',
      'Media relations',
      'Thought Leadership Strategy',
      'Data Intelligence (Survey/Barometer)',
      'Opinion writing',
      'E-reputation',
      'PR Litigation',
      'Legal and Financial Press Relations',
      'Media Training & Public Speaking',
    ],
  },
  Design: {
    title: 'Design',
    description:
      'Crafting the essence of your brand to make a lasting Impression.',
    servicesDescription:
      "With ten years' experience in rebranding professional services firms and organizations, our studio brings together passionate graphic artists, designers, and web designers.\n\n Our expertise lies in innovative visual creation and brand identity transformation. We turn our customers' ideas into creative design solutions, from logo and visual identity to UI and digital design, motion design, computer graphics, office branding, and editorial design.\n\n As production intermediaries, we are committed to promoting responsible consumption. We are proud of our partnership with 'Les Marqueurs Français' and eco-responsible printers. These collaborations illustrate our commitment to authentic, sustainable quality, and our support for the local, French, or European economy.",
    heroTextColor: '#1D4520',
    servicesBgColor:"#ECC6C7",
    servicesTextColor: '#1D4520',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/design.svg',
    services: [
      'Visual identity',
      'Brand territory',
      'UI & Digital Design',
      'Videos & Motion Design',
      'Office Branding',
      'Legal Design',
      'Editorial Design',
      'Goodies',
    ],
  },
  Web: {
    title: 'Tech/Web',
    description:
      'Every website is a world of opportunities, where every click forges a relationship with the brand .',
    servicesDescription:
      "Our team of web development and design experts is dedicated to creating exceptional online experiences. \n\n We offer a range of services including bespoke website and extranet design, CRM integration, as well as AI and data science solutions. \n\n Our aim is to develop interactive and intuitive digital platforms, with a strong commitment to the creation of scalable, future-proof websites. \n\n As part of our web offering, we have launched initiatives to minimize the ecological footprint of the sites we create. We favor green hosting and adopt eco-responsible solutions such as optimizing site performance and energy efficiency. These measures are aimed at reducing data consumption and speeding up loading times, thus contributing to a more environmentally-friendly digital presence.",
    heroTextColor: '#125ed4',
    servicesBgColor:"#125ed4",
    servicesTextColor: '#FFFFFF',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/tech.svg',
    services: [
      'Digital Transformation Consulting and Strategies',
      'Web Platform Development',
      'Customized Technological Solutions',
      'CRM Integration and Synchronization',
      'UX and User Experience Optimization',
      'AI and Data Science Solutions',
      'Web Maintenance, Hosting, and Security',
      'SEO and Online Reputation Management',
      'Technical/Web Direction and Project Management',
    ],
  },
  Content: {
    title: 'Edition/Content',
    description:
      'Creating differentiating and value-driven content.',
    servicesDescription:
      "Our team of web development and design experts is dedicated to creating exceptional online experiences. \n\n We offer a range of services including bespoke website and extranet design, CRM integration, as well as AI and data science solutions. \n\n Our aim is to develop interactive and intuitive digital platforms, with a strong commitment to the creation of scalable, future-proof websites. \n\n As part of our web offering, we have launched initiatives to minimize the ecological footprint of the sites we create. We favor green hosting and adopt eco-responsible solutions such as optimizing site performance and energy efficiency. These measures are aimed at reducing data consumption and speeding up loading times, thus contributing to a more environmentally-friendly digital presence.",
    heroTextColor: '#E0643A',
    servicesBgColor:"#E0643A",
    servicesTextColor: '#FFFFFF',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/content.svg',
    services: [
      'Content strategy',
      'Editorial consulting',
      'Activity Reports, ESG Reports & Whitepapers',
      'Technical articles',
      'Newsletter',
      'Media management',
      'SEO optimization',
      'Legal and financial drafting',
    ],
  },
  SocialMedia: {
    title: 'Social Media / SEO',
    description:
      'Target, influence, convert with the right content and in the right context.',
    servicesDescription:
      "Our main objective is to help our customers make the most of digital channels to increase their brand awareness and visibility, generate qualified traffic, engage their audience, and achieve their development objectives.\n\n We design tailor-made digital strategies, integrating inbound marketing to attract and retain customers, and community management to boost online interactions.\n\n Our campaigns aim to engage and convert, extend reach and improve visibility on Google and social networks.",
    heroTextColor: '#125ed4',
    servicesBgColor:"#A6D4F9",
    servicesTextColor: '#125ed4',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/digital.svg',
    services: [
      'Digital Strategy',
      'Inbound Marketing',
      'Community Management (SMO)',
      'Email Marketing',
      'Social Ads - Google Ads (SEA)',
      'Google Ranking (SEO)',
      'e-Talks and Webinars',
      'E-reputation',
    ],
  },
  Outsourcing: {
    title: 'Outsourcing',
    description:
      'Streamline your communication with expert management.',
    servicesDescription:
      "Our consulting team brings strategic expertise and personalized guidance to our clients, enabling them to achieve their development objectives.\n\n With a proactive and results-oriented approach, we collaborate closely with our clients to identify opportunities and develop tailored strategic plans and roadmaps that cater to their specific needs.\n\n Our team plays a crucial role in project management, effectively coordinating diverse teams and ensuring the successful implementation of communication and marketing initiatives and operations.",
    heroTextColor: '#125ed4',
    servicesBgColor:"#E6E5DF",
    servicesTextColor: '#125ed4',
    imageSrc: 'https://www.eliott-markus.com/wp-content/uploads/2023/05/consulting.svg',
    services: [
      'Project management',
      'Business Development',
      'Strategic Planning',
      'Employer Brand',
      'Internal communications',
      'Reputation and rankings',
      'Corporate social media',
      'Event Management',
    ],
  },
};

const ExpertisePage = ({ params }: { params: { slug: string } }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const { slug } = params;

  const pageContent = PAGE_CONTENT[slug];

  if (!pageContent) {
    return <p>Page not found</p>;
  }

  const {
    title,
    description,
    heroTextColor,
    servicesBgColor,
    servicesTextColor,
    imageSrc,
    services,
    servicesDescription,
  } = pageContent;
   // Filter team members for the given slug
   const group = teamGroups.find((group) => group.name.toLowerCase() === slug.toLowerCase());
   const members = group ? group.members : [];

  return (
    <>
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-5">
  <button
    className="group w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E6E5DF] transition-all duration-300"
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = servicesBgColor)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E6E5DF')}
  >
    <Image
      src="/images/icons/arrowLeftDark.svg"
      alt="Arrow Left"
      width={19}
      height={19}
      className="transition-all duration-300 group-hover:hidden"
    />
    <Image
      src="/images/icons/arrowLeftLight.svg"
      alt="Arrow Left Hover"
      width={19}
      height={19}
      className="transition-all duration-300 hidden group-hover:block"
    />
  </button>
  <button
    className="group w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E6E5DF] transition-all duration-300"
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = servicesBgColor)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E6E5DF')}
  >
    <Image
      src="/images/icons/arrowRight.svg"
      alt="Arrow Right"
      width={19}
      height={19}
      className="transition-all duration-300 group-hover:hidden"
    />
    <Image
      src="/images/icons/arrowRightLight.svg"
      alt="Arrow Right Hover"
      width={19}
      height={19}
      className="transition-all duration-300 hidden group-hover:block"
    />
  </button>
</div>

            <div className='max-h-[200px] overlow-hidden'>
            <AnimatedTitle
              text={title}
              className="font-semibold text-[14px] animate-slide-in-up"
              style={{ color: heroTextColor }}
            />
            </div>
            <h3
              className="font-semibold text-[56px] animate-slide-in-up xl:max-w-[691px]"
              style={{ color: heroTextColor }}
            >
              {description}
            </h3>
          </div>
          <div className="w-[287px] h-[287px] relative rounded-[20px] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 1.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <Image
                src={imageSrc}
                alt={`${title} illustration`}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
        <div className="py-12 flex items-end justify-end">
          <Button
            darkImageSrc="/images/icons/arrowAltV.svg"
            lightImageSrc="/images/icons/arrowAltVDark.svg"
            altText="Arrow Icon"
          />
        </div>
        <div
          className="mt-10 py-12 rounded-[10px]"
          style={{ background: servicesBgColor }}
        >
          <motion.div
            ref={ref}
            initial={{ y: 20 }}
            animate={isInView ? { y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="container"
          >
            <div
              className="flex flex-col xl:flex-row gap-12 py-8 w-full gap-16 "
              style={{ color: servicesTextColor }}
            >
              <p className="text-[20px] font-medium leading-[30px] max-w-[50%] whitespace-pre-line">
                {servicesDescription}
              </p>
              <div className="flex flex-col gap-8 pl-16 ">
                {services.map((service, index) => (
                  <ServiceItem
                    key={service}
                    number={(index + 1).toString()}
                    title={service}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-10 py-16">
          <AnimatedTitle
            text={`The ${title} Team`}
            className="font-semibold text-[36px] animate-slide-in-up"
          />
          <TeamReveal members={members} />
          </div>
          <div  className='mt-10 '>
          <AnimatedTitle
            text={"Case Studies"}
            className="font-semibold text-[36px] animate-slide-in-up"
          />
             
          </div>
      </div>
      <Footer bgColor={servicesBgColor} buttonIcon="/images/icons/ArrowUpLight.svg" />
    </>
  );
};

export default ExpertisePage;
