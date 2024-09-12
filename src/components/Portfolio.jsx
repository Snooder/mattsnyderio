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
      className={`flex ${flexDirectionClass} gap-6 w-full max-w-7xl mx-auto`} // Tailwind-based layout
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
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>Recent Projects</h2>
      </motion.div>

      <div id="github" className="relative z-30 bg-primary">
        <GithubShowcase />
      </div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            image={project.image}
            flowchartImage={project.flowchartImage} // Pass flowchartImage if available
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "Projects");
