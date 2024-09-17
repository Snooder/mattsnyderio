import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import GithubShowcase from "./GithubShowcase";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  flowchartImage, // Flowchart image for the flip
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0; // Define the isEven variable based on the index

  // Use Tailwind for responsive flex direction
  const flexDirectionClass = isEven
    ? "flex-col md:flex-row" // Stack on small screens, row on larger
    : "flex-col md:flex-row-reverse"; // Stack on small, row-reverse on larger

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`flex ${flexDirectionClass} gap-6 w-full max-w-7xl mx-auto p-4 md:p-6`} // Added padding for the project card
      onMouseEnter={() => flowchartImage && setIsFlipped(true)} // Only flip if flowchart exists
      onMouseLeave={() => setIsFlipped(false)} // Reset on mouse leave
    >
      {/* Image Column */}
      <div className="w-full md:w-2/3 h-64 md:h-96 perspective-1000 relative">
        <div
          className={`w-full h-full absolute transition-transform duration-600`}
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front side (project image) */}
          <div
            className="w-full h-full bg-white backface-hidden rounded-lg shadow-md"
            style={{
              backfaceVisibility: "hidden",
              position: "absolute", // Ensure both sides stack in the same position
              zIndex: isFlipped ? 0 : 1, // Front should be visible when not flipped
            }}
          >
            <img
              src={image}
              alt={`${name} project image`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Back side (flowchart image), only visible if flowchartImage exists */}
          {flowchartImage && (
            <div
              className="w-full h-full bg-gray-200 absolute top-0 left-0 rounded-lg shadow-md"
              style={{
                backfaceVisibility: "hidden",
                zIndex: isFlipped ? 1 : 0, // Back should be visible when flipped
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={flowchartImage}
                alt={`${name} flowchart`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      {/* Text Column */}
      <div className="w-full md:w-1/3 flex flex-col justify-center">
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  // Hook for GitHub section inView animation
  const [githubRef, githubInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Trigger the animation only once
  });

  // Hook for Designs & Documents section inView animation
  const [designsRef, designsInView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Trigger the animation only once
  });

  return (
    <div className="text-center p-6 md:p-12"> {/* Added padding for the entire portfolio section */}
      {/* Motion div for the "GitHub & More" heading */}
      <motion.div
        ref={githubRef} // Reference to trigger animation when in view
        className="xs:text-left xs:px-20 sm:px-20 mb-8" // Added bottom margin
        variants={textVariant()} // Apply text variant animation
        initial="hidden"
        animate={githubInView ? "show" : "hidden"} // Show when in view
      >
        <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold">
          GitHub & More
        </h2>
      </motion.div>

      {/* GitHub Showcase */}
      <div className="relative z-30 bg-primary mt-10">
        <GithubShowcase />
      </div>

      {/* Motion div for the "Designs & Documents" heading */}
      <motion.div
        ref={designsRef} // Reference to trigger animation when in view
        className="xs:text-left xs:px-20 sm:px-20 mt-10 pt-10 mb-8" // Added bottom margin
        variants={textVariant()} // Apply text variant animation
        initial="hidden"
        animate={designsInView ? "show" : "hidden"} // Show when in view
      >
        <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold">
          Designs & Documents
        </h2>
      </motion.div>

      {/* Portfolio Projects Section */}
      <div className="mt-10 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            image={project.image}
            flowchartImage={project.flowchartImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "Projects");
