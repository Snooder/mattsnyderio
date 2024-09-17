import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa"; // Icons for Email and LinkedIn

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="flex flex-col justify-center items-center text-center mt-20 mb-20"> {/* Removed h-screen and added mt-20 */}
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
        <div className="text-lg sm:text-xl md:text-2xl text-white font-medium flex items-center justify-center space-x-8"> {/* Flex row layout with space between buttons */}
          {/* Email Button */}
          <a
            href="mailto:matthew.swe.snyder@gmail.com"
            className="flex items-center space-x-3 bg-gray-800 py-3 px-6 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 hover:bg-gray-700"
          >
            <FaEnvelope className="text-primary text-2xl" />
            <span className="font-bold">Email</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/mattcsnyder/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gray-800 py-3 px-6 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(255,215,0,0.8)] transition-all duration-300 hover:bg-gray-700"
          >
            <FaLinkedin className="text-primary text-2xl" />
            <span className="font-bold">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
