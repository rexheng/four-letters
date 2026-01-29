import React, { useState, useEffect } from 'react';
import { getDefinitionWithCache } from '../data/dictionaryData';
import { markWordAsSeen, isWordUnlocked } from '../utils/dictionaryStorage';

export default function WordDetailModal({ wordData, unlockedWords, onClose }) {
  const [definition, setDefinition] = useState(null);
  const [example, setExample] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch definition on mount
  useEffect(() => {
    let isMounted = true;
    
    async function loadDefinition() {
      setIsLoading(true);
      const result = await getDefinitionWithCache(wordData.word);
      
      if (isMounted) {
        setDefinition(result.definition);
        setExample(result.example);
        setIsLoading(false);
      }
    }
    
    loadDefinition();
    
    // Mark word as seen (removes "new" badge)
    markWordAsSeen(wordData.word);
    
    return () => {
      isMounted = false;
    };
  }, [wordData.word]);
  
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="word-detail-modal" 
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-labelledby="word-title"
      >
        <button 
          className="close-btn" 
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
        
        <h2 id="word-title" className="word-title">{wordData.word}</h2>
        
        <div className="language-badge">
          <span className="lang-code">En</span>
        </div>
        
        <div className="definition-section">
          {isLoading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading">Loading definition...</p>
            </div>
          ) : (
            <>
              <p className="definition">
                {definition || 'Definition not available.'}
              </p>
              {example && (
                <p className="example">
                  <em>"{example}"</em>
                </p>
              )}
            </>
          )}
        </div>
        
        {wordData.anagrams.length > 0 && (
          <>
            <hr className="divider" />
            
            <div className="related-words">
              <p className="related-label">Other words that use these letters:</p>
              <div className="anagram-buttons">
                {wordData.anagrams.map(anagram => {
                  const isAnagramUnlocked = isWordUnlocked(anagram);
                  return (
                    <button 
                      key={anagram}
                      className={`anagram-btn ${isAnagramUnlocked ? 'unlocked' : 'locked'}`}
                      disabled={!isAnagramUnlocked}
                    >
                      {isAnagramUnlocked ? anagram : '????'}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
