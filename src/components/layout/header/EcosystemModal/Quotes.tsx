import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const QuoteCarousel: React.FC = () => {
  const quotes = [
    {
      text: 'The satisfaction of our clients is our ultimate commitment.',
      author: 'Gwénaëlle Henri',
      imageSrc: '/images/team/team1.jpg',
    },
    {
      text: 'Your brand starts here.',
      author: 'Ilyas Meslohi',
      imageSrc: '/images/team/team2.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayInterval = 5000; 

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, quotes.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const { text, author, imageSrc } = quotes[currentIndex];

  return (
    <div className='rounded-[20px] bg-grayDark text-white p-3 h-full flex justify-center items-end'>
      <div className='flex flex-col items-center px-5'>
        <div className='text-center mb-6'>
          <p className='text-[30px] font-medium mb-6'>«&nbsp;{text}&nbsp;»</p>
          <span className='font-medium'>{author}</span>
        </div>
        <Image
          src={imageSrc}
          alt={`${author}'s image`}
          width={43}
          height={43}
          className='w-[43px] h-[43px] rounded-full'
        />
        <div className="flex gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;