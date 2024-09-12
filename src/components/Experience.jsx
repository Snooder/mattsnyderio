import React, { useState } from "react";
import ExperienceIcons from "./ExperienceIcons";
import ExperienceDetails from "./ExperienceDetails";
import { experiences } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [openedExperiences, setOpenedExperiences] = useState(new Set([experiences[0].title]));

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setOpenedExperiences((prev) => new Set(prev).add(experience.title));
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full" style={{ paddingTop: '50px' }}>
      {/* Section Title */}
      <motion.div className="xs:text-left xs:px-20 sm:px-20" variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-2xl text-center xs:text-3xl xs:text-4xl sm:text-5xl`}>Experience</h2>
      </motion.div>

      {/* Parent Grid Layout */}
      <div className="flex flex-col sm:flex-row h-full mt-8 gap-4">
        {/* Left Column (Experience Cards) */}
        <div className="w-full sm:w-4/12 h-auto sm:h-full pb-6 pl-5 pr-5">
          {/* Experience Cards Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
            {experiences.slice(0, 6).map((experience, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${
                  experience === selectedExperience
                    ? "bg-gray-800 text-white border-yellow-500 shadow-[0_0_20px_gold]" // Active with gold glow
                    : openedExperiences.has(experience.title)
                    ? "bg-gray-800 text-white border-transparent shadow-md" // Gray for opened items
                    : "bg-gray-400 text-slate-600 border-transparent" // Solid light grey for inactive items
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

        {/* Right Column (Experience Details Panel) */}
        <div className="w-full sm:w-8/12 h-auto sm:h-full xs:pl-10 sm:pl-5">
          <div
            className="bg-gray-800 text-white rounded-lg p-6 shadow-2xl transition-all duration-300 ease-in-out transform h-full"
            style={{ transform: selectedExperience ? "scale(1.02)" : "scale(1)" }}
          >
            <div className="mb-6">
              <ExperienceDetails details={selectedExperience?.details} />
            </div>
            <div className="flex justify-center mt-6">
              <ExperienceIcons icons={selectedExperience?.icons} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
