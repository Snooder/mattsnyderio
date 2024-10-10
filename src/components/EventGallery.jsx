import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { events } from "../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { logEvent } from "../analytics"; // Import logEvent from analytics.js

// Bounce variant for image animation
const bounceVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      duration: 0.5,
    },
  },
};

// Heading animation variant (similar to Experience section)
const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

const EventGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Add the useInView hook to track when the Event Gallery comes into view
  const [eventGalleryRef, eventGalleryInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Only trigger the animation once
  });

  // Handle left arrow click
  const handlePrevClick = () => {
    logEvent("Event Gallery", "Button Click", "Previous Arrow"); // Log the left arrow click
    setActiveIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
  };

  // Handle right arrow click
  const handleNextClick = () => {
    logEvent("Event Gallery", "Button Click", "Next Arrow"); // Log the right arrow click
    setActiveIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle thumbnail click
  const handleThumbnailClick = (index, eventTitle) => {
    logEvent("Event Gallery", "Thumbnail Click", eventTitle); // Log thumbnail click with event title
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto px-6 py-12 text-center md:text-left md:px-20 lg:px-40">
      {/* Animated Heading with useInView */}
      <motion.div
        ref={eventGalleryRef} // Attach the ref to track when in view
        variants={headingVariant}
        initial="hidden"
        animate={eventGalleryInView ? "show" : "hidden"} // Trigger animation only when in view
      >
        <h2 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10">
          Event Gallery
        </h2>
      </motion.div>

      {/* Thumbnails Row with Arrows */}
      <div className="flex items-center justify-center space-x-4 mb-6">
        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:flex sm:justify-center sm:space-x-4">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => handleThumbnailClick(index, event.title)} // Log thumbnail click
              className={`cursor-pointer w-24 h-24 rounded-lg overflow-hidden border-4 transition-all duration-300 ${
                activeIndex === index
                  ? "border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                  : "border-transparent"
              } hover:border-yellow-500 hover:shadow-[0_0_15px_rgba(255,215,0,0.8)]`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className="w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Event Details underneath the thumbnails */}
      <div className="text-white mb-6 text-center">
        <h3 className="text-xl font-bold">{events[activeIndex].title}</h3>
        <p className="text-md">{events[activeIndex].location}</p>
        <p className="text-sm">{events[activeIndex].date}</p>
      </div>

      {/* Main Image with Bounce Animation */}
      <motion.div
        key={activeIndex} // Ensure a new image triggers animation
        variants={bounceVariant} // Bounce animation for image
        initial="hidden"
        animate="show"
        className="relative w-full"
      >
        <img
          src={events[activeIndex].image}
          alt={events[activeIndex].title}
          className="w-full object-cover rounded-lg shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_30px_rgba(255,215,0,1)] transition-all duration-300"
        />
      </motion.div>
    </div>
  );
};

export default EventGallery;
