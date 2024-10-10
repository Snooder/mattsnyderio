import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for Email, LinkedIn, and GitHub
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { logEvent } from "../analytics"; // Import logEvent from analytics.js

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  // Handle click tracking for each link
  const handleLinkClick = (platform) => {
    logEvent("Contact", "Click", platform); // Track each link click
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mt-20 mb-20">
      {/* Motion Wrapper for Animations */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", duration: 1, delay: 0.2 },
          },
        }}
        className="w-full"
      >
        {/* Heading */}
        <h3 className={`${styles.sectionText} text-2xl sm:text-4xl md:text-5xl font-bold mb-6`}>
          Want to get in touch?
        </h3>

        {/* Contact Information with Icons in a Row */}
        <div className="text-lg sm:text-xl md:text-2xl text-white font-medium flex items-center justify-center space-x-8 mb-8">
          {/* Email Button */}
          <a
            href="mailto:matthew.swe.snyder@gmail.com"
            onClick={() => handleLinkClick("Email")} // Track Email click
            className="flex items-center space-x-3 bg-gradient-to-r from-gray-900 to-gray-700 py-3 px-6 rounded-full shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 hover:from-yellow-600 hover:to-yellow-500"
          >
            <FaEnvelope className="text-white text-2xl" />
            <span className="font-bold">Email</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/mattcsnyder/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("LinkedIn")} // Track LinkedIn click
            className="flex items-center space-x-3 bg-gradient-to-r from-blue-800 to-blue-600 py-3 px-6 rounded-full shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 hover:from-blue-600 hover:to-blue-400"
          >
            <FaLinkedin className="text-white text-2xl" />
            <span className="font-bold">LinkedIn</span>
          </a>
        </div>

        {/* Smaller Links Row with Full Text */}
        <div className="text-sm sm:text-base md:text-lg text-gray-400 font-semibold flex items-center justify-center space-x-6">
          {/* LinkedIn Small Link */}
          <a
            href="https://www.linkedin.com/in/mattcsnyder/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("LinkedIn")}
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaLinkedin className="text-xl" />
            <span>/mattcsnyder</span> {/* Displaying the LinkedIn profile handle */}
          </a>

          {/* GitHub Small Link */}
          <a
            href="https://github.com/snooder"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("GitHub")}
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            <span>/snooder</span> {/* Displaying the GitHub username */}
          </a>

          {/* Email Small Link */}
          <a
            href="mailto:matthew.swe.snyder@gmail.com"
            onClick={() => handleLinkClick("Email")}
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaEnvelope className="text-xl" />
            <span>matthew.swe.snyder@gmail.com</span> {/* Displaying the full email address */}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
