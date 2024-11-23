import React, { useEffect } from 'react';
import ExperienceIcons from './ExperienceIcons';
import GladYouAsked from './GladYouAsked'; // Import the new component

const ExperienceDetailPanel = ({ selectedExperience, openedExperiences}) => {
  useEffect(() => {
    // Trigger a re-render when the selected experience changes
  }, [selectedExperience]);

  return (
    <div className="ml-5 mr-5">
      {/* Render "Glad you asked!" Section at the Top */}
      {selectedExperience.title === 'Latest' && <GladYouAsked />}

      {/* Default Experience Details */}
      {selectedExperience.title !== 'Latest' && (
        <div className="bg-gray-800 text-white rounded-lg p-6 shadow-2xl transition-all duration-300 ease-in-out transform h-full max-w-[800px] mx-auto">
          {/* Flex Container for Logo and Summary Section */}
          <div className="flex gap-4 mb-6 items-start">
            {/* Logo Section */}
            {selectedExperience.companyLogo && (
              <div className="w-[120px] h-[120px] flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  key={selectedExperience.companyLogo} // Ensures re-animation
                  src={selectedExperience.companyLogo}
                  alt={`${selectedExperience.company_name} Logo`}
                  className="object-contain company-logo-animation"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            )}

            {/* Summary Section */}
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold">{selectedExperience.title}</h3>
              <p className="text-md sm:text-lg">
                {selectedExperience.company_name} | {selectedExperience.date}
              </p>
              <p className="text-sm sm:text-md">{`${selectedExperience.location}`}</p>
            </div>
          </div>

          {/* Icons and Descriptions with Delayed Fade-In */}
          <div className="flex flex-col gap-4" key={selectedExperience.title}>
            {selectedExperience.icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-row items-start gap-4 fade-in-description"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <ExperienceIcons icons={[icon]} className="icon-border" />
                </div>

                {/* Description */}
                <div className="flex-grow">
                  <p className="text-sm sm:text-base md:text-lg">{icon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetailPanel;
