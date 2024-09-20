import React from 'react';
import { FaEgg } from 'react-icons/fa';

const EggAnimation = ({ eggVisible }) => {
  if (!eggVisible) return null;

  return (
    <div className="egg-animation">
      <FaEgg size={50} color="yellow" />
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-500px); /* Adjust the value based on how far left you want the egg to move */
          }
        }

        .egg-animation {
          position: absolute;
          top: 10px; /* Adjust based on where the top of your row is */
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          animation: fadeIn 2s ease-in-out forwards, slideLeft 3s ease-in-out 2s; /* Start sliding after 2 seconds of fading in */
        }
      `}</style>
    </div>
  );
};

export default EggAnimation;
