import React, { useState, useEffect } from 'react';

const Media: React.FC = () => {
  const icons = [
    'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/linkedin.svg',
    'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/x_icon.svg',
    'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/instagram.svg',
    'https://www.eliott-markus.com/wp-content/themes/em-wp/images/em-menu/facebook.svg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true); 

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [icons.length, isAutoPlay]);

  const handleIconClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false); 
  };

  return (
    <div className="rounded-[20px] bg-grayDark text-white p-3 flex flex-col items-center justify-between h-full ">
      <img src={icons[currentIndex]} alt="Social Media Icon" className="w-10 h-10 " />
      <div className="flex gap-2 ">
        {icons.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full   ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Media;
