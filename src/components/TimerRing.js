import React from 'react';
import './TimerRing.css';

const TimerRing = ({ duration, timeRemaining, radius = 140 }) => {
  const circumference = 2 * Math.PI * radius;
  const progress = timeRemaining / duration;
  const strokeDashoffset = circumference * (1 - progress);

  // Determine color based on time remaining
  const getTimerColor = () => {
    if (progress > 0.3) return 'var(--timer-full)';
    if (progress > 0.1) return 'var(--timer-warning)';
    return 'var(--timer-critical)';
  };

  const shouldPulse = progress < 0.1;

  return (
    <svg 
      className={`timer-ring ${shouldPulse ? 'pulse' : ''}`} 
      width={radius * 2} 
      height={radius * 2}
    >
      <defs>
        <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={getTimerColor()} stopOpacity="0.8" />
          <stop offset="100%" stopColor={getTimerColor()} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <circle
        cx={radius}
        cy={radius}
        r={radius - 5}
        fill="none"
        stroke="url(#timerGradient)"
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${radius} ${radius})`}
        style={{
          transition: 'stroke-dashoffset 50ms linear'
        }}
      />
    </svg>
  );
};

export default TimerRing;
