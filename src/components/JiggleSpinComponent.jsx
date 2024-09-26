import React from 'react';
import useEggHoverAnimation from './useEggHoverAnimation';
import { useEggContext } from '../context/EggContext'; // Import the Egg context

const JiggleSpinComponent = ({ children, shadowColor = "rgba(255, 215, 0, 0.8)", eggColor = "yellow" }) => {
  const {
    hovering,
    animationComplete,
    handleMouseEnter,
    handleMouseLeave,
    resetHoverState, // Add function to reset hover state
  } = useEggHoverAnimation();

  const { triggerEggAnimation } = useEggContext(); // Get the trigger function from the Egg context

  // Trigger the egg animation on completion of the spin
  React.useEffect(() => {
    if (animationComplete) {
      triggerEggAnimation({ visible: true, color: eggColor }); // Trigger egg animation
      resetHoverState(); // Reset after the animation to allow re-triggering
    }
  }, [animationComplete, triggerEggAnimation, eggColor, resetHoverState]);

  return (
    <div className="relative h-auto flex items-center">
      <div
        className={`relative h-auto ${hovering ? "jiggle-animation" : ""} ${animationComplete ? "spin-animation" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          filter: hovering ? `drop-shadow(0 0 20px ${shadowColor})` : 'none',
          transition: 'filter 0.3s ease',
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes jiggle {
          0% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          50% { transform: translateX(10px); }
          75% { transform: translateX(-10px); }
          100% { transform: translateX(0); }
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .jiggle-animation {
          animation: jiggle 0.5s ease infinite;
        }

        .spin-animation {
          animation: spin 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JiggleSpinComponent;
