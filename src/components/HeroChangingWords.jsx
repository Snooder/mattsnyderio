import React from 'react';

const ChangingWords = ({ words, colors }) => {
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="changing-words streaky-glow">
      {words.map((word, index) => (
        <span
          key={index}
          className={`word`}
          style={{ color: getRandomColor() }}
        >
          {word}
        </span>
      ))}
      <style jsx>{`
        .changing-words {
          display: flex;
          position: relative;
          white-space: nowrap;
          min-width: 200px;
          justify-content: flex-start;
          align-items: center;
          height: 1em;
        }

        .changing-words .word {
          position: absolute;
          opacity: 0;
          animation: fadeWords 6s linear infinite 0s;
        }

        .changing-words .word:nth-child(1) {
          animation-delay: 0s;
        }

        .changing-words .word:nth-child(2) {
          animation-delay: 2s;
        }

        .changing-words .word:nth-child(3) {
          animation-delay: 4s;
        }

        @keyframes fadeWords {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          10% {
            opacity: 1;
            transform: translateY(0);
          }
          25% {
            opacity: 1;
          }
          35% {
            opacity: 0;
            transform: translateY(-100%);
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ChangingWords;
