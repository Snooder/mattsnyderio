import React, { useState, useEffect } from "react";
import { FaEgg } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";
import { useEggContext } from "../context/EggContext"; // Import the context

const EggProgress = () => {
  const { eggsFound } = useEggContext(); // Get eggsFound from context
  const eggColors = ["white", "yellow", "green", "red", "blue", "purple"]; // Define colors for each egg
  const [startAnimation, setStartAnimation] = useState(true); // To control fade-in animation

  // Trigger the animation when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true); // Start the animation after a short delay
    }, 100); // Similar delay as the dropdown
  }, []);

  return (
    <div className="flex gap-2 pr-5 z-20">
      {/* Render eggs with delayed fade-in */}
      {eggColors.map((color, index) => (
        <span
          key={index}
          style={{
            opacity: startAnimation ? 1 : 0, // Control the opacity based on animation state
            transition: `opacity 500ms ease-in-out ${index * 100}ms`, // Staggered transition for each egg
          }}
        >
          {eggsFound.includes(color) ? (
            <FaEgg
              size={30}
              style={{
                color: color,
                opacity: 0.75, // 75% opacity for filled eggs
              }}
              aria-label={`Filled egg ${index + 1}`}
            />
          ) : (
            <MdOutlineEgg
              size={30}
              style={{
                color: color,
                opacity: 0.75, // 75% opacity for outlined eggs
              }}
              aria-label={`Empty egg ${index + 1}`}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default EggProgress;
