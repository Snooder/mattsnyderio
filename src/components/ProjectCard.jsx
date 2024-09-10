import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  flowchartImage // Flowchart image prop
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] grid grid-cols-1 md:grid-cols-${flowchartImage ? "3" : "2"} gap-5`} // Make it 3 columns if flowchart exists
    >
      {/* Left column for image */}
      <div className='relative w-full md:w-auto'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl'
        />
      </div>

      {/* Middle column for text */}
      <div className={`w-full px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left" : "md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>
          {name}
        </h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
          {description}
        </p>
      </div>

      {/* Right column for flowchart image if provided */}
      {flowchartImage && (
        <div className='relative w-full md:w-auto'>
          <img
            src={flowchartImage}
            alt='flowchart_image'
            className='w-full h-auto object-cover md:rounded-3xl'
          />
        </div>
      )}
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
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
