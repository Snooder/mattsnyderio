import { SpacemanCanvas } from ".";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  return (
    <section className="parallax relative">
      {/* Content Container */}
      <div className="mx-auto w-[100vw] h-full z-10 relative">         
        {/* SpacemanCanvas - Absolute positioned, stays inside the box */}
        <div className="absolute top-0 right-0 mt-[100px] mr-[100px]"> {/* Right-aligned */}
            <SpacemanCanvas scrollContainer={scrollContainer} />
        </div>
        
        {/* First Row - "MATT SNYDER" */}
        <div className="text-left pt-20 pl-4 md:pr-12"> {/* Align properly with padding */}
          <h1 className='font-medium text-white text-[60px] xs:text-[70px] sm:text-[120px]'>
            MATT
          </h1>
          <h1 className='font-medium text-white text-[60px] xs:text-[70px] sm:text-[120px] 2xl:text-[200px] leading-none'>
            SNYDER
          </h1>
        </div>

        {/* Second Row - Position text */}
        <div className="hidden sm:block text-right lg:text-right pr-4"> {/* Proper padding from right */}
          <Position />
        </div>

        {/* Third Row - "I craft unique experiences..." */}
        <div className="text-left sm:text-right pr-4"> {/* Text aligned and padded */}
          <div className='font-bold text-[24px] sm:pt-[50px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white'>
            I craft unique <br /> experiences for the digital world.
          </div>
        </div>
      </div>
      

      {/* Parallax Images */}
      <img className="parallax__stars object-cover object-center" src="./parallax/1Stars.svg" alt="Stars" />
      <img className="parallax__planets object-cover object-center" src="./parallax/2Planets.svg" alt="Planets" />
      <img className="parallax__mountain1 object-cover object-center" src="./parallax/3Mountain.svg" alt="Mountain 1" />
      <img className="parallax__mountain2 object-cover object-center" src="./parallax/4Mountain.svg" alt="Mountain 2" />
      <img className="parallax__crater object-cover object-center" src="./parallax/5Crater.svg" alt="Crater" />
      <img className="parallax__sun object-cover object-center" src="./parallax/6Sun.svg" alt="Sun" />
    </section>
  );
};

export default Hero;
