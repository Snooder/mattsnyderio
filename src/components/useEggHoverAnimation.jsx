import { useState, useEffect } from "react";
import { logEvent } from "../analytics"; // Import the logEvent function

const useEggHoverAnimation = (animationDuration = 2000) => {
  const [hovering, setHovering] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Handle mouse enter
  const handleMouseEnter = () => {
    setHovering(true);
    setAnimationComplete(false);  // Reset animation complete state
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHovering(false);
    setAnimationComplete(false);  // Reset animation complete state on leave
  };

  // Effect to trigger the animation after hover
  useEffect(() => {
    let timer;
    if (hovering) {
      timer = setTimeout(() => {
        setAnimationComplete(true);
        setEggVisible(true);

        // Track egg visibility event when it becomes visible
        logEvent("Egg Animation", "Egg Visible", "Egg became visible after animation");
      }, animationDuration); // Triggered after the specified animation duration (4 seconds)
    }

    return () => clearTimeout(timer);
  }, [hovering, animationDuration]);

  // Reset function to allow re-triggering
  const resetHoverState = () => {
    setAnimationComplete(false);
    setHovering(false); // Ensure hovering is reset
  };

  return {
    hovering,
    animationComplete,
    handleMouseEnter,
    handleMouseLeave,
    resetHoverState, // Return the reset function to be used after animation
  };
};

export default useEggHoverAnimation;
