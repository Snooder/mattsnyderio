import React, { useEffect } from 'react';
import ExperienceIcons from './ExperienceIcons';
import JiggleSpinComponent from './JiggleSpinComponent';

const ExperienceDetailPanel = ({ selectedExperience }) => {
  useEffect(() => {
    // Trigger a re-render when the selected experience changes
  }, [selectedExperience]);

  return (
    <div className="ml-5 mr-5 bg-gray-800 text-white rounded-lg p-6 shadow-2xl transition-all duration-300 ease-in-out transform h-full max-w-[800px] mx-auto">
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
      <div className="flex flex-col gap-4" key={selectedExperience.title}> {/* Add key to trigger re-render */}
        {selectedExperience.icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-row items-start gap-4 fade-in-description"
            style={{ animationDelay: `${index * 0.2}s` }} // Apply delay based on index
          >
            {/* Conditionally render JiggleSpinComponent for Shopify */}
            <div className="flex-shrink-0">
              {icon.label === 'Shopify' ? (
                <JiggleSpinComponent color="green" eggColor="green" >
                  <ExperienceIcons icons={[icon]} className="icon-border" />
                </JiggleSpinComponent>
              ) : (
                <ExperienceIcons icons={[icon]} className="icon-border" />
              )}
            </div>

            {/* Description */}
            <div className="flex-grow">
              <p className="text-sm sm:text-base md:text-lg">{icon.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .company-logo-animation {
          transform: scale(0); /* Start at 0 scale */
          animation: popOut 1s forwards; /* Apply pop-out animation */
        }

        .fade-in-description {
          opacity: 0;
          animation: fadeIn 1s forwards ease-in-out; /* Add fade-in effect */
        }

        @keyframes popOut {
          0% {
            transform: scale(0); /* Start small */
            opacity: 0; /* Start with hidden opacity */
          }
          100% {
            transform: scale(1); /* End with full size */
            opacity: 1; /* Full visibility */
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0; /* Start with hidden */
            transform: translateY(20px); /* Start slightly below */
          }
          100% {
            opacity: 1; /* Fully visible */
            transform: translateY(0); /* Move to original position */
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceDetailPanel;
