import React, { useState } from "react";
import { githubRepos } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub icon
import { faStar, faCodeBranch, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import arrows

const GithubShowcase = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0); // Track the selected language index
  const [animate, setAnimate] = useState(false); // Control animation
  const languages = Object.keys(githubRepos);
  const selectedLanguage = languages[selectedLanguageIndex];
  const repos = githubRepos[selectedLanguage];

  // Handle navigating to previous language group
  const handlePreviousLanguage = () => {
    if (selectedLanguageIndex > 0) {
      setAnimate(true); // Start animation
      setTimeout(() => {
        setSelectedLanguageIndex((prev) => prev - 1);
        setAnimate(false); // End animation after language change
      }, 300); // Animation duration
    }
  };

  // Handle navigating to next language group
  const handleNextLanguage = () => {
    if (selectedLanguageIndex < languages.length - 1) {
      setAnimate(true); // Start animation
      setTimeout(() => {
        setSelectedLanguageIndex((prev) => prev + 1);
        setAnimate(false); // End animation after language change
      }, 300); // Animation duration
    }
  };

  return (
    <div className="">
      <div className="flex flex-col md:px-20">
        {/* Language List - Floating Buttons with Left and Right Arrows */}
        <div className="w-full p-5 bg-gray-800 text-white sm:rounded-lg flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            className="p-2 w-10 h-10 bg-gray-700 shadow-lg rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            onClick={handlePreviousLanguage}
            disabled={selectedLanguageIndex === 0} // Disable if already at the start
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </button>

          {/* Languages as Floating Buttons */}
          <ul className="flex space-x-4">
            {languages.map((language, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 bg-gray-700 shadow-lg rounded-lg transition-transform transform hover:-translate-y-1 ${
                  selectedLanguage === language
                    ? "text-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                    : "text-white hover:text-yellow-300"
                }`}
                onClick={() => {
                  setAnimate(true);
                  setTimeout(() => {
                    setSelectedLanguageIndex(index);
                    setAnimate(false);
                  }, 300);
                }}
              >
                {language}
              </li>
            ))}
          </ul>

          {/* Right Arrow */}
          <button
            className="p-2 w-10 h-10 bg-gray-700 shadow-lg rounded-full hover:bg-gray-600 transition flex items-center justify-center"
            onClick={handleNextLanguage}
            disabled={selectedLanguageIndex === languages.length - 1} // Disable if already at the end
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </button>

          {/* GitHub Icon and Username - Right aligned */}
          <div className="ml-auto flex items-center justify-end">
            <a
              href="https://github.com/snooder" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-yellow-300"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
              <span className="font-semibold">snooder</span>
            </a>
          </div>
        </div>

        {/* Repositories List - Floating Cards with Bounce and Fade-in Effect */}
        <div className="w-full p-5 text-white sm:rounded-lg">
          <div className={`grid grid-cols-1 sm:grid-cols-4 gap-5`}>
            {repos.map((repo, index) => (
              <div
                key={index}
                className="mb-5 p-6 bg-gray-800 text-white font-bold shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)] transition-transform duration-500 ease-in-out rounded-lg h-64 flex flex-col justify-between transform hover:-translate-y-1"
                style={{
                  transitionDelay: `${index * 50}ms`, // Sequential delay for each card
                  transform: animate ? "translateY(-20px) scale(1.1)" : "translateY(0)", // Bounce animation
                  opacity: animate ? 0 : 1, // Fade-in effect
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out", // Adding transition for opacity and transform
                }}
              >
                <div>
                  <h3
                    className={`text-xl font-bold ${
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
                  <p className="text-sm text-gray-300">{repo.description}</p>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubShowcase;
