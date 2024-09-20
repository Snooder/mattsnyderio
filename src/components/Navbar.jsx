import React, { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import EggProgress from "./EggProgress";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu open/close

  return (
    <div className="relative">
      <nav className="w-full fixed top-0 z-10 flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          {/* NavbarDropdown for MS and arrow */}
          <NavbarDropdown active={active} setActive={setActive} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        {/* Eggs on the right, visible only when the menu is open */}
        <EggProgress menuOpen={menuOpen} />
      </nav>
    </div>
  );
};

export default Navbar;
