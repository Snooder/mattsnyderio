import { useState, useEffect } from 'react';

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
      }, animationDuration);  // Wait for the animation duration
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