import React from 'react';

const DoomGame = () => {
  return (
    <div
      className="game-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000',
      }}
    >
      <iframe
        title="Doom Game"
        src="https://www.retrogames.cc/embed/38591-doom.html" // Using an alternative working source
        style={{
          width: '960px',  // Set a larger window size for DOOM
          height: '600px', // Adjust height accordingly
          border: 'none',
          backgroundColor: '#000',
        }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DoomGame;
