import React, { useState, useEffect } from "react";
import { useEggContext } from "../context/EggContext"; // Use the egg context
import ProgressEgg from "./progressEgg";
import ProgressButton from "./progressButton";
import ProgressVideo from "./progressVideo";

const ProgressEggHunt = () => {
  const { eggsFound } = useEggContext(); // Get eggs found from context
  const eggColors = ["white", "yellow", "green", "red", "blue", "purple"];
  const tooltips = [
    { label: "Mystery", url: "" },
    { label: "Hero", url: "#hero" }, 
    { label: "Experience", url: "#experience" }, 
    { label: "SaaS", url: "#saas" }, 
    { label: "Github", url: "#github" }, 
    { label: "Events", url: "#events" },
  ];

  const [startAnimation, setStartAnimation] = useState(false);
  const [showPrizeButton, setShowPrizeButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoStart = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  // Check if all eggs are found
  const allEggsFound = eggsFound.length === eggColors.length;

  useEffect(() => {
    if (allEggsFound) {
      setShowPrizeButton(true);
    }
  }, [allEggsFound]);

  // Start the animation with a delay
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 100);
  }, []);

  // Handle closing the video after it fades out
  const handleCloseVideo = () => {
    setShowVideo(false);
    handleVideoEnd(); // Ensure the video end state is triggered when the video closes
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-20 mb-20 space-y-6">
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
          Find all the eggs?
        </h3>

        {/* Prize Button */}
        {showPrizeButton && (
          <ProgressButton
            onClick={() => {
              setShowVideo(true);
              handleVideoStart(); // Trigger video start when button is clicked
            }}
            isVideoPlaying={isVideoPlaying}
          />
        )}

        {/* Render all eggs */}
        <div className="flex gap-4">
          {eggColors.map((color, index) => (
            <ProgressEgg
              key={index}
              color={color}
              tooltip={tooltips[index]}
              found={eggsFound.includes(color)}
              startAnimation={startAnimation}
            />
          ))}
        </div>
      </div>

      {/* Video Overlay (Moved outside the main container) */}
      {showVideo && (
        <ProgressVideo
          onClose={handleCloseVideo}
          onVideoStart={handleVideoStart}
          onVideoEnd={handleVideoEnd}
        />
      )}
    </>
  );
};

export default ProgressEggHunt;
