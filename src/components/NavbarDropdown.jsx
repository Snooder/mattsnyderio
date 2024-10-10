import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink
import { logEvent } from "../analytics"; // Import the logEvent function
import EggAnimation from "./EggAnimation"; // Import the EggAnimation component

const NavbarDropdown = ({ active, setActive, menuOpen, setMenuOpen }) => {
  const [showGradient, setShowGradient] = useState(false); // State to control gradient visibility
  const [startAnimation, setStartAnimation] = useState(false); // State to control when to start the fade-in animation
  const [eggVisible, setEggVisible] = useState(false); // State to control egg visibility

  const navLinks = [
    { id: "hero", title: "Home" },
    { id: "experience", title: "Experience" },
    { id: "github", title: "GitHub" },
    { id: "events", title: "Events" },
    { id: "contact", title: "Contact" },
  ];

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
        setShowGradient(false);
        setStartAnimation(false);
        setEggVisible(false); // Hide the egg animation on scroll
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => {
      const newMenuState = !prevMenuOpen;
      setShowGradient(newMenuState); // Show gradient if menu opens
      setTimeout(() => setStartAnimation(newMenuState), 100);

      if (newMenuState) {
        setEggVisible(true)
      } else {
        setEggVisible(false); // Hide the egg when the menu is closed
      }

      return newMenuState;
    });
  };

  // Handle navigation click and smooth scroll
  const handleNavClick = (navId, title) => {
    setActive(navId); // Set active state for current section
    logEvent("Navigation", "Click", title); // Send analytics event through analytics.js
    setMenuOpen(false); // Close menu after click
    setShowGradient(false);
    setStartAnimation(false);
    setEggVisible(false); // Hide the egg after navigation click
  };

  return (
    <div
      id="navbar-dropdown"
      className="flex items-center justify-between relative z-20 space-x-4"
    >
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Link
          smooth
          to="/#hero"
          id="navbar-logo-link"
          className="text-white text-[26px] lg:text-[36px] font-bold z-20"
          onClick={() => setActive("hero")}
        >
          MS
        </Link>

        {/* Dropdown Arrow Button */}
        <button
          id="navbar-menu-toggle"
          onClick={toggleMenu}
          className="text-white text-[18px] font-bold z-20 flex items-center"
        >
          <span
            id="navbar-menu-arrow"
            className={`transition-transform duration-300 ${menuOpen ? "-rotate-90" : "rotate-0"}`}
          >
            ▼
          </span>
        </button>
      </div>

      {/* Egg Animation - Positioned to the right of the dropdown arrow */}
      <div className="flex items-center">
        <EggAnimation eggVisible={eggVisible} />
      </div>

      {/* Background Gradient */}
      {showGradient && (
        <div
          id="navbar-gradient"
          className={`fixed top-0 left-0 w-full h-full transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          } pointer-events-none`} // Ensures no interaction with gradient
          style={{
            background: "linear-gradient(to bottom, black, transparent)",
            zIndex: 1,
          }}
        ></div>
      )}

      {/* Dropdown Menu */}
      {menuOpen && (
        <div
          id="navbar-dropdown-menu"
          className="absolute top-full left-0 mt-2 flex flex-col gap-4 z-50"
          style={{ left: "2.5rem" }} // Adjust if needed for better alignment
        >
          {navLinks.map((nav, index) => (
            <button
              id={`navlink-button-${nav.id}`}
              key={nav.id}
              onClick={() => handleNavClick(nav.id, nav.title)} // Send both ID and title for tracking
              className={`py-4 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-500 ease-in-out ${
                active === nav.id ? "text-yellow-400" : "text-white"
              }`}
              style={{
                opacity: startAnimation ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Link id={`navlink-${nav.id}`} smooth to={`/#${nav.id}`}>
                {nav.title}
              </Link>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
