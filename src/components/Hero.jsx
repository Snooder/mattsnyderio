import { SpacemanCanvas } from ".";
import Position from "./Position";
import {mattsnyderio} from "../assets";

const Hero = ({ scrollContainer }) => {
  const handleButtonClick = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="parallax relative z-0"> {/* Parallax section in the background */}
      
      {/* Content Container */}
      <div className="relative mx-auto w-[100vw] h-full z-20"> {/* Ensure content is on top */}

        {/* First Row - "MATT SNYDER" */}
        <div className="z-20 text-left pt-10 pr-10 pl-6 sm:pl-7 sm:pt-35 sm:pr-4">
          <h2 className="font-medium text-white text-[30px] sm:text-[50px]">
            Hi, my name is
          </h2>
        </div>
        <div className="z-20 text-left pl-6 sm:pr-4">
          <h1 className="font-medium text-white text-[80px] xs:text-[70px] sm:text-[120px] leading-[70px] sm:leading-[100px] xl:leading-[140px]">
            MATT
          </h1>
          <h1 className="font-medium text-white text-[80px] xs:text-[70px] sm:text-[120px] 2xl:text-[200px] leading-[70px] sm:leading-[100px] xxl:leading-[140px]">
            SNYDER
          </h1>
        </div>

        {/* Second Row - Position text */}
        <div className="z-20 hidden sm:block text-right lg:text-right sm:pl-8 xl:pt-5">
          <Position />
        </div>

        {/* Third Row - "I craft unique experiences..." */}
        <div className="z-20 float-right text-right sm:text-left sm:text-right pr-5 sm:pr-20 mt-[130px] sm:mt-[0px]">
          <div className="font-bold text-[24px] sm:pt-[50px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white">
            I craft <br />unique platforms<br />for the digital world.
          </div>
        </div>

        {/* Button Navigation */}
        <div className="z-20 float-right w-full bg-transparent mt-[30px] sm:mt-[100px]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              {/* Left Column of Buttons */}
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => handleButtonClick("experience")}
                  className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
                >
                  Experience
                </button>
                <button
                  onClick={() => handleButtonClick("designs")}
                  className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
                >
                  Designs
                </button>
              </div>

              <div className="flex justify-center">
                <img
                  src={mattsnyderio}
                  alt="Center Image"
                  className="w-96 h-auto"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))', // Initial glow effect
                    transition: 'transform 0.3s ease, filter 0.3s ease', // Smooth transition effect
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'; // Slight zoom effect on hover
                    e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(255, 215, 0, 1))'; // More intense glow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'; // Reset zoom effect
                    e.currentTarget.style.filter = 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))'; // Reset glow effect
                  }}
                />
              </div>

              {/* Right Column of Buttons */}
              <div className="flex flex-col gap-6">
                <button
                  onClick={() => handleButtonClick("portfolio")}
                  className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
                >
                  GitHub
                </button>
                <button
                  onClick={() => handleButtonClick("events")}
                  className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
                >
                  Events
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Parallax Images - Behind everything */}
      <img className="parallax__stars object-cover object-center z-0" src="./parallax/1Stars.svg" alt="Stars" />
      <img className="parallax__planets object-cover object-center z-0" src="./parallax/2Planets.svg" alt="Planets" />
      <img className="parallax__mountain1 object-cover object-center z-0" src="./parallax/3Mountain.svg" alt="Mountain 1" />
      <img className="parallax__mountain2 object-cover object-center z-0" src="./parallax/4Mountain.svg" alt="Mountain 2" />
      <img className="parallax__crater object-cover object-center z-0" src="./parallax/5Crater.svg" alt="Crater" />
      <img className="parallax__sun object-cover object-center z-0" src="./parallax/6Sun.svg" alt="Sun" />
    </section>
  );
};

export default Hero;
