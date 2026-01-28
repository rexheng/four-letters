import React from 'react';
import './WordFormation.css';

const WordFormation = ({ currentWord }) => {
  const letters = currentWord.split('');
  
  return (
    <div className="word-formation">
      {[0, 1, 2, 3].map(index => (
        <div 
          key={index} 
          className={`word-circle ${letters[index] ? 'filled' : 'empty'}`}
        >
          {letters[index] || ''}
        </div>
      ))}
    </div>
  );
};

export default WordFormation;
