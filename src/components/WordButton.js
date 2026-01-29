import React from 'react';
import { isWordUnlocked } from '../utils/dictionaryStorage';

export default function WordButton({ wordData, isUnlocked, isNew, onClick }) {
  // Get all words in this letter set (current word + anagrams)
  const allWords = [wordData.word, ...wordData.anagrams];
  const hasAnagrams = allWords.length > 1;
  
  return (
    <div className="word-button-container">
      <button 
        className={`word-button ${isUnlocked ? 'unlocked' : 'locked'}`}
        onClick={onClick}
        disabled={!isUnlocked}
        aria-label={isUnlocked ? wordData.word : 'Locked word'}
      >
        {/* Outer ring - the 3D bevel effect */}
        <span className="button-outer-ring"></span>
        
        {/* Inner face of the button */}
        <span className="button-inner-face">
          {isUnlocked ? (
            <>
              <span className="word-text">{wordData.word}</span>
              {/* Anagram indicator dots - inside button */}
              {hasAnagrams && (
                <span className="anagram-dots">
                  {allWords.map((word, i) => (
                    <span 
                      key={i} 
                      className={`dot ${isWordUnlocked(word) ? 'filled' : 'empty'}`}
                    />
                  ))}
                </span>
              )}
            </>
          ) : (
            <span className="locked-text">????</span>
          )}
        </span>
        
        {/* New badge - positioned at 2 o'clock */}
        {isNew && <span className="new-badge" aria-label="New">!</span>}
      </button>
    </div>
  );
}
