import React from "react";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { mattsnyderio } from "../assets"; // Ensure the path to your image is correct
import { logEvent } from "../analytics"; // Import logEvent from analytics.js
import { HashLink as Link } from "react-router-hash-link"; // For smooth scrolling

const HeroButtons = () => {
  // Handle Button Click Navigation and Analytics
  const handleButtonClick = (section) => {
    logEvent("Hero Section", "Click", section); // Log event to analytics
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
      {/* Left Column of Buttons */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => handleButtonClick("experience")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Experience
        </button>
        <button
          onClick={() => handleButtonClick("designs")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Designs
        </button>
      </div>

      {/* Center Image with JiggleSpinComponent */}
      <div className="flex justify-center">
        <JiggleSpinComponent>
          <img
            src={mattsnyderio}
            alt="Center Image"
            className="w-96 h-auto"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
          />
        </JiggleSpinComponent>
      </div>

      {/* Right Column of Buttons */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => handleButtonClick("github")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          GitHub
        </button>
        <button
          onClick={() => handleButtonClick("events")}
          className="bg-opacity-80 bg-gray-800 text-white font-bold py-8 px-4 rounded-lg hover:bg-gray-700 transition shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)]"
        >
          Events
        </button>
      </div>
    </div>
  );
};

export default HeroButtons;
