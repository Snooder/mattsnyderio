import React, { useState } from "react";
import { githubRepos } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Import GitHub icon

const GithubShowcase = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python"); // Default to Python or any language

  const languages = Object.keys(githubRepos);
  const repos = githubRepos[selectedLanguage];

  return (
    <div className="mt-20">
      <div className="flex flex-col md:px-20 sm:flex-row mt-10 md:mt-20">
        {/* Language List */}
        <div className="w-full sm:w-1/4 p-5 bg-gray-800 text-white sm:rounded-lg flex flex-col justify-between">
          {/* Languages */}
          <ul>
            {languages.map((language, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 ${selectedLanguage === language ? "text-yellow-400" : "text-white"} hover:text-yellow-300`}
                onClick={() => setSelectedLanguage(language)}
              >
                {language}
              </li>
            ))}
          </ul>

          {/* GitHub Icon and Username */}
          <div className="mt-5 flex items-center justify-center sm:justify-start">
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

        {/* Repositories List */}
        <div className="w-full sm:w-3/4 p-5 bg-gray-900 text-white sm:rounded-lg overflow-y-auto h-96">
          {repos.map((repo, index) => (
            <div key={index} className="mb-5">
              <h3
                className={`text-xl font-bold ${
                  repo.visibility === "Public" ? "text-blue-400 hover:text-blue-300" : "text-gray-400"
                }`}
              >
                {repo.visibility === "Public" ? (
                  <a href={`https://github.com/snooder/${repo.name}`} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                ) : (
                  repo.name
                )}
              </h3>
              <p className="text-sm text-gray-300">{repo.description}</p>
              <p className="text-xs text-gray-500">{repo.lastUpdated}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubShowcase;
