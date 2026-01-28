import React, { useState } from 'react';
import './WordFormation.css';

const WordFormation = ({ currentWord, onLetterClick }) => {
  const letters = currentWord.split('');
  const [pressedIndex, setPressedIndex] = useState(null);
  
  const handleClick = (index) => {
    if (letters[index] && onLetterClick) {
      setPressedIndex(index);
      // Remove the pressed state after animation
      setTimeout(() => setPressedIndex(null), 150);
      onLetterClick(index);
    }
  };

  const handleTouchStart = (index) => {
    if (letters[index]) {
      setPressedIndex(index);
    }
  };

  const handleTouchEnd = (index) => {
    if (letters[index] && onLetterClick) {
      onLetterClick(index);
    }
    setPressedIndex(null);
  };
  
  return (
    <div className="word-formation">
      {[0, 1, 2, 3].map(index => (
        <div 
          key={index} 
          className={`word-circle ${letters[index] ? 'filled' : 'empty'} ${letters[index] && onLetterClick ? 'clickable' : ''} ${pressedIndex === index ? 'pressed' : ''}`}
          onClick={() => handleClick(index)}
          onTouchStart={() => handleTouchStart(index)}
          onTouchEnd={() => handleTouchEnd(index)}
        >
          {letters[index] || ''}
        </div>
      ))}
    </div>
  );
};

export default WordFormation;
