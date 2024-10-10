import React, { useState, useEffect } from "react";
import { FaEgg } from "react-icons/fa";


const EggAnimation = ({ color = "yellow", triggerEgg }) => {
  const [eggVisible, setEggVisible] = useState(false);

  // Function to trigger the animation
  const startAnimation = () => {
    setEggVisible(true);
    const timer = setTimeout(() => {
      setEggVisible(false); // Hide the egg after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Clean up timeout on unmount or reset
  };

  // Destructure visible and color from triggerEgg to avoid object reference issues
  const { visible, color: eggColor } = triggerEgg;

  // Run animation whenever triggerEgg's `visible` changes to true
  useEffect(() => {
    if (visible) {
      startAnimation(); // Start the animation if `visible` is true
    }
  }, [visible]); // Only trigger the effect when `visible` changes

  return (
    <>
      {eggVisible && (
        <div className="egg-animation">
          <FaEgg style={{ fontSize: "35px", color: eggColor }} />
        </div>
      )}

      <style jsx>{`
        .egg-animation {
          opacity: 0;
          transform: scale(0.5);
          display: block;
          animation: fade-in-out 4s ease-in-out forwards;
          z-index: 1000;
        }

        @keyframes fade-in-out {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(0.7);
            opacity: 1;
          }
          100% {
            transform: scale(0.7);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default EggAnimation;