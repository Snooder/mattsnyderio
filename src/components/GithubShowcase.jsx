import React, { useState } from "react";
import { githubRepos } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar, faCodeBranch, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const GithubShowcase = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const languages = Object.keys(githubRepos);
  const selectedLanguage = languages[selectedLanguageIndex];
  const repos = githubRepos[selectedLanguage];

  // Handle navigating to next language group and wrap around at the end
  const handleNextLanguage = () => {
    setAnimate(true);
    setTimeout(() => {
      setSelectedLanguageIndex((prev) => (prev + 1) % languages.length);
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="container mx-auto px-6 py-4">
      <div className="flex flex-col md:px-20">
        {/* Language List - Floating Buttons with Right Arrow */}
        <div className="relative w-full p-5 bg-gray-800 text-white rounded-lg flex flex-col items-center">
          {/* Languages as Floating Buttons */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full px-4 pb-8">
            {languages.map((language, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 bg-gray-700 rounded-lg transition-transform transform hover:-translate-y-1 text-center text-sm truncate ${
                  selectedLanguage === language
                    ? "text-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)]" // Active tab with golden shadow
                    : "text-white hover:text-yellow-300 shadow-lg" // Non-active tab with hover effect
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

          {/* GitHub Icon and Username - Positioned at the Bottom Right of the Technology List */}
          <div className="absolute bottom-2 right-4 flex p-2 items-center justify-end">
            <a
              href="https://github.com/snooder"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> {/* Modified to show 2 columns on md devices */}
            {repos.map((repo, index) => (
              <div
                key={index}
                className="mb-5 p-6 bg-gray-800 text-white font-bold shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)] transition-transform duration-500 ease-in-out rounded-lg h-64 flex flex-col justify-between transform hover:-translate-y-1"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: animate ? "translateY(-20px) scale(1.1)" : "translateY(0)",
                  opacity: animate ? 0 : 1,
                  transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubShowcase;
