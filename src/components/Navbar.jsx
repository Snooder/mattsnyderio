import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false); // Add a state for menu open/close

  const navLinks = [
    {
      group: "Home",
      links: [
        { id: "hero", title: "Home" },
        { id: "experience", title: "Experience" },
      ],
    },
    {
      group: "Projects",
      links: [
        { id: "project1", title: "Project 1" },
        { id: "project2", title: "Project 2" },
      ],
    },
    {
      group: "More",
      links: [
        { id: "contact", title: "Contact" },
        { id: "blog", title: "Blog" },
      ],
    },
  ];

  // Handle setting active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]"); // Select all sections with an id
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);

            // Close menu when the "Experience" section is reached
            if (entry.target.id === "experience") {
              setMenuOpen(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold to trigger when half of the section is in view
        rootMargin: "0px", // Use root margin to fine-tune when to trigger
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full fixed z-40 pointer-events-none transition-all duration-300 bg-transparent">
      <div className="w-full max-w-7xl flex items-center pl-2 sm:pl-2 sm:pt-2">
        {/* Group MS logo and Menu button together */}
        <div className="flex items-center" style={{ paddingBottom: window.innerWidth < 640 ? "65%" : "5%" }}> 
          {/* Logo */}
          <Link
            smooth
            to="/#hero" // Use HashLink for smooth scrolling
            className="flex items-start"
            onClick={() => {
              setActive("hero");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer">
              MS
            </p>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer flex items-center ml-1"
          >
            <span
              className={`transition-transform ${
                menuOpen ? "rotate-180" : "rotate-0"
              } flex items-center justify-center`}
            >
              {/* Add box-shadow specifically to the triangle symbol */}
              <span
                className={`${
                  menuOpen ? "shadow-[0_0_10px_3px_grey]" : ""
                } rounded-full p-2 transition-shadow duration-300 flex items-center justify-center`}
                style={{ width: '40px', height: '40px' }}
              >
                ▼
              </span>
            </span>
          </button>
        </div>

        {/* Dropdown Menu on the same row */}
        {menuOpen && (
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 gap-4">
            {navLinks.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`flex flex-col items-start space-y-2 pl-2 pr-2 rounded-lg transition-all duration-300 ${
                  group.links.some((link) => active === link.id)
                    ? "bg-opacity-50 bg-gray-800 shadow-[0_0_15px_3px_gold]" // Reduced golden glow
                    : "bg-opacity-95 bg-gray-700 shadow-[0_0_10px_3px_grey]" // Reduced grey glow
                }`}
              >
                <ul className="space-y-2">
                  {group.links.map((nav) => (
                    <li
                      key={nav.id}
                      className={`relative flex items-center ${
                        active === nav.id ? "text-yellow-400" : "text-slate-500" // Set active text to golden
                      } hover:text-white xs:text-[18px] sm:text-[24px] font-bold pointer-events-auto cursor-pointer`}
                    >
                      <Link
                        smooth
                        to={`/#${nav.id}`}
                        onClick={() => {
                          setActive(nav.id);
                          setMenuOpen(false); // Close menu on selection
                        }}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
