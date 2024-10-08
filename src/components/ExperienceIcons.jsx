import {
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
  } from 'react-icons/fa';
  import { SiJenkins, SiPytorch, SiTerraform } from 'react-icons/si';
  import { SiMysql } from "react-icons/si";
  import { FaDatabase } from "react-icons/fa";
  import { FaShopify } from "react-icons/fa";
  import { FaBootstrap } from "react-icons/fa";
  import { FaEgg } from "react-icons/fa6";
  import { MdOutlineEgg } from "react-icons/md";

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
    SiMysql,
    FaDatabase,
    FaShopify,
    FaBootstrap,
    FaEgg,
    MdOutlineEgg
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
                {/* Apply specific hover effect for Shopify */}
                <div className="group">
                  <IconComponent
                    size={100}
                    className={`text-white filter drop-shadow-lg transition-all duration-300 group-hover:filter ${
                      icon.name === 'FaShopify' 
                        ? 'group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]' // Green hover effect for Shopify
                        : 'group-hover:drop-shadow-[0_0_20px_rgba(211,211,211,1)]' // Default hover for other icons
                    }`}
                  />
                </div>
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
    
  