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

  const cardContainerStyle = {
    display: "flex",
    flexDirection: isEven ? "row" : "row-reverse", // Alternate layout based on index
    gap: "40px", // Increase gap between columns
    width: "100%",
    maxWidth: "1600px", // Increased width of the card container
    margin: "0 auto", // Center the container
  };

  const imageContainerStyle = {
    width: "65%", // Increased width for images
    height: "400px", // Larger image height
    perspective: "1000px",
    position: "relative",
  };

  const textContainerStyle = {
    width: "35%", // Reduced text column width
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: isEven ? "20px" : "0",
    paddingRight: isEven ? "0" : "20px",
  };

  const cardInnerStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: isFlipped && flowchartImage ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const commonSideStyle = {
    width: "100%",
    height: "100%",
    position: "absolute",
    backfaceVisibility: "hidden",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const frontStyle = {
    ...commonSideStyle,
    backgroundColor: "white",
  };

  const backStyle = {
    ...commonSideStyle,
    backgroundColor: "#f8f9fa",
    transform: "rotateY(180deg)",
  };

  const cardImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "15px",
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      style={cardContainerStyle} // Apply flexbox container style
      onMouseEnter={() => flowchartImage && setIsFlipped(true)} // Only flip if flowchart exists
      onMouseLeave={() => setIsFlipped(false)} // Reset on mouse leave
    >
      {/* Image Column */}
      <div style={imageContainerStyle}>
        <div style={cardInnerStyle}>
          {/* Front side (project image) */}
          <div style={frontStyle}>
            <img src={image} alt="project_image" style={cardImageStyle} />
          </div>

          {/* Back side (flowchart image), only visible if flowchartImage exists */}
          {flowchartImage && (
            <div style={backStyle}>
              <img src={flowchartImage} alt="flowchart_image" style={cardImageStyle} />
            </div>
          )}
        </div>
      </div>

      {/* Text Column */}
      <div style={textContainerStyle}>
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight">
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
        <h2 className={`${styles.sectionText}`}>Recent Projects</h2>
      </motion.div>

      <div id="github" className='relative z-30 bg-primary'>
            <GithubShowcase />
      </div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            flowchartImage={project.flowchartImage} // Pass flowchartImage if available
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
