import React from "react";
import { FaEgg } from "react-icons/fa";
import { MdOutlineEgg } from "react-icons/md";
import { logEvent } from "../analytics"; // Import logEvent for tracking clicks

// Helper function to convert CSS color to RGB
function getRgbColor(color) {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = color;
  document.body.appendChild(tempDiv);
  const rgbColor = getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);
  const rgbValues = rgbColor.match(/\d+/g);
  return rgbValues ? rgbValues.join(", ") : "0, 0, 0";
}

const ProgressEgg = ({ color, tooltip, found, startAnimation }) => {
  // Handle tooltip link click logging
  const handleTooltipClick = (label) => {
    logEvent("Egg Hunt", "Click", `Tooltip - ${label}`);
  };

  return (
    <div
      className="egg-container"
      style={{
        opacity: startAnimation ? 1 : 0,
        transition: `opacity 500ms ease-in-out`,
      }}
    >
      {found ? (
        <FaEgg
          size={50}
          style={{ color: color, opacity: 0.75 }}
          aria-label={`Filled egg`}
        />
      ) : (
        <MdOutlineEgg
          size={50}
          style={{ color: color, opacity: 0.75 }}
          aria-label={`Empty egg`}
        />
      )}

      {/* Tooltip */}
      {tooltip.label === "Mystery" ? (
        <span
          className="tooltip"
          style={{
            backgroundColor: `rgba(${getRgbColor(color)}, 0.5)`,
          }}
        >
          {tooltip.label}
        </span>
      ) : (
        <a
          href={tooltip.url}
          className="tooltip-link"
          style={{
            backgroundColor: `rgba(${getRgbColor(color)}, 0.5)`,
          }}
          onClick={() => handleTooltipClick(tooltip.label)} // Log tooltip link click
        >
          {tooltip.label}
        </a>
      )}

      {/* CSS styling */}
      <style jsx>{`
        .egg-container {
          position: relative;
          display: inline-block;
          transition: transform 0.3s ease-in-out;
        }

        /* Egg grows larger on hover */
        .egg-container:hover {
          transform: scale(1.2);
        }

        /* Tooltip styling */
        .tooltip,
        .tooltip-link {
          visibility: hidden;
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease-in-out, visibility 0s 0.3s;
        }

        /* Tooltip link styling */
        .tooltip-link {
          text-decoration: none; /* Remove underline from link */
        }

        /* Show tooltip on hover */
        .egg-container:hover .tooltip,
        .egg-container:hover .tooltip-link {
          visibility: visible;
          opacity: 1;
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ProgressEgg;
