import React from 'react';
import { FaEgg } from 'react-icons/fa';

const EggAnimation = ({ eggVisible, numberOfEggsLeft }) => {
  if (!eggVisible) return null;

  return (
    <div className="egg-animation-container flex items-center space-x-2">
      <FaEgg size={30} color="yellow" />
      <span className="egg-text text-white text-lg font-bold">
        {numberOfEggsLeft} to go!
      </span>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .egg-animation-container {
          opacity: 0;
          animation: fadeIn 2s ease-in-out forwards, fadeOut 2s ease-in-out 4s; /* Fade in for 2s, then fade out starting at 4s */
          z-index: 100;
        }

        .egg-text {
          animation: fadeIn 2s ease-in-out forwards, fadeOut 2s ease-in-out 4s; /* Match text animation with egg */
        }
      `}</style>
    </div>
  );
};

export default EggAnimation;
