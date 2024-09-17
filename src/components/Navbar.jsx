import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close
  const [showGradient, setShowGradient] = useState(false); // State to control gradient visibility
  const [startAnimation, setStartAnimation] = useState(false); // State to control when to start the fade-in animation

  const navLinks = [
    {
      id: "hero",
      title: "Home",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "github",
      title: "GitHub",
    },
    {
      id: "events",
      title: "Events",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  // Handle setting active section on scroll and closing the menu
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]"); // Select all sections with an id
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when half of the section is in view
        rootMargin: "0px", // Use root margin to fine-tune when to trigger
      }
    );

    // Add scroll event to close the menu and hide the background gradient when scrolling
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false); // Close the menu when scrolling
        setShowGradient(false); // Hide the background gradient
        setStartAnimation(false); // Stop the button animations when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll); // Attach scroll event listener

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    };
  }, [menuOpen]); // Add menuOpen as a dependency

  // Open/Close the menu and toggle gradient visibility
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => {
      const newMenuState = !prevMenuOpen;

      // Toggle gradient: Show when opening the menu, hide when closing
      if (newMenuState) {
        setShowGradient(true); // Show gradient when menu opens
        setTimeout(() => setStartAnimation(true), 100); // Delay the start of animations by 100ms after menu opens
      } else {
        setShowGradient(false); // Hide gradient when menu closes
        setStartAnimation(false); // Stop the button animations when menu closes
      }

      return newMenuState;
    });
  };

  // Manually scroll to the top of the section
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      // Manually scroll to the top of the section
      window.scrollTo({
        top: sectionElement.offsetTop, // Get the top offset of the section
        behavior: "smooth", // Smooth scroll behavior
      });
    }
  };

  // Close menu and hide gradient when clicking on a nav button
  const handleNavClick = (navId) => {
    setActive(navId); // Set the active nav section
    setMenuOpen(false); // Close the menu
    setShowGradient(false); // Hide the gradient
    setStartAnimation(false); // Stop button animations
    scrollToSection(navId); // Scroll to the top of the clicked section
  };

  return (
    <div className="relative">
      {/* Full-Screen Gradient Backdrop */}
      {showGradient && (
        <div
          className={`fixed top-0 left-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(to bottom, black, transparent)",
            height: "100vh", // Full viewport height
            width: "100vw", // Full viewport width
            position: "fixed",
            zIndex: "1", // Ensure the gradient is at the correct layer
          }}
        ></div>
      )}

      {/* Navbar Content */}
      <nav className="w-full fixed top-0 z-10 transition-all duration-300 pointer-events-auto">
        <div className="relative w-full max-w-7xl flex items-center pl-2 sm:pl-2 pt-2">
          {/* Group MS logo and Menu button together */}
          <div className="flex items-center">
            {/* Logo */}
            <Link
              smooth
              to="/#hero"
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

            {/* Arrow Button */}
            <div className="relative ml-4">
              <button
                onClick={toggleMenu}
                className="text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer flex items-center"
              >
                <span
                  className={`transition-transform duration-300 flex items-center justify-center ${
                    menuOpen ? "-rotate-90" : "rotate-0"
                  }`} // Rotate counterclockwise
                >
                  {/* Add box-shadow specifically to the triangle symbol */}
                  <span
                    className={`rounded-full p-2 transition-shadow duration-300 flex items-center justify-center`}
                    style={{ width: '40px', height: '40px' }}
                  >
                    ▼
                  </span>
                </span>
              </button>

              {/* Dropdown Menu - Floating Buttons */}
              {menuOpen && (
                <div className="absolute left-full xxs:p-1 xs:p-0 top-0 ml-4 flex flex-col gap-4 pointer-events-auto z-50">
                  {navLinks.map((nav, index) => (
                    <button
                      key={nav.id}
                      onClick={() => handleNavClick(nav.id)} // Close the menu and hide the gradient when clicking a button
                      className={`bg-opacity-80 bg-gray-800 text-white font-bold py-4 px-6 rounded-lg hover:bg-gray-700 transition-all duration-500 ease-in-out shadow-[0_0_10px_rgba(128,128,128,0.6)] hover:shadow-[0_0_15px_rgba(255,215,0,0.8),0_0_30px_rgba(255,215,0,0.6)] ${
                        active === nav.id ? "text-yellow-400" : "text-white"
                      }`}
                      style={{
                        opacity: startAnimation ? 1 : 0, // Buttons fade in only after animation starts
                        transitionDelay: `${index * 100}ms`, // Add delay for each button to create a staggered effect
                      }}
                    >
                      <Link smooth to={`/#${nav.id}`} onClick={() => setMenuOpen(false)}>
                        {nav.title}
                      </Link>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
