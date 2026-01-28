import React, { memo, useState, useEffect } from 'react';
import './LetterCircle.css';
import TimerRing from './TimerRing';

const LetterButton = memo(({ letter, index, isSelected, handlers }) => {
  // Use percentage-based positions for responsive scaling
  const positions = [
    { x: '50%', y: '12%' },   // top
    { x: '12%', y: '50%' },   // left
    { x: '88%', y: '50%' },   // right
    { x: '50%', y: '88%' }    // bottom
  ];

  const pos = positions[index];

  return (
    <button
      className={`letter-button ${isSelected ? 'selected' : ''}`}
      data-index={index}
      style={{
        left: pos.x,
        top: pos.y
      }}
      onMouseDown={(e) => handlers.handleMouseDown(e, index)}
      onMouseEnter={() => handlers.handleMouseEnter(index)}
      onTouchStart={(e) => handlers.handleTouchStart(e, index)}
    >
      {letter}
    </button>
  );
});

// Calculate responsive radius based on screen size
const useResponsiveRadius = () => {
  const [radius, setRadius] = useState(140);
  
  useEffect(() => {
    const calculateRadius = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      if (width <= 320 || height <= 500) {
        setRadius(95);
      } else if (width <= 380 || height <= 600) {
        setRadius(105);
      } else {
        setRadius(140);
      }
    };
    
    calculateRadius();
    window.addEventListener('resize', calculateRadius);
    return () => window.removeEventListener('resize', calculateRadius);
  }, []);
  
  return radius;
};

const LetterCircle = ({ 
  letters, 
  selectedIndices, 
  timeRemaining, 
  duration,
  swipeHandlers 
}) => {
  const radius = useResponsiveRadius();
  
  return (
    <div 
      className="letter-circle-container"
      onMouseUp={swipeHandlers.handleMouseUp}
      onMouseLeave={swipeHandlers.handleMouseUp}
      onTouchMove={swipeHandlers.handleTouchMove}
      onTouchEnd={swipeHandlers.handleTouchEnd}
      onTouchCancel={swipeHandlers.handleTouchCancel}
    >
      <TimerRing duration={duration} timeRemaining={timeRemaining} radius={radius} />
      
      <div className="letter-circle">
        {letters.map((letter, index) => (
          <LetterButton
            key={index}
            letter={letter}
            index={index}
            isSelected={selectedIndices.includes(index)}
            handlers={swipeHandlers}
          />
        ))}
      </div>
    </div>
  );
};

export default LetterCircle;
