import React from 'react';
import { latestExperiences } from '../data'; // Import experiences from data.js
import ExperienceIcons from './ExperienceIcons';

const GladYouAsked = (openedExperiences) => {
  if (!latestExperiences || latestExperiences.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 bg-gray-800 text-white rounded-lg p-6 shadow-2xl transition-all duration-300 ease-in-out transform max-w-[800px] mx-auto mb-6">
      {/* Header Section */}
      {/* <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Glad you asked!</h2>
        <p className="text-base sm:text-lg md:text-xl mt-2">
        I have a passion for invention and a drive to improve web experiences using modern technology. Over the past year, I’ve explored the latest tools of this generation, pushing myself to create innovative and impactful solutions. 
        </p>
      </div> */}

      {/* Render all experiences in sequence */}
      {latestExperiences.map((experience, index) => {
        const { title, description, details, finalNote, photo, icons } = experience;

        return (
          <div key={index} className="flex flex-col gap-6">
            {/* Experience Title */}
            <h3 className="lg:text-[2vw] text-[6vw]  font-semibold text-center">
              {title}
            </h3>

            {/* Description */}
            <div className="lg:text-[1.25vw] text-[5vw] text-center">
              {description}
            </div>

            {/* 50%-50% Split Section */}
            {details && photo && (
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {/* Details */}
                <p className="w-full sm:w-1/2 lg:text-[1.25vw] text-[5vw] text-center">
                  {details}
                </p>

                {/* Image Container */}
                <div className="w-full sm:w-5/12 transform transition-transform duration-300 ease-in-out hover:scale-125">
                  <img
                    src={photo}
                    alt={`${title} Photo`}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
              </div>
            )}

            {/* Final Note Section */}
            {finalNote && (
              <p className="text-base  lg:text-[1.25vw] text-[5vw] text-center italic">
                {finalNote}
              </p>
            )}

{/* Icons and Descriptions with Delayed Fade-In */}
<div
  className="grid w-2/3 mx-auto grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
>
  {icons.map((icon, iconIndex) => (
    <div
      key={iconIndex}
      className="flex flex-row items-start gap-4 fade-in-description"
      style={{ animationDelay: `${iconIndex * 0.2}s` }}
    >
      <div className="flex-shrink-0">
        <ExperienceIcons
          icons={[icon]}
          className="icon-border"
          showDescription={true}
          size={window.matchMedia("(min-width: 1024px)").matches ? 100 : 50}
        />
      </div>
    </div>
  ))}
</div>


            {/* Divider for experiences */}
            {index < latestExperiences.length - 1 && (
              <hr className="border-t border-gray-600 my-4" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GladYouAsked;
