import React, { createContext, useState, useContext } from "react";

// Create context
const EggContext = createContext();

export const EggProvider = ({ children }) => {
  // State to manage egg animations
  const [eggAnimation, setEggAnimation] = useState({ visible: false, color: "" });

  // State to manage found eggs
  const [eggsFound, setEggsFound] = useState([]);

  // Trigger egg animation and keep track of found eggs
  const triggerEggAnimation = (eggDetails) => {
    if (!eggAnimation.visible) {
      setEggAnimation({ visible: true, color: eggDetails.color });

      // If the egg color is not already in the found eggs list, add it
      if (!eggsFound.includes(eggDetails.color)) {
        setEggsFound((prevEggs) => [...prevEggs, eggDetails.color]);
      }

      // Reset animation visibility after 3 seconds
      setTimeout(() => setEggAnimation({ visible: false, color: eggDetails.color }), 3000);
    }
  };

  return (
    <EggContext.Provider value={{ eggAnimation, triggerEggAnimation, eggsFound }}>
      {children}
    </EggContext.Provider>
  );
};

// Custom hook for using EggContext
export const useEggContext = () => useContext(EggContext);