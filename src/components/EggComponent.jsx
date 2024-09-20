import React from 'react';
import { FaEgg } from 'react-icons/fa';

const EggComponent = ({ eggVisible, eggColor, position }) => {
  if (!eggVisible) return null;

  return (
    <div
      className="egg-launch-animation"
      style={{
        position: 'absolute',
        ...position, // Allows for dynamic positioning
      }}
    >
      <FaEgg size={50} color={eggColor} />
      <style jsx>{`
        @keyframes eggLaunch {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            transform: translateY(-50%);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }

        .egg-launch-animation {
          animation: eggLaunch 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EggComponent;
