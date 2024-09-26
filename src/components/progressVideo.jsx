import React, { useState, useEffect } from "react";

const ProgressVideo = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Fade-in effect when the component mounts
  useEffect(() => {
    setVisible(true);
    setFadeOut(false); // Reset fadeOut when the video starts again
  }, []);

  // Function to track video time and trigger fade-out at 15 seconds
  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    if (currentTime >= 15 && !fadeOut) {
      setFadeOut(true); // Trigger fade-out at 15 seconds
    }

    // Call onClose at the end of the video (20 seconds)
    if (currentTime >= duration) {
      setTimeout(() => {
        onClose();
      }, 5000); // Match this with the fade-out duration
    }
  };

  // Ensure the video fades in when it's mounted and resets opacity
  const handleCanPlay = () => {
    setVisible(true);
    setFadeOut(false); // Reset the fadeOut when the video starts
  };

  return (
    <div
      className="video-overlay"
      style={{
        opacity: fadeOut ? 0 : visible ? 1 : 0,
        transition: "opacity 5s ease-in-out",
      }}
    >
      <video
        autoPlay
        muted
        className="prize-video"
        onTimeUpdate={handleTimeUpdate}
        onCanPlay={handleCanPlay}
      >
        <source src="https://mattsnyder.io/surpriseLick.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <style jsx>{`
        .video-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center; /* Align the video at the center of the screen */
          z-index: 9999;
        }

        .prize-video {
          height: 100vh; /* Make video take up full height of the viewport */
          width: auto; /* Let width scale proportionally */
          min-width: 100vw; /* Ensure it extends at least 100vw */
          object-fit: cover; /* Ensure video covers the entire container */
          border-radius: 0;
        }

        /* For small mobile screens, ensure the video is responsive */
        @media only screen and (max-width: 768px) {
          .prize-video {
            right: 0;
            width: auto; /* On smaller screens, ensure video takes full width */
            height: 300vw; /* Adjust height to maintain aspect ratio */
          }
        }
      `}</style>
    </div>
  );
};

export default ProgressVideo;
