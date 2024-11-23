import React, { useState } from 'react';
import { FaGift } from 'react-icons/fa';
import { technologies, getRandomColor, calculateRemainingTime } from './lootboxUtils';
import IconDisplay from './IconDisplay';

const Lootbox = ({ onWin }) => {
    const [currentIcon, setCurrentIcon] = useState(null);
    const [iconBackgroundColor, setIconBackgroundColor] = useState('#FFF');
    const [flashing, setFlashing] = useState(false);
    const [animationClass, setAnimationClass] = useState('');

    const handleFlash = () => {
        if (!flashing) {
            setFlashing(true);
            setAnimationClass('');
            const flashDuration = 5000;
            const startTime = Date.now();
            const initialFlashInterval = 800;
            let jiggleStarted = false;

            const flashInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;

                if (elapsed >= flashDuration) {
                    clearInterval(flashInterval);
                    setFlashing(false);
                    setCurrentIcon(null);
                    return;
                }

                const randomTech = technologies[Math.floor(Math.random() * technologies.length)];
                setCurrentIcon(randomTech.icon);
                setIconBackgroundColor(getRandomColor());

                if (elapsed > 2000) {
                    const remainingTime = calculateRemainingTime(startTime, flashDuration);
                    const newSpeed = Math.max(remainingTime / 20, 400);

                    clearInterval(flashInterval);
                    setTimeout(() => {
                        let winningIcon = randomTech;
                        const newIntervalId = setInterval(() => {
                            const newRandomTech = technologies[Math.floor(Math.random() * technologies.length)];
                            setCurrentIcon(newRandomTech.icon);
                            setIconBackgroundColor(getRandomColor());
                            winningIcon = newRandomTech;

                            if (!jiggleStarted) {
                                setAnimationClass('jiggle');
                                jiggleStarted = true;
                            }

                        }, newSpeed);

                        setTimeout(() => {
                            clearInterval(newIntervalId);
                            setAnimationClass('');
                            onWin(winningIcon.name);

                            setTimeout(() => {
                                setFlashing(false);
                                setCurrentIcon(null);
                            }, 4000);
                        }, remainingTime);
                    }, newSpeed);
                }
            }, initialFlashInterval);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '5px', position: 'relative' }}>
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
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    transition: 'transform 0.5s',
                }}
            >
                {flashing ? (
                    <IconDisplay icon={currentIcon} backgroundColor={iconBackgroundColor} />
                ) : (
                    <FaGift size={80} color="#FFD700" />
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
                        animation: jiggle 0.4s ease-in-out infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Lootbox;
