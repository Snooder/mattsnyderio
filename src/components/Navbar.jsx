import React, { useState } from "react";
import EggProgress from "./EggProgress";
import NavbarDropdown from "./NavbarDropdown";
import EggAnimation from "./EggAnimation";
import { useEggContext } from "../context/EggContext";

const Navbar = ({ active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { eggAnimation, triggerEggAnimation } = useEggContext(); // Context control for egg animations

  return (
    <div className="relative">
      {/* Set pointer-events: none only on the non-interactive background area */}
      <nav
        className="w-full fixed top-0 z-10 flex justify-between items-center px-2 py-2"
        style={{ pointerEvents: "none" }} // Make the entire background click-throughable
      >
        <div
          className="flex items-center space-x-4 relative"
          style={{ pointerEvents: "auto" }} // Enable interaction within the container
        >
          {/* The NavbarDropdown must remain interactive */}
          <NavbarDropdown
            active={active}
            setActive={setActive}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          {/* Manually trigger Egg Animation */}
          <EggAnimation
            color={eggAnimation?.color || "yellow"}
            triggerEgg={eggAnimation}
            className="absolute top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* EggProgress */}
        {menuOpen && <EggProgress eggsFound={[]} />}
      </nav>
    </div>
  );
};

export default Navbar;
