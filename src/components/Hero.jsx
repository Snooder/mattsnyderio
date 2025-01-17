import React from 'react';
import Position from "./Position";
import HeroChangingWords from "./HeroChangingWords";
import HeroButtons from "./HeroButtons";
import ParallaxImages from "./ParallaxImages";
import JiggleSpinComponent from './JiggleSpinComponent';
import Lootbox from './Lootbox';
import { FaGithub } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ active, setActive }) => {
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
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            {/* Left Column */}
            <div>
              {/* First Row - "Hi, my name is" */}
              <div className="z-20 text-left pt-10 pr-10 pl-3 sm:pl-7 sm:pt-35 sm:pr-4">
                <h2 className="font-medium text-white text-[5vw] lg:text-[2vw] mx-auto">
                  Hi, my name is
                </h2>
              </div>

              {/* Second Row - MATT (with JiggleSpinComponent) */}
              <div className="z-20 text-left pl-6 sm:pr-4">
                <JiggleSpinComponent shadowColor="rgba(255, 255, 255, 0.8)" eggColor="white">
                  <span className="font-medium text-white text-[20vw] md:text-[10vw] leading-[70px] sm:leading-[100px] xl:leading-[140px]">
                    MATT
                  </span>
                </JiggleSpinComponent>
              </div>

              {/* Third Row - SNYDER */}
              <div className="z-20 text-left pl-6 sm:pr-4">
                <h1 className="font-medium text-white text-[20vw] md:text-[10vw] leading-[70px] sm:leading-[100px] xxl:leading-[140px] sm:mt-5">
                  SNYDER
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div className="z-20 bg-gray-800 bg-opacity-75 p-[5vw] md:p-[2vw] mt-[1vw] md:mt-[5vw] mx-[3vw] rounded-md flex flex-col sm:flex-row sm:items-start">
            
            {/* Text Content */}
            <div className="flex-1">
              {/* Title */}
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4">
                Thanks for stopping by
              </h3>

              {/* Technical Summary Paragraph 1 */}
              <p className="text-white text-sm sm:text-base leading-6 mb-6">
                I'm a creative professional and developer with strong foundations in programming languages 
                like Python, JavaScript, and Go. <br></br><br></br>I specialize in improving machine learning systems, developing scalable 
                backend platforms, and exercising modern front-end techniques with React and Tailwind.
              </p>
            </div>

            {/* Icons */}
            <div className="flex sm:flex-col justify-center sm:justify-start items-center gap-4 sm:ml-6 my-auto">
              {/* Experience Button */}
              <a
                href="#experience"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 hover:scale-125 flex items-center justify-center rounded-full text-white transition-all duration-300"
                title="Experience"
              >
              <FaBriefcase className="text-white text-2xl" />
              </a>

              {/* GitHub Button */}
              <a
                href="#github"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 hover:scale-125 flex items-center justify-center rounded-full text-white transition-all duration-300"
                title="GitHub"
              >
              <FaGithub className="text-white text-2xl" />
              </a>

              {/* Events Button */}
              <a
                href="#events"
                className="w-12 h-12 bg-gray-700 hover:bg-gray-600 hover:scale-125 flex items-center justify-center rounded-full text-white transition-all duration-300"
                title="Events"
              >
              <FaCamera className="text-white text-2xl" />
              </a>
            </div>
          </div>


          </div>

          {/* Rotating Words */}
          <div className="z-20 flex justify-center items-center lg:pr-5 sm:pr-20 mt-[50px] sm:mt-[120px] w-[90vw] sm:w-[70vw] ml-auto mr-auto">
            <div className="font-bold text-right text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] leading-[40px] sm:leading-[50px] streaky-glow text-white whitespace-nowrap">
              Welcome, I craft
            </div>
            <div className="ml-5 relative h-[50px] sm:h-[60px] md:h-[70px] 2xl:h-[80px]">
              <div className="font-bold text-left text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] text-white relative">
                <HeroChangingWords words={words} colors={colors} />
              </div>
            </div>
          </div>

          {/* Fourth Row - platforms for the digital world */}
          <div className="mt-3 font-bold text-center text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] streaky-glow text-white">
            solutions for the digital world.
          </div>

          {/* Button Navigation */}
          <div className="z-20 flex justify-center w-full bg-transparent mt-[30px] sm:mt-[100px]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
              <HeroButtons active={active} setActive={setActive} onClickHandlers={onClickHandlers} />
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
