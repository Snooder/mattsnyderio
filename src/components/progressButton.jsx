import React from "react";

const ProgressButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(); // Trigger the video and navigation actions
    window.location.href = "#hero"; // Navigate to the hero section
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '5px 10px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'gold',
        border: '2px solid gold',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease', // Transition for smooth scaling
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.5)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      Claim Your Prize
    </button>
  );
};

export default ProgressButton;
