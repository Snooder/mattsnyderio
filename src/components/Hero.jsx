import { SpacemanCanvas } from ".";
import Position from "./Position";
import { mattsnyderio } from "../assets";

const Hero = ({ scrollContainer }) => {
  const handleButtonClick = (anchor) => {
    const targetElement = document.getElementById(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#8A2BE2", "#FF69B4"];

  // Function to get a random color from the colors array
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <>
      <style>{`
        .changing-words {
    display: flex;
    position: relative;
    white-space: nowrap;
    min-width: 200px;
    justify-content: flex-start;
    align-items: center;
    height: 1em;
  }

  .changing-words .word {
    position: absolute;
    opacity: 0;
    animation: fadeWords 6s linear infinite 0s;
  }

  /* Small devices below sm */
  @media (max-width: 640px) {
    .changing-words {
      justify-content: center; /* Center on small devices */
      text-align: center;
    }
  }

  .changing-words .word:nth-child(1) {
    animation-delay: 0s;
  }

  .changing-words .word:nth-child(2) {
    animation-delay: 2s;
  }

  .changing-words .word:nth-child(3) {
    animation-delay: 4s;
  }

  @keyframes fadeWords {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    10% {
      opacity: 1;
      transform: translateY(0);
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 0;
    }
  }
      `}</style>

      <section className="parallax relative z-0">
        <div className="relative mx-auto w-[100vw] h-full z-20 mt-5">
          {/* First Row - "MATT SNYDER" */}
          <div className="z-20 text-left pt-10 pr-10 pl-6 sm:pl-7 sm:pt-35 sm:pr-4">
            <h2 className="font-medium text-white text-[30px] sm:text-[50px] mx-auto">
              Hi, my name is
            </h2>
          </div>
          <div className="z-20 text-left pl-6 sm:pr-4">
            <h1 className="font-medium text-white text-[80px] xs:text-[70px] sm:text-[120px] leading-[70px] sm:leading-[100px] xl:leading-[140px]">
              MATT
            </h1>
            <h1 className="font-medium text-white text-[80px] xs:text-[70px] sm:text-[160px] leading-[70px] sm:leading-[100px] xxl:leading-[140px] sm:mt-5">
              SNYDER
            </h1>
          </div>

          <div className="z-20 flex justify-center items-center pr-5 sm:pr-20 mt-[50px] sm:mt-[120px] w-[90vw] sm:w-[70vw] ml-auto mr-auto">
            {/* "I craft" Text */}
            <div className="font-bold text-right text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] leading-[40px] sm:leading-[50px] streaky-glow text-white whitespace-nowrap">
              I craft
            </div>

            {/* Rotating words */}
            <div className="sm:ml-5 relative h-[50px] sm:h-[60px] md:h-[70px] 2xl:h-[80px]">
              <div className="font-bold text-left text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] text-white relative">
                <span className="block relative">
                  <span className="changing-words streaky-glow absolute inset-0 flex items-start justify-start">
                    <span className="word" style={{ color: getRandomColor() }}>unique</span>
                    <span className="word" style={{ color: getRandomColor() }}>captivating</span>
                    <span className="word" style={{ color: getRandomColor() }}>life-changing</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Adjusted spacing for "platforms for the digital world." */}
          <div className="mt-3 font-bold text-center text-[24px] sm:text-[34px] md:text-[40px] 2xl:text-[50px] sm:leading-[40px] md:leading-[50px] streaky-glow text-white">
            platforms for the digital world.
          </div>

          {/* Button Navigation */}
          <div className="z-20 flex justify-center w-full bg-transparent mt-[30px] sm:mt-[100px]">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
                      transition: 'transform 0.3s ease, filter 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.filter =
                        'drop-shadow(0 0 30px rgba(255, 215, 0, 1))';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.filter =
                        'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))';
                    }}
                  />
                </div>

                {/* Right Column of Buttons */}
                <div className="flex flex-col gap-6">
                  <button
                    onClick={() => handleButtonClick("github")}
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

        {/* Parallax Images */}
        <img
          className="parallax__stars object-cover object-center z-0"
          src="./parallax/1Stars.svg"
          alt="Stars"
        />
        <img
          className="parallax__planets object-cover object-center z-0"
          src="./parallax/2Planets.svg"
          alt="Planets"
        />
        <img
          className="parallax__mountain1 object-cover object-center z-0"
          src="./parallax/3Mountain.svg"
          alt="Mountain 1"
        />
        <img
          className="parallax__mountain2 object-cover object-center z-0"
          src="./parallax/4Mountain.svg"
          alt="Mountain 2"
        />
        <img
          className="parallax__crater object-cover object-center z-0"
          src="./parallax/5Crater.svg"
          alt="Crater"
        />
        <img
          className="parallax__sun object-cover object-center z-0"
          src="./parallax/6Sun.svg"
          alt="Sun"
        />
      </section>
    </>
  );
};

export default Hero;
