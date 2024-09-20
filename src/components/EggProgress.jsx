import React from "react";
import { FaEgg } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";

const EggProgress = ({ menuOpen }) => {
  const eggCount = 0; // Set the initial egg count (0 means no filled eggs)
  const eggColors = ["white", "yellow", "green", "red", "blue", "purple"]; // Define colors for each egg

  if (!menuOpen) return null; // Return nothing if the menu is not open

  return (
    <div className="flex gap-2 pr-5 z-30"> {/* Ensure eggs are in front with z-index */}
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < eggCount ? (
            <FaEgg
              size={30}
              style={{
                color: eggColors[index],
                opacity: 0.75, // Apply 75% opacity
              }}
            />
          ) : (
            <MdOutlineEgg
              size={30}
              style={{
                color: eggColors[index],
                opacity: 0.75, // Apply 75% opacity to outlined eggs as well
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
};

export default EggProgress;
