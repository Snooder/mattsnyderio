import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll to add background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle setting active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={`w-full flex items-center p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none ${scrolled ? "bg-black" : "bg-gradient-to-b from-black"}`}>
      <div className="w-full flex justify-start items-start mx-auto">
        <Link
          smooth to="/#hero" // Use HashLink for smooth scrolling
          className="flex items-start"
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex" style={{ position: 'relative', left: '-10px' }}>
            MS
          </p>
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="list-none hidden sm:flex flex-col gap-3">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <Link smooth to={`/#${nav.id}`} onClick={() => setActive(nav.id)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
