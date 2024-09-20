import React, { useState } from "react";
import { githubRepos } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import JiggleSpinComponent from "./JiggleSpinComponent";

const GithubShowcase = () => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const languages = Object.keys(githubRepos);
  const selectedLanguage = languages[selectedLanguageIndex];
  const repos = githubRepos[selectedLanguage];

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
        {/* Language List */}
        <div className="relative w-full p-5 bg-gray-800 text-white rounded-lg flex flex-col items-center">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full px-4 pb-8">
            {languages.map((language, index) => (
              <li
                key={index}
                className={`cursor-pointer p-3 bg-gray-700 rounded-lg transition-transform transform hover:-translate-y-1 text-center text-sm truncate ${
                  selectedLanguage === language
                    ? "text-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.8)]"
                    : "text-white hover:text-yellow-300 shadow-lg"
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

          {/* GitHub Icon and Username */}
          <div className="absolute bottom-2 right-4 flex p-2 items-center justify-end">
          
              <a
                href="https://github.com/snooder"
                target="_blank"
                rel="noopener noreferrer"
                className="github-flex items-center text-white hover:text-green-300"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl mr-2" />
              </a>
              <JiggleSpinComponent>
                <span className="font-semibold">snooder</span>
              </JiggleSpinComponent>
          </div>
        </div>

        {/* Repositories List */}
        <div className="w-full p-5 text-white sm:rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* Jiggle and Glow Effect for GitHub Link */}
      <style jsx>{`
        @keyframes jiggle {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-3px);
          }
          50% {
            transform: translateX(3px);
          }
          75% {
            transform: translateX(-3px);
          }
        }

        .github-jiggle-link:hover {
          animation: jiggle 0.5s ease-in-out infinite;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 1);
        }
      `}</style>
    </div>
  );
};

export default GithubShowcase;
