import React from 'react';
import './GameStats.css';

const GameStats = ({ possibleWords, foundWords }) => {
  const remainingWords = possibleWords.length - foundWords.length;
  
  return (
    <div className="game-stats">
      <div className="possible-words-count">
        {remainingWords} POSSIBLE {remainingWords === 1 ? 'WORD' : 'WORDS'}
      </div>
      {foundWords.length > 0 && (
        <div className="found-words-list">
          {foundWords.map((word, index) => (
            <span key={index} className="found-word">
              {word}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameStats;
