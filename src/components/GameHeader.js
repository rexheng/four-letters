import React from 'react';
import './GameHeader.css';

const GameHeader = ({ score, onMenuClick }) => {
  return (
    <div className="game-header">
      <button className="icon-button menu-button" onClick={onMenuClick}>
        ☰
      </button>
      
      <div className="score-display">
        <div className="score-label">SCORE</div>
        <div className="score-value">{score}</div>
      </div>
      
      <div className="icon-button-placeholder" />
    </div>
  );
};

export default GameHeader;
