import React from 'react';

interface StatisticsProps {
  value: number;
  title: string;
}

const Statistics: React.FC<StatisticsProps> = ({ value, title }) => {
  return (
    <div className='rounded-[20px] bg-grayDark text-white p-3 flex flex-col gap-3'>
      <h3 className='font-semibold text-[46px]'>
        {value}
      </h3>
      <h4 className='text-[20px]'>
        {title}
      </h4>
    </div>
  );
};

export default Statistics;