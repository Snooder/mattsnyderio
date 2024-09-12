import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-start items-center">
      {/* Container for rotating text */}
      <div className="absolute inset-0 flex flex-col">
        
        {/* First Text (Software Developer) */}
        <div className="text first absolute left-0 md:left-0 2xl:left-0 flex" aria-label="Software Developer">
          {produceSpans("Software Developer", "animate-textRotate1")}
        </div>

        {/* Second Text (Wonder Engineer) */}
        <div className="text second absolute left-0 md:left-0 2xl:left-0 flex mt-10" aria-label="Wonder Engineer">
          {produceSpans("Wonder Engineer", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;
