import React, { useState } from "react";
import { experiences } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { logEvent } from "../analytics"; // Import the logEvent function
import ExperienceDetailPanel from './ExperienceDetailPanel'; // Import the new component

const Experience = () => {
  // Start with the Flatiron Health experience selected
  const initialExperience = experiences.find(
    (exp) => exp.company_name === "Flatiron Health"
  );
  const [selectedExperience, setSelectedExperience] = useState(initialExperience);
  const [openedExperiences, setOpenedExperiences] = useState(new Set([initialExperience.title]));

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setOpenedExperiences((prev) => new Set(prev).add(experience.title));

    // Log the experience click event
    logEvent("Experience", "Select", experience.title);
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full" style={{ paddingTop: '50px' }}>
      {/* Section Title with motion animation and permanent glowing shadow */}
      <motion.div
        ref={ref}
        className="xs:text-left xs:px-20 sm:px-20"

      >
        <h2
          className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]" 
        >
          Experience
        </h2>
      </motion.div>

      {/* Parent Grid Layout */}
      <div className="flex flex-col sm:flex-row h-full mt-8 gap-4">
        {/* Left Column */}
        <div className="w-full sm:w-4/12 h-auto sm:h-full pb-6 pl-5 pr-5 flex flex-col gap-4">
          {/* "What are you building now?" Section */}
          <div
            className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${
              "Latest" === selectedExperience.title
                ? 'bg-green-800 text-yellow-400 border-orange-500 shadow-[0_0_20px_orange]'
                : openedExperiences.has("Latest")
                ? 'bg-green-800 text-orange-500 border-orange-500'
                : 'bg-gray-600 text-gray-300 border-transparent'
            } hover:text-orange-400 hover:border-yellow-500 hover:shadow-[0_0_20px_orange]`}
            onClick={() =>
              handleSelectExperience({ title: "Latest", company_name: "", date: "" })
            }
            
          >
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-center">
              What's Matt building now?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-center mt-2">
              October 2023 - Present
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${
                  experience === selectedExperience
                    ? 'bg-gray-800 text-white border-yellow-500 shadow-[0_0_20px_gold]'
                    : openedExperiences.has(experience.title)
                    ? 'bg-gray-800 text-white border-transparent shadow-md'
                    : 'bg-gray-600 text-slate-200 border-transparent'
                } hover:text-white hover:border-yellow-500 hover:shadow-[0_0_20px_gold]`}
                onClick={() => handleSelectExperience(experience)}
              >
                <h3 className="text-[8px] xs:text-xs sm:text-base">{experience.title}</h3>
                <p className="text-[8px] xs:text-xs sm:text-base">{experience.company_name}</p>
                <p className="text-[8px] xs:text-xs sm:text-base">{experience.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[100vw] sm:w-8/12 h-auto sm:h-full xs:pl-10 sm:pl-0 sm:pr-5">
          <ExperienceDetailPanel selectedExperience={selectedExperience} openedExperiences={openedExperiences}/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
