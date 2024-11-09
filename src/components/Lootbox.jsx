import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { technologies, getRandomColor, calculateRemainingTime } from './lootboxUtils'; // Import utilities
import IconDisplay from './iconDisplay';

const Lootbox = ({ onWin }) => {
    const [currentIcon, setCurrentIcon] = useState(null);
    const [iconBackgroundColor, setIconBackgroundColor] = useState('#FFF');
    const [flashing, setFlashing] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const handleFlash = () => {
        if (!flashing) {
            setFlashing(true);
            setAnimationClass(''); // Reset any animation class
            const flashDuration = 8000; // Total duration for the flashing effect
            const startTime = Date.now();
            const initialFlashInterval = 800; // Starting speed in milliseconds
            let jiggleStarted = false; // Track if jiggle has started

            const flashInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                // Check if the total duration has elapsed
                if (elapsed >= flashDuration) {
                    clearInterval(flashInterval);
                    setFlashing(false);
                    setCurrentIcon(null); // Reset icon visibility
                    return;
                }

                // Change icon
                const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
                setCurrentIcon(randomTech.icon); // Randomly select a technology icon
                setIconBackgroundColor(getRandomColor()); // Change the background color

                // Gradually slow down after 2 seconds
                if (elapsed > 2000) {
                    const remainingTime = calculateRemainingTime(startTime, flashDuration); // Calculate remaining time
                    const newSpeed = Math.max(remainingTime / 20, 600); // Keep a minimum speed of 600ms

                    clearInterval(flashInterval);
                    setTimeout(() => {
                        let winningIcon = randomTech; // Store the winning icon
                        const newIntervalId = setInterval(() => {
                            const newRandomTech = technologies[Math.floor(Math.random() * technologies.length)];
                            setCurrentIcon(newRandomTech.icon);
                            setIconBackgroundColor(getRandomColor());
                            winningIcon = newRandomTech
                            
                            if (!jiggleStarted) {
                                setAnimationClass('jiggle'); // Start jiggle animation
                                jiggleStarted = true; // Set jiggleStarted to true
                            }

                        }, newSpeed);

                        // Ensure the new interval clears after the total duration plus an extra 4 seconds
                        setTimeout(() => {
                            clearInterval(newIntervalId);
                            setAnimationClass(''); // Stop jiggle animation
                            onWin(winningIcon.name); // Pass the winning icon's name to onWin

                            // Keep the last icon displayed for an extra 4 seconds
                            setTimeout(() => {
                                setFlashing(false);
                                setCurrentIcon(null); // Reset icon visibility
                            }, 4000); // Extra 4 seconds
                        }, remainingTime);
                    }, newSpeed);
                }
            }, initialFlashInterval); // Flash every 800ms initially
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
            <div
                className={`lootbox ${animationClass}`}
                onClick={handleFlash}
                style={{
                    width: '120px',
                    height: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '0 auto',
                    backgroundColor: 'transparent', // Set to transparent
                    cursor: 'pointer',
                    transition: 'transform 0.5s', // Smooth transition for the jiggle
                }}
            >
                {flashing ? (
                    <IconDisplay icon={currentIcon} backgroundColor={iconBackgroundColor} />
                ) : (
                    <FaGift size={80} color="#FFD700" /> // Display surprise box icon when inactive
                )}
            </div>

            <style>
                {`
                    @keyframes jiggle {
                        0% { transform: rotate(0deg); }
                        25% { transform: rotate(2deg); }
                        50% { transform: rotate(-2deg); }
                        75% { transform: rotate(2deg); }
                        100% { transform: rotate(0deg); }
                    }
                    .jiggle {
                        animation: jiggle 0.4s ease-in-out infinite; /* Continuous jiggle */
                    }
                `}
            </style>
        </div>
    );
};

export default Lootbox;
