import { useState, useEffect } from "react";
import { logEvent } from "../analytics"; // Import the logEvent function

const useEggHoverAnimation = (animationDuration = 4000) => {
  const [hovering, setHovering] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [eggVisible, setEggVisible] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
    setAnimationComplete(false);
    setEggVisible(false);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setAnimationComplete(false);
  };

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

  return {
    hovering,
    animationComplete,
    eggVisible,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useEggHoverAnimation;
