import React, { useState, useEffect } from 'react';
import './MenuScreen.css';

const MenuScreen = ({ highScore, onStartGame }) => {
  const [demoMode, setDemoMode] = useState(0); // 0: swipe, 1: type, 2: tap
  const modeLabels = ['Swipe', 'Type', 'Tap'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoMode(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="menu-screen">
      <div className="menu-content">
        {/* Animated Logo */}
        <div className="logo-container">
          <div className="letter-tiles">
            <div className="logo-tile" style={{ animationDelay: '0s' }}>F</div>
            <div className="logo-tile" style={{ animationDelay: '0.1s' }}>O</div>
            <div className="logo-tile" style={{ animationDelay: '0.2s' }}>U</div>
            <div className="logo-tile" style={{ animationDelay: '0.3s' }}>R</div>
          </div>
          <div className="logo-subtitle">LETTERS</div>
        </div>
        
        {highScore > 0 && (
          <div className="high-score-display">
            <div className="high-score-label">HIGH SCORE</div>
            <div className="high-score-value">{highScore}</div>
          </div>
        )}
        
        <button className="start-button" onClick={onStartGame}>
          START GAME
        </button>
        
        {/* Animated Tutorial */}
        <div className="tutorial-container">
          <h3 className="tutorial-title">How to Play</h3>
          
          {/* Mode indicator */}
          <div className="mode-indicator">
            {modeLabels.map((label, i) => (
              <span 
                key={label} 
                className={`mode-label ${demoMode === i ? 'active' : ''}`}
              >
                {label}
              </span>
            ))}
          </div>
          
          <div className="tutorial-demo" key={demoMode}>
            {/* Demo letters in a circle */}
            <div className="demo-circle">
              <div className={`demo-letter demo-letter-top ${demoMode === 2 ? 'tap-mode' : ''}`}>W</div>
              <div className={`demo-letter demo-letter-right ${demoMode === 2 ? 'tap-mode' : ''}`}>O</div>
              <div className={`demo-letter demo-letter-bottom ${demoMode === 2 ? 'tap-mode' : ''}`}>R</div>
              <div className={`demo-letter demo-letter-left ${demoMode === 2 ? 'tap-mode' : ''}`}>D</div>
              
              {/* Swipe mode: animated path */}
              {demoMode === 0 && (
                <svg className="swipe-path" viewBox="0 0 200 200">
                  <path 
                    className="swipe-line"
                    d="M 100 30 L 170 100 L 100 170 L 30 100"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle className="swipe-dot" r="8" />
                </svg>
              )}
              
              {/* Tap mode: tap indicators */}
              {demoMode === 2 && (
                <>
                  <div className="tap-ring tap-ring-1"></div>
                  <div className="tap-ring tap-ring-2"></div>
                  <div className="tap-ring tap-ring-3"></div>
                  <div className="tap-ring tap-ring-4"></div>
                </>
              )}
            </div>
            
            {/* Type mode: keyboard visual */}
            {demoMode === 1 && (
              <div className="keyboard-demo">
                <div className="key key-1">W</div>
                <div className="key key-2">O</div>
                <div className="key key-3">R</div>
                <div className="key key-4">D</div>
              </div>
            )}
            
            {/* Word forming animation */}
            <div className="demo-word-formation">
              <span className="demo-slot demo-slot-1">W</span>
              <span className="demo-slot demo-slot-2">O</span>
              <span className="demo-slot demo-slot-3">R</span>
              <span className="demo-slot demo-slot-4">D</span>
            </div>
            
            <div className="demo-checkmark">✓</div>
          </div>
          
          <div className="tutorial-tips">
            <div className="tip">
              <span>Answer quickly for bonus points</span>
            </div>
            <div className="tip">
              <span>Each word refills your timer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
