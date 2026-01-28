import React from 'react';
import './ResultsScreen.css';

const ResultsScreen = ({ 
  score, 
  highScore, 
  statistics, 
  possibleWords, 
  foundWords, 
  onPlayAgain, 
  onMenu 
}) => {
  const missedWords = possibleWords.filter(word => !foundWords.includes(word));
  const wordsFoundCount = foundWords.length;
  const bestStreak = statistics.bestStreak || 0;
  const averageSpeed = statistics.averageSpeed 
    ? (statistics.averageSpeed / 1000).toFixed(1) 
    : '0.0';

  return (
    <div className="results-screen">
      <button className="save-button" title="Save">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>
        </svg>
      </button>
      <div className="results-content">
        <h1 className="game-over-title">GAME OVER</h1>
        
        <div className="final-score">
          <div className="score-label">FINAL SCORE</div>
          <div className="score-value">{score}</div>
          {score >= highScore && score > 0 && (
            <div className="high-score-badge">NEW HIGH SCORE!</div>
          )}
        </div>

        <div className="statistics-grid">
          <div className="stat-item">
            <div className="stat-value">{wordsFoundCount}</div>
            <div className="stat-label">Words Found</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{bestStreak}</div>
            <div className="stat-label">Best Streak</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{averageSpeed}s</div>
            <div className="stat-label">Avg Time</div>
          </div>
        </div>

        {missedWords.length > 0 && (
          <div className="missed-words-section">
            <h3>Words You Could Have Made</h3>
            <div className="missed-words-list">
              {missedWords.map((word, index) => (
                <div key={index} className="missed-word">
                  {word.split('').map((letter, i) => (
                    <span key={i} className="letter-bubble">{letter}</span>
                  ))}
                </div>
              ))}
            </div>
            {missedWords.length > 1 && (
              <div className="missed-words-count">
                or {missedWords.length - 1} other {missedWords.length === 2 ? 'word' : 'words'}
              </div>
            )}
          </div>
        )}

        <div className="action-buttons">
          <button className="play-again-button" onClick={onPlayAgain}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span>PLAY AGAIN</span>
          </button>
          <button className="menu-button" onClick={onMenu}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
            <span>MENU</span>
          </button>
        </div>

        <div className="dictionary-hint">
          You can see all the words you've made in the Dictionary screen
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
