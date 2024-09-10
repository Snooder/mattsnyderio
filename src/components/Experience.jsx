import React, { useState } from "react";
import ExperienceIcons from "./ExperienceIcons";
import ExperienceDetails from "./ExperienceDetails";
import { experiences } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion"; // Assuming textVariant is imported here
import { styles } from "../styles";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]); // Default to first experience
  const [openedExperiences, setOpenedExperiences] = useState(new Set([experiences[0].title])); // Mark first experience as opened by default

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setOpenedExperiences((prev) => new Set(prev).add(experience.title)); // Mark the experience as opened
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full space-x-6" style={{ paddingTop: '50px' }}>
      {/* Section Title */}
      <motion.div className="md:text-left md:px-20 lg:px-20 "variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Experience</h2>
      </motion.div>

      <div className="flex max-w-7xl mx-auto h-full space-x-6">
        {/* Left Column (1/3 of the space) */}
        <div className="flex flex-col w-1/3 h-full overflow-y-auto pb-10 space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg m-5 ${
                experience === selectedExperience
                  ? "bg-gray-800 text-white border-yellow-500 shadow-[0_0_20px_gold]" // Active with gold glow
                  : openedExperiences.has(experience.title)
                  ? "bg-gray-800 text-white border-transparent shadow-md" // Gray for opened items
                  : "bg-gray-400 text-slate-600 border-transparent" // Solid light grey for inactive items
              } hover:text-white hover:border-yellow-500 hover:shadow-[0_0_20px_gold]`} // Add hover gold glow
              onClick={() => handleSelectExperience(experience)}
              style={{ marginBottom: '20px' }} // Ensure equal margin spacing at the bottom of each list item
            >
              <h3 className="text-lg font-bold">{experience.title}</h3>
              <p className="text-sm">{experience.company_name}</p>
              <p className="text-sm">{experience.date}</p>
            </div>
          ))}
        </div>

        {/* Right Column (2/3 of the space) */}
        <div className="w-2/3 pl-10">
          <div
            className="bg-gray-800 text-white rounded-lg p-10 shadow-2xl transition-all duration-300 ease-in-out transform"
            style={{ transform: selectedExperience ? "scale(1.02)" : "scale(1)" }} // Subtle scale effect
          >
            <div className="mb-6">
              {/* Pass the selected experience details */}
              <ExperienceDetails details={selectedExperience?.details} />
            </div>

            {/* Centralized icons at the bottom */}
            <div className="flex justify-center mt-6">
              {/* Pass the selected experience icons */}
              <ExperienceIcons icons={selectedExperience?.icons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
