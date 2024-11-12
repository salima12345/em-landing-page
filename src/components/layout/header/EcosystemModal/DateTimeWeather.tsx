import React, { useState, useEffect } from 'react';

interface DateTimeWeatherProps {
  city: string;
  continent: string;
  isDark: boolean;
}

const DateTimeWeather: React.FC<DateTimeWeatherProps> = ({ city, continent, isDark }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [temperature, setTemperature] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3580d3c7e78513d1cccacfaf2d6ed95&units=metric`
        );
        const data = await response.json();
        setTemperature(data.main.temp);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setTemperature(null);
      }
    };

    fetchWeatherData();

    return () => clearInterval(intervalId);
  }, [city]);

  return (
    <div
      className={`rounded-[20px] p-4 flex justify-between items-end h-full ${
        isDark ? 'bg-grayDark text-white' : 'bg-[#F3F0E6] text-black'
      }`}
    >
      <div className="flex flex-col">
        <div className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          {dateTime.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </div>
        <div className={`text-[14px] font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          {dateTime.toLocaleString('en-US', {
            weekday: 'long',
          })}
        </div>
        <div className={`text-[14px] font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          {dateTime.getDate()} {dateTime.toLocaleString('default', { month: 'long' })}
        </div>
        <div className={`text-[13px] font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
          {city}
        </div>
        <div className={`text-[12px] ${isDark ? 'text-white' : 'text-black'}`}>
          {continent}
        </div>
      </div>
      {temperature !== null && (
        <div
          className={`h-[49px] w-[49px] flex items-center justify-center rounded-full ${
            isDark ? 'bg-[#E0E0E0] text-[#707070]' : 'bg-black text-white'
          }`}
        >
          {temperature.toFixed(0)}°
        </div>
      )}
    </div>
  );
};

export default DateTimeWeather;