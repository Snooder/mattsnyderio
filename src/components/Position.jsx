import React, { useState, useEffect } from 'react';

const titles = ["Software Developer", "Full Stack Engineer", "ML Systems Engineer", "U/X Designer"]; // Titles to alternate

const produceSpans = (text) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom transition-opacity duration-500`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active title
  const [visible, setVisible] = useState(true); // Manage visibility for fade effect

  // Effect to rotate through the titles
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // Start fade-out effect

      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % titles.length); // Change to the next title
        setVisible(true); // Fade-in the new title
      }, 500); // Duration for fade-out and switch
    }, 3000); // Adjust time between switches

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-start items-center">
      {/* Animate 4 titles in sequence */}
      <div className="absolute inset-0 flex flex-col">
        {titles.map((title, index) => (
          <div
            key={index}
            className={`absolute left-0 md:left-0 2xl:left-0 flex transition-opacity duration-500 ${
              activeIndex === index && visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {produceSpans(title)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Position;
