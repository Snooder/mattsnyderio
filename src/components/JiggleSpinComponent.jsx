import React from 'react';
import useEggHoverAnimation from './useEggHoverAnimation';
import EggComponent from './EggComponent';

const JiggleSpinComponent = ({ children, shadowColor = "rgba(255, 215, 0, 0.8)", eggColor = "yellow" }) => {
  const {
    hovering,
    eggVisible,
    handleMouseEnter,
    handleMouseLeave,
  } = useEggHoverAnimation();

  return (
    <div className="relative h-auto flex items-center">
      <div
        className={`relative h-auto ${hovering ? "jiggle-animation" : ""}`} // Apply jiggle animation
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ filter: hovering ? `drop-shadow(0 0 20px ${shadowColor})` : 'none' }} // Dynamic shadow color
      >
        {children}
      </div>

      {/* Egg animation */}
      {eggVisible && (
        <EggComponent
          eggVisible={eggVisible}
          eggColor={eggColor}
        />
      )}

      <style jsx>{`
        @keyframes jiggle-egg {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          50% {
            transform: translateX(0px);
          }
          75% {
            transform: translateX(-10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .jiggle-animation {
          animation: jiggle-egg 0.5s ease 2; /* Jiggle for 3 seconds (0.5s x 6) */
        }
      `}</style>
    </div>
  );
};

export default JiggleSpinComponent;
