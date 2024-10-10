import React from "react";

const ProgressButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Prevents the default link behavior
    onClick(); // Calls the onClick function to trigger the video
    window.location.href = "#hero"; // Scroll to the hero section
  };

  return (
    <a href="#hero" className="prize-button" onClick={handleClick}>
      Enjoy your prize
      <style jsx>{`
        .prize-button {
          display: inline-block;
          padding: 12px 24px;
          font-size: 18px;
          background-color: rgba(128, 128, 128, 0.5); /* Grey with 50% opacity */
          border: none;
          color: white;
          cursor: pointer;
          margin-top: 40px; /* Move the button lower */
          transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
          border-radius: 8px;
          text-decoration: none; /* Remove underline */
        }

        .prize-button:hover {
          transform: scale(1.1); /* Grow slightly on hover */
        }
      `}</style>
    </a>
  );
};

export default ProgressButton;
