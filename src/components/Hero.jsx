import React from 'react';
import Position from "./Position";
import HeroChangingWords from "./HeroChangingWords";
import HeroButtons from "./HeroButtons";
import ParallaxImages from "./ParallaxImages";
import JiggleSpinComponent from './JiggleSpinComponent'; // Import the JiggleSpinComponent

const Hero = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#8A2BE2", "#FF69B4"];
  const words = ["unique", "captivating", "exhilarating"];

  const handleButtonClick = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onClickHandlers = {
    experience: () => handleButtonClick("experience"),
    designs: () => handleButtonClick("designs"),
    github: () => handleButtonClick("github"),
    events: () => handleButtonClick("events"),
  };

  return (
    <>
      <section className="parallax relative z-0">
        <div className="relative mx-auto w-[100vw] h-full z-20 mt-5">
          {/* First Row - "Hi, my name is" */}
          <div className="z-20 text-left pt-10 pr-10 pl-6 sm:pl-7 sm:pt-35 sm:pr-4">
            <h2 className="font-medium text-white text-[30px] sm:text-[50px] mx-auto">
              Hi, my name is
            </h2>
          </div>

          {/* Second Row - MATT (with JiggleSpinComponent) */}
          <div className="z-20 text-left pl-6 sm:pr-4">
            <JiggleSpinComponent shadowColor="rgba(255, 255, 255, 0.8)" eggColor="white">
              <span className="font-medium flex-start text-white text-[80px] xs:text-[70px] sm:text-[120px] leading-[70px] sm:leading-[100px] xl:leading-[140px]">
                MATT
              </span>
            </JiggleSpinComponent>
          </div>

          {/* SNYDER remains static */}
          <div className="z-20 text-left pl-6 sm:pr-4">
            <h1 className="font-medium text-white text-[80px] xs:text-[70px] sm:text-[160px] leading-[70px] sm:leading-[100px] xxl:leading-[140px] sm:mt-5">
              SNYDER
            </h1>
          </div>

          {/* Third Row - Rotating Words */}
          <div className="z-20 flex justify-center items-center pr-5 sm:pr-20 mt-[50px] sm:mt-[120px] w-[90vw] sm:w-[70vw] ml-auto mr-auto">
            <div className="font-bold text-right text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] leading-[40px] sm:leading-[50px] streaky-glow text-white whitespace-nowrap">
              I craft
            </div>
            <div className="sm:ml-5 relative h-[50px] sm:h-[60px] md:h-[70px] 2xl:h-[80px]">
              <div className="font-bold text-left text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] text-white relative">
                <HeroChangingWords words={words} colors={colors} />
              </div>
            </div>
          </div>

          {/* Fourth Row - platforms for the digital world */}
          <div className="mt-3 font-bold text-center text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] streaky-glow text-white">
            platforms for the digital world.
          </div>

          {/* Button Navigation */}
          <div className="z-20 flex justify-center w-full bg-transparent mt-[30px] sm:mt-[100px]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
              <HeroButtons onClickHandlers={onClickHandlers} />
            </div>
          </div>
        </div>

        {/* Parallax Images */}
        <ParallaxImages />
      </section>
    </>
  );
};

export default Hero;
