"use client";

import React, { useState, useEffect } from 'react';


interface AnimatedNumberProps {
  targetValue: number;
  duration?: number;
}

function AnimatedNumber({ targetValue, duration = 800 }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 16);

    function animate() {
      start += increment;
      if (start >= targetValue) {
        setValue(targetValue);
      } else {
        setValue(Math.floor(start));
        requestAnimationFrame(animate);
      }
    }
    animate();
  }, [targetValue, duration]);

  return <p className="font-semibold text-[26px]">{value}</p>;
}

interface StatCardProps {
  title: string;
  value: number;
  staticValue?: boolean;
  isOrdinal?: boolean;
}

function StatCard({ title, value, staticValue = false, isOrdinal = false }: StatCardProps) {
  const displayValue = isOrdinal && value === 1 ? (
    <span className="inline-flex items-start">
      1<sup className="leading-none pt-3 align-top">st</sup>
    </span>
  ) : (
    value
  );

  return (
    <div className=" flex flex-col gap-3 py-2 border-t-2 border-foreground w-full  min-w-[186px] h-[124px]">
      {staticValue ? (
        <p className="font-semibold text-[26px]">{displayValue}</p>
      ) : (
        <AnimatedNumber targetValue={value} />
      )}
      <h4 className="font-semibold text-[26px]">{title}</h4>
    </div>
  );
}

function AboutBottom() {
  return (
<div id='about-bottom' className="flex justify-end flex-col xl:max-w-[782px] w-full pt-8 float-right">
        <p className="text-2xl leading-[34px]">
        As a pioneering agency, eliott & markus is both a witness to and a key player in digital, societal, and commercial trends of professional services firms and organizations.
        Thanks to our integrated, global approach to communications, enriched by our in-depth knowledge of complex markets, eliott & markus builds brand awareness for its customers in today’s attention economy.
      </p>

      <div className="flex  flex-col xl:flex-row items-center flex-start gap-5 pt-6">
        <StatCard title="consultants and experts" value={45} />
        <StatCard title="References" value={800} />
        <StatCard title="Continents" value={4} />
        <StatCard title="Ranked as Leading" value={1} staticValue isOrdinal />
      </div>
    </div>
  );
}

export default AboutBottom;
