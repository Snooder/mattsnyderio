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

  // Universal click handler to track button and link clicks
  const handleLinkClick = (e) => {
    const platform = e.currentTarget.getAttribute("data-platform") || e.currentTarget.innerText;
    logEvent("Contact", "Click", platform); // Log the click with dynamic label
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
        <h3 className={`${styles.sectionText} text-[6vw] md:text-[2vw] font-bold mb-6`}>
          Want to get in touch?
        </h3>

        {/* Contact Information with Icons in a Row */}
        <div className="text-[6vw] md:text-[2vw] text-white font-medium flex items-center justify-center space-x-2 md:space-x-8 mb-8">
          {/* Email Button */}
          <a
            href="mailto:matthew.swe.snyder@gmail.com"
            data-platform="Email Button"
            onClick={handleLinkClick} // Use the universal click handler
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
            data-platform="LinkedIn Button"
            onClick={handleLinkClick} // Use the universal click handler
            className="flex items-center space-x-3 bg-gradient-to-r from-blue-800 to-blue-600 py-3 px-6 rounded-full shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 hover:from-blue-600 hover:to-blue-400"
          >
            <FaLinkedin className="text-white text-2xl" />
            <span className="font-bold">LinkedIn</span>
          </a>
        </div>

        {/* Smaller Links Row with Full Text */}
        <div className="text-gray-400 font-semibold flex flex-col lg:flex-row items-center justify-center space-x-6">
          {/* LinkedIn Small Link */}
          <a
            href="https://www.linkedin.com/in/mattcsnyder/"
            target="_blank"
            rel="noopener noreferrer"
            data-platform="LinkedIn Small"
            onClick={handleLinkClick} // Use the universal click handler
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaLinkedin className="text-[5vw] lg:text-[2vw]" />
            <span className="text-[5vw] lg:text-[2vw]">/mattcsnyder</span> {/* Displaying the LinkedIn profile handle */}
          </a>

          {/* GitHub Small Link */}
          <a
            href="https://github.com/snooder"
            target="_blank"
            rel="noopener noreferrer"
            data-platform="GitHub Small"
            onClick={handleLinkClick} // Use the universal click handler
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaGithub className="text-[5vw] lg:text-[2vw]" />
            <span className="text-[5vw] lg:text-[2vw]">/snooder</span> {/* Displaying the GitHub username */}
          </a>

          {/* Email Small Link */}
          <a
            href="mailto:matthew.swe.snyder@gmail.com"
            data-platform="Email Small"
            onClick={handleLinkClick} // Use the universal click handler
            className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300"
          >
            <FaEnvelope className="text-[5vw] lg:text-[2vw]" />
            <span className="text-[5vw] lg:text-[2vw]">matthew.swe.snyder@gmail.com</span> {/* Displaying the full email address */}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
