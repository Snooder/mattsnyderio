import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { textVariant } from "../utils/motion";
import { recentProjects } from "../data";
import { SectionWrapper } from "../hoc";
import JiggleSpinComponent from "./JiggleSpinComponent"; // Import JiggleSpinComponent

// ProjectCard Component for individual recent projects
const ProjectCard = ({
  index,
  name,
  description,
  image,
  flowchartImage,
}) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setIsFlipped(false); // Ensure it's not flipped when not in view
    }
  }, [inView]);

  const flexDirectionClass = index % 2 === 0
    ? "flex-col md:flex-row"
    : "flex-col md:flex-row-reverse";

  return (
    <motion.div
      ref={ref}
      animate={inView ? 'show' : 'hidden'}
      transition={{ duration: 0.75 }}
      className={`flex ${flexDirectionClass} gap-6 w-full max-w-7xl mx-auto p-4 md:p-6`}
      onMouseEnter={() => flowchartImage && setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
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
            className="w-full h-full bg-white backface-hidden rounded-md border border-white border-opacity-10 border-2 shadow-md"
            style={{
              backfaceVisibility: "hidden",
              position: "absolute",
              zIndex: isFlipped ? 0 : 1,
            }}
          >
            <img
              src={image}
              alt={`${name} project image`}
              className="w-full h-full object-fill rounded-md"
            ></img>
          </div>

          {/* Back side (flowchart image) */}
          {flowchartImage && (
            <div
              className="w-full h-full bg-gray-200 absolute top-0 left-0 rounded-md shadow-md"
              style={{
                backfaceVisibility: "hidden",
                zIndex: isFlipped ? 1 : 0,
                transform: "rotateY(180deg)",
              }}
            >
              <img
                src={flowchartImage}
                alt={`${name} flowchart`}
                className="w-full h-full object-fill rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Text Column */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        {name === "Shopify Paywall Solution" ? (
          <JiggleSpinComponent shadowColor="rgba(255, 0, 0, 1)" eggColor="red">
            <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-md xl:text-md md:text-4xl leading-tight text-center">
              {name}
            </h3>
          </JiggleSpinComponent>
        ) : (
          <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-md xl:text-md md:text-4xl leading-tight text-center">
            {name}
          </h3>
        )}
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg md:text-xl text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  const [projectsRef, projectInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="text-center p-6 md:p-12">
      {/* SaaS Products Section */}
      <motion.div
        ref={projectsRef}
        variants={textVariant()}
        initial="hidden"
        animate={projectInView ? "show" : "hidden"}
        className="xs:text-left xs:px-20 sm:px-20 mb-8"
      >
        <h2 className="text-md text-center xs:text-md sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_30px_rgba(255,0,0,1)]">
          Recent Projects
        </h2>
      </motion.div>

      {/* SaaS Product Cards */}
      <div className="mt-10 flex flex-col gap-10 md:gap-20">
        {recentProjects.map((product, index) => (
          <ProjectCard
            key={`projects-${index}`}
            index={index}
            name={product.name}
            description={product.description}
            image={product.image}
            flowchartImage={product.flowchartImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(RecentProjects, "RecentProjects");
