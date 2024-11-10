import React, { useState } from "react";
import { FaGift } from "react-icons/fa"; // Import FaGift for the surprise box icon
import EggProgress from "./EggProgress";
import NavbarDropdown from "./NavbarDropdown";
import EggAnimation from "./EggAnimation";
import LootboxContainer from "./LootboxContainer";
import { useEggContext } from "../context/EggContext";

const Navbar = ({ active, setActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lootboxVisible, setLootboxVisible] = useState(false); // Set initial visibility to false
  const { eggAnimation, triggerEggAnimation } = useEggContext();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const toggleLootboxVisibility = () => {
    logEvent("Lootbox", "click", "Lootbox toggled");
    setLootboxVisible(!lootboxVisible);
  };

  return (
    <div className="relative">
      <nav
        className="w-full fixed top-0 z-10 flex justify-between items-center px-2 py-2"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="flex items-center space-x-4 relative"
          style={{ pointerEvents: "auto" }}
        >
          <NavbarDropdown
            active={active}
            setActive={setActive}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />

          <EggAnimation
            color={eggAnimation?.color || "yellow"}
            triggerEgg={eggAnimation}
            className="absolute top-1/2 transform -translate-y-1/2"
          />
        </div>

        {/* Surprise box icon button with extra space to the right */}
        <button
          onClick={toggleLootboxVisibility}
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className="absolute top-2 right-8 p-2 mt-auto mb-auto cursor-pointer"
          style={{ pointerEvents: "auto" }}
        >
          <FaGift size={32} color="#FFD700" /> {/* Smaller icon size */}
        </button>

        {/* Tooltip positioned to the left of the button */}
        {isTooltipVisible && (
          <div
            className="absolute top-6 right-20 px-2 py-1 text-sm text-white bg-black rounded transition-opacity duration-500"
            style={{
              opacity: isTooltipVisible ? 1 : 0,
              transform: isTooltipVisible ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            Reach 70% to unlock your prize!
          </div>
        )}

        {/* LootboxContainer with visibility control and click-through when hidden */}
        <div
          className={`absolute top-12 right-2 p-2 transition-opacity duration-500 ${
            lootboxVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <LootboxContainer />
        </div>

        {menuOpen && <EggProgress eggsFound={[]} />}
      </nav>
    </div>
  );
};

export default Navbar;
