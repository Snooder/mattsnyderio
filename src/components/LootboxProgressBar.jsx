// LootboxProgressBar.jsx
import React, { useState } from 'react';

// Color mapping based on percentages
export const shadowColorMap = {
    '0': "rgba(30,144,255,0.6)",    // Blue glow
    '17': "rgba(255,105,180,0.6)",   // Pink glow
    '34': "rgba(147,112,219,0.6)",   // Light Purple glow
    '50': "rgba(255,255,0,0.6)",     // Yellow glow
    '67': "rgba(255,165,0,0.6)",     // Orange glow
    '84': "rgba(255,0,0,0.6)",       // Red glow
};

const LootboxProgressBar = ({ progress }) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover status

    // Calculate the background color based on progress
    const getBackgroundColor = () => {
        if (progress >= 84) return shadowColorMap['84']; // Red glow for 84-100%
        if (progress >= 67) return shadowColorMap['67']; // Orange glow for 67-83%
        if (progress >= 50) return shadowColorMap['50']; // Yellow glow for 50-66%
        if (progress >= 34) return shadowColorMap['34']; // Light Purple for 34-49%
        if (progress >= 17) return shadowColorMap['17']; // Pink for 17-33%
        return shadowColorMap['0']; // Blue glow for less than 17%
    };

    return (
        <div
            className={`relative w-32 bg-gray-300 rounded transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
        >
            <div
                className="h-5 rounded transition-width duration-500 ease-in-out"
                style={{ width: `${progress}%`, backgroundColor: getBackgroundColor() }} // Progress bar width and color
            />
            <div
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black font-bold transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-100 delay-300' : 'opacity-0'}`}
                // Center text and control visibility with hover state
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
};

export default LootboxProgressBar;
