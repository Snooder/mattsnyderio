import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import GithubShowcase from "./GithubShowcase";

const Portfolio = () => {
  const [githubRef, githubInView] = useInView({
    threshold: 0.1, // 10% in view to trigger animation
    triggerOnce: true, // Trigger animation once
  });

  const [designsRef, designsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="text-center">
      {/* GitHub & More Section */}
      <motion.div
        className="xs:text-left xs:px-20 sm:px-20"
        variants={textVariant()}
        initial="hidden"
        animate={githubInView ? "show" : "hidden"}
        ref={githubRef}
      >
        <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold">
          GitHub & More
        </h2>
      </motion.div>

      {/* GitHub Showcase */}
      <div id="github" className="relative z-30 bg-primary mt-10">
        <GithubShowcase />
      </div>

    </div>
  );
};

export default SectionWrapper(Portfolio, "Projects");
