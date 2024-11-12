import React from 'react';
import Image from 'next/image';

const EmImage = () => {
  return (
    <div className=" h-full w-full flex flex-col justify-center items-center relative rounded-[20px] bg-[#222222] overflow-hidden cursor-pointer border-[2px] border-[#222222]">
      <div className="absolute z-[9999] flex flex-col justify-center items-center">
        <Image
          src="/images/darkLogo.svg"
          alt="EM Logo"
          width={100} 
          height={100} 
        />
      </div>
      <div className="w-full h-full relative">
        <Image
          src="https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/bg-em-anim.svg"
          alt="EM BG"
          layout="fill" 
          className="absolute top-0 left-0 transition-transform duration-1000 hover:scale-[1.4] hover:rotate-[-22deg] hover:translate-y-[15px]"
        />
      </div>
    </div>
  );
};

export default EmImage;