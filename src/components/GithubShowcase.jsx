import React, { useState } from "react";
import { githubRepos } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const GithubShowcase = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python"); // Default to Python or any language

  const languages = Object.keys(githubRepos);
  const repos = githubRepos[selectedLanguage];

  return (
    <div className="mt-20">
      <div className="flex flex-col sm:flex-row mt-10 md:mt-20">
        {/* Language List */}
        <div className="w-full sm:w-1/4 p-5 bg-gray-800 text-white sm:rounded-lg">
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
