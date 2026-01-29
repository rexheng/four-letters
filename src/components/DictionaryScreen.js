import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { buildDictionary, getTotalWordCount } from '../data/dictionaryData';
import { getUnlockedWords, getUnlockedCount, isWordNew } from '../utils/dictionaryStorage';
import WordButton from './WordButton';
import WordDetailModal from './WordDetailModal';
import './Dictionary.css';

// Responsive words per page based on screen size
function getWordsPerPage() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  
  // Short screens or small mobiles: 4 rows × 3 = 12
  if (height < 650 || width < 360) return 12;
  // Standard mobile: 5 rows × 3 = 15
  if (width < 480) return 15;
  // Tablet portrait: 5 rows × 4 = 20
  if (width < 768) return 20;
  // Tablet landscape / small desktop: 5 rows × 5 = 25
  if (width < 1024) return 25;
  // Desktop: 5 rows × 6 = 30
  if (width < 1440) return 30;
  // Large desktop: 5 rows × 7 = 35
  return 35;
}

// Alphabet for quick jump
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function DictionaryScreen({ onBack }) {
  const [filter, setFilter] = useState('all'); // 'all' | 'collected' | 'new'
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showAlphabetPicker, setShowAlphabetPicker] = useState(false);
  const [wordsPerPage, setWordsPerPage] = useState(getWordsPerPage);
  
  // Update words per page on resize
  useEffect(() => {
    const handleResize = () => {
      setWordsPerPage(getWordsPerPage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const dictionary = useMemo(() => buildDictionary(), []);
  const totalWords = getTotalWordCount();
  const [unlockedWords, setUnlockedWords] = useState(() => getUnlockedWords());
  const unlockedCount = getUnlockedCount();
  
  const filteredWords = useMemo(() => {
    switch (filter) {
      case 'collected':
        return dictionary.filter(w => unlockedWords[w.word]);
      case 'new':
        return dictionary.filter(w => isWordNew(w.word));
      default:
        return dictionary;
    }
  }, [dictionary, filter, unlockedWords]);
  
  const totalPages = Math.ceil(filteredWords.length / wordsPerPage);
  const currentWords = filteredWords.slice(
    (currentPage - 1) * wordsPerPage,
    currentPage * wordsPerPage
  );
  
  // Reset to page 1 when filter changes
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  }, []);
  
  const handleWordClick = useCallback((wordData) => {
    if (unlockedWords[wordData.word]) {
      setSelectedWord(wordData);
    }
  }, [unlockedWords]);

  const handleModalClose = useCallback(() => {
    setSelectedWord(null);
    // Refresh unlocked words to update "new" badges
    setUnlockedWords(getUnlockedWords());
  }, []);

  // Jump to a specific letter
  const handleLetterJump = useCallback((letter) => {
    const index = filteredWords.findIndex(w => w.word[0] >= letter);
    if (index !== -1) {
      const page = Math.floor(index / wordsPerPage) + 1;
      setCurrentPage(page);
    }
    setShowAlphabetPicker(false);
  }, [filteredWords, wordsPerPage]);

  // Get available letters for the current filter
  const availableLetters = useMemo(() => {
    const letters = new Set(filteredWords.map(w => w.word[0]));
    return ALPHABET.filter(l => letters.has(l));
  }, [filteredWords]);
  
  // Determine if we're on desktop for alphabet sidebar
  const isDesktop = wordsPerPage >= 25;
  
  return (
    <div className={`dictionary-screen ${isDesktop ? 'desktop-view' : ''}`}>
      {/* Header */}
      <header className="dictionary-header">
        <button className="back-btn" onClick={onBack} aria-label="Go back">
          ←
        </button>
        <h1>Dictionary</h1>
        <div className="progress">
          <span className="label">COMPLETED</span>
          <span className="count">
            {unlockedCount.toLocaleString()}/{totalWords.toLocaleString()}
          </span>
        </div>
      </header>
      
      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button 
          className={`tab ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
          aria-label="All words (A-Z)"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M3 12h12M3 18h6"/>
            <path d="M17 10l4 8M21 10l-4 8M16.5 16h5"/>
          </svg>
        </button>
        <button 
          className={`tab ${filter === 'collected' ? 'active' : ''}`}
          onClick={() => handleFilterChange('collected')}
          aria-label="Collected words"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            <line x1="8" y1="7" x2="16" y2="7"/>
            <line x1="8" y1="11" x2="14" y2="11"/>
          </svg>
        </button>
        <button 
          className={`tab ${filter === 'new' ? 'active' : ''}`}
          onClick={() => handleFilterChange('new')}
          aria-label="New words"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
          </svg>
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="dictionary-content">
        {/* Desktop Alphabet Sidebar */}
        {isDesktop && (
          <aside className="alphabet-sidebar">
            {ALPHABET.map(letter => (
              <button
                key={letter}
                className={`sidebar-letter ${availableLetters.includes(letter) ? '' : 'disabled'}`}
                onClick={() => availableLetters.includes(letter) && handleLetterJump(letter)}
                disabled={!availableLetters.includes(letter)}
                aria-label={`Jump to ${letter}`}
              >
                {letter}
              </button>
            ))}
          </aside>
        )}
        
        {/* Word Grid */}
        <div className="word-grid">
          {currentWords.length > 0 ? (
            currentWords.map(wordData => (
              <WordButton
                key={wordData.word}
                wordData={wordData}
                isUnlocked={!!unlockedWords[wordData.word]}
                isNew={isWordNew(wordData.word)}
                onClick={() => handleWordClick(wordData)}
              />
            ))
          ) : (
            <div className="empty-state">
              {filter === 'collected' && (
                <p>No words collected yet. Play the game to unlock words!</p>
              )}
              {filter === 'new' && (
                <p>No new words. Recently unlocked words appear here.</p>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button 
          className="page-btn"
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          ‹
        </button>
        <span className="page-indicator">{currentPage}/{totalPages || 1}</span>
        <button 
          className="page-btn"
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages || totalPages === 0}
          aria-label="Next page"
        >
          ›
        </button>
        {/* Only show ABC jump button on mobile */}
        {!isDesktop && (
          <button 
            className="abc-jump" 
            aria-label="Jump to letter"
            onClick={() => setShowAlphabetPicker(!showAlphabetPicker)}
          >
            ABC
          </button>
        )}
      </div>

      {/* Alphabet Picker */}
      {showAlphabetPicker && (
        <div className="alphabet-picker-overlay" onClick={() => setShowAlphabetPicker(false)}>
          <div className="alphabet-picker" onClick={e => e.stopPropagation()}>
            <div className="alphabet-grid">
              {ALPHABET.map(letter => (
                <button
                  key={letter}
                  className={`alphabet-btn ${availableLetters.includes(letter) ? '' : 'disabled'}`}
                  onClick={() => availableLetters.includes(letter) && handleLetterJump(letter)}
                  disabled={!availableLetters.includes(letter)}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Word Detail Modal */}
      {selectedWord && (
        <WordDetailModal
          wordData={selectedWord}
          unlockedWords={unlockedWords}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
