import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { textVariant } from "../utils/motion";
import { saasProducts } from "../data";
import { SectionWrapper } from "../hoc";
import JiggleSpinComponent from "./JiggleSpinComponent"; // Import JiggleSpinComponent

// ProjectCard Component for individual SaaS projects
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
            className="w-full h-full bg-white backface-hidden rounded-lg shadow-md"
            style={{
              backfaceVisibility: "hidden",
              position: "absolute",
              zIndex: isFlipped ? 0 : 1,
            }}
          >
            <img
              src={image}
              alt={`${name} project image`}
              className="w-full h-full object-cover rounded-lg"
            ></img>
          </div>

          {/* Back side (flowchart image) */}
          {flowchartImage && (
            <div
              className="w-full h-full bg-gray-200 absolute top-0 left-0 rounded-lg shadow-md"
              style={{
                backfaceVisibility: "hidden",
                zIndex: isFlipped ? 1 : 0,
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
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center">
        {name === "Shopify Paywall Solution" ? (
          <JiggleSpinComponent shadowColor="rgba(255, 0, 0, 1)" eggColor="red">
            <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight text-center">
              {name}
            </h3>
          </JiggleSpinComponent>
        ) : (
          <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight text-center">
            {name}
          </h3>
        )}
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const SaaSProducts = () => {
  const [saasRef, saasInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="text-center p-6 md:p-12">
      {/* SaaS Products Section */}
      <motion.div
        ref={saasRef}
        variants={textVariant()}
        initial="hidden"
        animate={saasInView ? "show" : "hidden"}
        className="xs:text-left xs:px-20 sm:px-20 mb-8"
      >
        <h2 className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_30px_rgba(255,0,0,1)]">
          SaaS Products
        </h2>
      </motion.div>

      {/* SaaS Product Cards */}
      <div className="mt-10 flex flex-col gap-10 md:gap-20">
        {saasProducts.map((product, index) => (
          <ProjectCard
            key={`saas-${index}`}
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

export default SectionWrapper(SaaSProducts, "SaaSProducts");
