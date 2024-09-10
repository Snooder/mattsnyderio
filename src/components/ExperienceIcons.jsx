import { FaPython, FaAws, FaDocker, FaGit, FaGithub, FaHtml5, FaCss3, FaLinux, FaDrupal, FaJava } from 'react-icons/fa';
import { SiJenkins, SiPytorch, SiTerraform } from 'react-icons/si';

const IconComponents = {
  FaPython,
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaLinux,
  FaDrupal,
  FaJava,
  SiJenkins,
  SiPytorch,
  SiTerraform,
};

const ExperienceIcons = ({ icons = [] }) => (
  <div className="flex flex-wrap justify-center space-x-4">
    {icons.length > 0 ? (
      icons.map((icon) => {
        const IconComponent = IconComponents[icon.name];

        // Check if the IconComponent exists before rendering
        if (!IconComponent) {
          console.error(`Icon ${icon.name} does not exist in the IconComponents mapping.`);
          return null; // Return null if the icon is not found
        }

        return (
          <div key={icon.name} className="flex flex-col items-center">
            <IconComponent size={100} /> {/* Increased icon size */}
            <p className="mt-2 text-center text-sm text-white">{icon.label}</p> {/* Label below icon */}
          </div>
        );
      })
    ) : (
      <p>No icons available</p> // Fallback text if no icons are available
    )}
  </div>
);

export default ExperienceIcons;
