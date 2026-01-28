import React, { useState, useRef } from 'react';
import './WordFormation.css';

const WordFormation = ({ currentWord, onLetterClick }) => {
  const letters = currentWord.split('');
  const [pressedIndex, setPressedIndex] = useState(null);
  const touchHandledRef = useRef(false);
  
  const handleClick = (index) => {
    // Skip if this was already handled by touch
    if (touchHandledRef.current) {
      touchHandledRef.current = false;
      return;
    }
    if (letters[index] && onLetterClick) {
      setPressedIndex(index);
      // Remove the pressed state after animation
      setTimeout(() => setPressedIndex(null), 150);
      onLetterClick(index);
    }
  };

  const handleTouchStart = (e, index) => {
    e.preventDefault(); // Prevent ghost click
    if (letters[index]) {
      setPressedIndex(index);
    }
  };

  const handleTouchEnd = (e, index) => {
    e.preventDefault(); // Prevent ghost click
    if (letters[index] && onLetterClick) {
      touchHandledRef.current = true;
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
          onTouchStart={(e) => handleTouchStart(e, index)}
          onTouchEnd={(e) => handleTouchEnd(e, index)}
        >
          {letters[index] || ''}
        </div>
      ))}
    </div>
  );
};

export default WordFormation;
