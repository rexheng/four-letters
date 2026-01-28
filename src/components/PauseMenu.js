import React from 'react';
import './PauseMenu.css';

const PauseMenu = ({ score, onResume, onRestart, onMainMenu }) => {
  return (
    <div className="pause-overlay">
      <div className="pause-menu">
        <h2 className="pause-title">PAUSED</h2>
        
        <div className="pause-score">
          <span className="pause-score-label">Current Score</span>
          <span className="pause-score-value">{score}</span>
        </div>

        <div className="pause-buttons">
          <button className="pause-button resume-button" onClick={onResume}>
            <span className="button-icon">▶</span>
            Resume
          </button>
          
          <button className="pause-button restart-button" onClick={onRestart}>
            <span className="button-icon">↺</span>
            Restart
          </button>
          
          <button className="pause-button menu-button" onClick={onMainMenu}>
            <span className="button-icon">⌂</span>
            Main Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default PauseMenu;
