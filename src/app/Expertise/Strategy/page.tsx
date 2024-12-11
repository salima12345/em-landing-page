"use client"

import React from 'react'
import Image from 'next/image'
import { motion ,useInView} from 'framer-motion'
import AnimatedTitle from '@/components/ui/TitleReveal'
import Button from '@/components/ui/Button'
import TeamReveal from '@/components/TeamReveal'
import Footer from '@/components/layout/footer'



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
function Strategy() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <>
    <div className='container py-8'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4 '>
          <div className='flex items-center gap-5'>
            <button className='w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E6E5DF]'>
              <Image
                src="/images/icons/arrowLeftDark.svg"
                alt="Arrow Left"
                width={19}
                height={19}
              />
            </button>
            <button className='w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#E6E5DF]'>
              <Image
                src="/images/icons/arrowRight.svg"
                alt="Arrow Right "
                width={19}
                height={19}
              />
            </button>
          </div>
          <AnimatedTitle
            text={`Strategy`}
            className="font-semibold text-[14px] text-[#1D4520] animate-slide-in-up"
          />
          <h3 className="font-semibold text-[56px] text-[#1D4520] animate-slide-in-up xl:max-w-[691px]">
            Behind every success story lies a powerful brand strategy
          </h3>
        </div>
        <div className="w-[287px] h-[287px] relative rounded-[20px] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src="https://www.eliott-markus.com/wp-content/uploads/2023/05/strategy.svg"
              alt="Strategy illustration"
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </div>
      </div>
      <div className='py-4 flex items-end justify-end'>
      <Button
              darkImageSrc="/images/icons/arrowAltV.svg"
              lightImageSrc='/images/icons/arrowAltVDark.svg'
              altText="Arrow Icon"
            />


      </div>
      <div className=' mt-10 py-12 rounded-[10px] bg-[#1D4520]  '>
      <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="container"
        >
          <div className="flex flex-col xl:flex-row items-start justify-center gap-16 max-w-6xl mx-auto text-white">
            <p className="text-[20px] font-medium leading-[30px] max-w-xl">
            At eliott & Markus, our mission is to define and guide the way a brand presents itself, communicates and positions itself in its market. We work with our clients to develop strategies that not only strengthen their image, but help them achieve their growth objectives.           
               <br/>
              That is why we have developed a specialized package tailored to address your unique needs and enhance your communication strategy.
              <br />
              <br/>
              Our approach covers a wide range of strategic services, from the creation of marketing strategies to benchmarking and the development of brand platforms. We integrate ESG principles into our approach to promote responsible brands that are adapted to market expectations.   
              <br />
              <br/>
              Our team of 45 professionals is crucial to turning these strategies into effective action and measurable results.      
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
      <div className='mt-10 py-16'>
      <AnimatedTitle
            text={`The Strategy Team`}
            className="font-semibold text-[36px]  animate-slide-in-up"
          />
      <TeamReveal/>


      </div>
    </div>
    <Footer/>

    </>
  )
}

export default Strategy

