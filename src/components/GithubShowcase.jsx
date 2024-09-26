import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { githubRepos } from "../data"; // Assuming the repo data is in ../data
import { textVariant, fadeIn } from "../utils/motion"; // Assuming motion utils are in ../utils/motion

const GithubShowcase = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const languages = Object.keys(githubRepos);
  const selectedLanguage = languages[selectedLanguageIndex];
  const repos = githubRepos[selectedLanguage];

  // Animation hooks for GitHub & More title
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, // Only animate once when in view
  });

  // Handle changing the selected language
  const handleNextLanguage = () => {
    setSelectedLanguageIndex((prev) => (prev + 1) % languages.length);
  };

  return (
    <div className="container mx-auto px-6 py-4">
      {/* Motion div for the "GitHub & More" title with blue glow */}
      <motion.div
        ref={ref}
        className="xs:text-left xs:px-20 sm:px-20"
        variants={textVariant()} // Apply the text animation
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Only show animation when in view
      >
        <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(0,0,255,1)]">
          GitHub & More
        </h2>
      </motion.div>

      {/* Language List */}
      <div className="relative w-full p-5 bg-gray-800 text-white rounded-lg flex flex-col items-center mt-10">
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full px-4 pb-8">
          {languages.map((language, index) => (
            <li
              key={index}
              className={`cursor-pointer p-3 bg-gray-700 rounded-lg transition-transform transform hover:-translate-y-1 text-center text-sm truncate ${
                selectedLanguage === language
                  ? "text-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                  : "text-white hover:text-yellow-300 shadow-lg"
              }`}
              onClick={() => setSelectedLanguageIndex(index)}
            >
              {language}
            </li>
          ))}
        </ul>

        {/* GitHub Icon with Jiggle Effect and Username */}
        <div className="absolute bottom-2 right-4 flex p-2 items-center justify-end">
          <JiggleSpinComponent shadowColor="rgba(0, 0, 255, 0.8)" eggColor="blue">
            <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2 text-white" />
          </JiggleSpinComponent>
          <a
            href="https://github.com/snooder"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white"
          >
            snooder
          </a>
        </div>
      </div>

      {/* Repositories List */}
      <div className="w-full p-5 text-white sm:rounded-lg mt-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={fadeIn("up", "spring", 0, 0.75)} // Apply fade in animation to the repos
          initial="hidden"
          animate="show"
        >
          {repos.map((repo, index) => (
            <motion.div
              key={index}
              className="mb-5 p-6 bg-gray-800 text-white font-bold shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)] transition-transform duration-500 ease-in-out rounded-lg h-64 flex flex-col justify-between transform hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 50}ms`, // Staggered animation effect
              }}
            >
              <div>
                <h3
                  className={`text-xl font-bold truncate ${
                    repo.visibility === "Public"
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-gray-400"
                  }`}
                >
                  {repo.visibility === "Public" ? (
                    <a
                      href={`https://github.com/snooder/${repo.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  ) : (
                    repo.name
                  )}
                </h3>
                <p className="text-sm text-gray-300 pt-2">
                  {repo.description}
                </p>
              </div>

              {/* GitHub Stats Icons */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <span className="text-sm text-gray-300">{repo.stars}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCodeBranch} className="text-gray-300" />
                  <span className="text-sm text-gray-300">{repo.forks}</span>
                </div>
                <p className="text-xs text-gray-500">{repo.lastUpdated}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GithubShowcase;
