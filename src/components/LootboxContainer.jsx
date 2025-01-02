import React, { useState } from 'react';
import { TbExposurePlus1 } from "react-icons/tb";
import Lootbox from './Lootbox';
import LootboxProgressBar from './LootboxProgressBar';
import ProgressButton from './progressButton';
import ProgressVideo from './ProgressVideo';
import Confetti from 'react-confetti';
import { technologySentences } from '../data';
import { logEvent } from "../analytics"; // Import logEvent from analytics.js

const LootboxContainer = ({ experiences }) => {
    const [showText, setShowText] = useState(false);
    const [winningIconName, setWinningIconName] = useState('');
    const [randomSentence, setRandomSentence] = useState('');
    const [foundTechnologies, setFoundTechnologies] = useState(new Set());
    const [setNewIcon, setSetNewIcon] = useState(false);
    const [showMissingList, setShowMissingList] = useState(false);
    const [showPrizeButton, setShowPrizeButton] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isContainerOpen, setIsContainerOpen] = useState(true);
    const [isScaled, setIsScaled] = useState(false); // State to manage scaling

    const handleMouseEnter = () => setIsScaled(true);

    const handleMouseLeave = () => {
        setTimeout(() => setIsScaled(false), 200);
    };

    const handleClick = () => {
        logEvent("Lootbox", "click", "Lootbox opened");
        setTimeout(() => setIsScaled(false), 200);
    };

    const handleWin = (iconName) => {
        setWinningIconName(iconName);
        setShowText(true);
        
        const sentences = technologySentences[iconName] || [];
        const randomIndex = Math.floor(Math.random() * sentences.length);
        setRandomSentence(sentences[randomIndex] || "No sentence available.");

        setFoundTechnologies(prev => {
            const newSet = new Set(prev);
            const wasAlreadyFound = newSet.has(iconName);
            newSet.add(iconName);
            setSetNewIcon(!wasAlreadyFound);
            return newSet;
        });

        const totalTechnologies = Object.keys(technologySentences).length;
        const foundCount = foundTechnologies.size + 1; 
        const progressPercentage = (foundCount / totalTechnologies) * 100;
        if (progressPercentage >= 80) {
            setShowPrizeButton(true);
        }

        setTimeout(() => {
            setShowText(false);
            setSetNewIcon(false);
        }, 6000);
    };

    const handlePrizeButtonClick = () => {
        setShowVideo(true);
        setIsVideoPlaying(true);
        setIsContainerOpen(false); 
        window.location.href = "#hero";
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
        setIsVideoPlaying(false);
        setIsContainerOpen(true);
    };

    const toggleMissingList = () => {
        setShowMissingList(true);
        setTimeout(() => {
            setShowMissingList(false);
        }, 4000);
    };

    const missingTechnologies = Object.keys(technologySentences).filter(
        tech => !foundTechnologies.has(tech)
    );

    const titleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: setNewIcon ? 'gold' : 'black',
        textShadow: foundTechnologies.has(winningIconName) 
            ? '0 0 5px grey' 
            : '0 0 5px gold',
    };
    

    return (
        <>
            {/* Confetti Effect */}
            {setNewIcon && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={200}
                    colors={['#FFD700', '#FFD700', '#FFF8DC']}
                />
            )}

            {isContainerOpen && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <div
                        style={{
                            opacity: showText ? 1 : 0,
                            transform: showText ? 'translateY(0) scale(1.5)' : 'translateY(20px) scale(0)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease',
                            marginBottom: '10px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <h2 style={titleStyle}>{winningIconName}</h2>
                    </div>
                    
                    {/* Christmas Box with hover scaling effect */}
                    <div
                        style={{
                            transform: isScaled ? 'scale(1.5)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    >
                        <Lootbox onWin={handleWin} />
                    </div>

                    {/* Progress Bar with click to toggle missing list */}
                    <div onClick={toggleMissingList} style={{ cursor: 'pointer', marginTop: '10px' }}>
                        <LootboxProgressBar progress={(foundTechnologies.size / Object.keys(technologySentences).length) * 100} />
                    </div>

                    {/* Prize Button with collapsible effect */}
                    {showPrizeButton && (
                        <div
                            style={{
                                height: showPrizeButton ? '50px' : '0px',
                                transition: 'height 0.5s ease',
                                marginTop: '10px',
                                width: '150px',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <ProgressButton onClick={handlePrizeButtonClick} />
                        </div>
                    )}

                    {/* Bottom text displaying random sentence */}
                    <div
                        class="rounded-lg bg-gray-600 bg-opacity-90"
                        style={{
                            height: showText ? 'auto' : '0px',
                            overflow: 'hidden',
                            transition: 'height 0.5s ease',
                            marginTop: '20px',
                            width: '200px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: showText ? '1vw' : '0px',
                        }}
                    >
                    <h2
                        style={{
                            opacity: showText ? 1 : 0,
                            transition: 'opacity 0.5s ease',
                            transitionDelay: showText ? '1s' : '0s',
                        }}
                    >
                        {randomSentence}
                    </h2>    
                </div>

                    {/* +1 Icon Animation */}
                    {setNewIcon && (
                        <TbExposurePlus1
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'gold',
                                fontSize: '4rem',
                                animation: 'scaleUp 2.5s ease forwards',
                            }}
                        />
                    )}

                    {/* Missing Technologies List with dynamic margin */}
                    {showMissingList && (
                        <div style={{ marginTop: showText ? '10px' : '20px', textAlign: 'center' }}>
                            <h3>Still missing...</h3>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {missingTechnologies.map((tech, index) => (
                                    <li
                                        key={tech}
                                        style={{
                                            opacity: 0,
                                            transform: 'translateY(20px)',
                                            animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`,
                                        }}
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            {/* Video Overlay */}
            {showVideo && (
                <ProgressVideo
                    onClose={handleCloseVideo}
                    onVideoStart={() => setIsVideoPlaying(true)}
                    onVideoEnd={() => setIsVideoPlaying(false)}
                />
            )}

            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @keyframes scaleUp {
                        0% { transform: translate(-50%, -50%) scale(0); }
                        50% { transform: translate(-50%, -50%) scale(1.5); }
                        100% { transform: translate(-50%, -50%) scale(0); }
                    }
                `}
            </style>
        </>
    );
};

export default LootboxContainer;
