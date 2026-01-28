import { useState, useEffect, useCallback, useRef } from 'react';
import { getRandomLetterSet, getDifficultyFromScore } from '../data/letterSets';
import { getHighScore, setHighScore, getStatistics, setStatistics, addToDictionary } from '../utils/storage';

const INITIAL_TIME = 10000; // 10 seconds in milliseconds
const SPEED_BONUS_THRESHOLD = 1000; // 1 second for speed bonus
const TIME_REFILL_AMOUNT = 3000; // ~1/3 of timer added on correct word
const SPEED_INCREASE_THRESHOLD = 100; // Score at which timer starts speeding up

export const useGameLogic = () => {
  const [gameStatus, setGameStatus] = useState('menu'); // 'menu', 'playing', 'paused', 'ended'
  const [currentLetters, setCurrentLetters] = useState([]);
  const [possibleWords, setPossibleWords] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [currentWord, setCurrentWord] = useState('');
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME);
  const [difficulty, setDifficulty] = useState('easy');
  const [speedBonusStreak, setSpeedBonusStreak] = useState(0);
  const [wordStartTime, setWordStartTime] = useState(null);
  const [statistics, setLocalStatistics] = useState(getStatistics());
  const [message, setMessage] = useState('');
  
  const timerRef = useRef(null);
  const lastUpdateRef = useRef(Date.now());
  const timerSpeedRef = useRef(1); // Timer speed multiplier
  const usedSetsRef = useRef([]); // Track which letter sets have been used this game
  const lastSetKeyRef = useRef(null); // Track the last set to prevent consecutive duplicates

  // Start new game
  const startGame = useCallback(() => {
    // Reset set tracking for new game
    usedSetsRef.current = [];
    lastSetKeyRef.current = null;
    
    const letterSet = getRandomLetterSet('easy', [], null);
    
    // Track this set
    usedSetsRef.current.push(letterSet.setKey);
    lastSetKeyRef.current = letterSet.setKey;
    
    setCurrentLetters(letterSet.letters);
    setPossibleWords(letterSet.possibleWords);
    setFoundWords([]);
    setCurrentWord('');
    setSelectedIndices([]);
    setScore(0);
    setTimeRemaining(INITIAL_TIME);
    setDifficulty('easy');
    setSpeedBonusStreak(0);
    setGameStatus('playing');
    setMessage('');
    timerSpeedRef.current = 1; // Reset timer speed
    lastUpdateRef.current = Date.now();
  }, []);

  // Generate new letter set - timer carries over with partial refill
  const generateNewLetters = useCallback(() => {
    const currentDifficulty = getDifficultyFromScore(score);
    const letterSet = getRandomLetterSet(currentDifficulty, usedSetsRef.current, lastSetKeyRef.current);
    
    // Track this set
    if (!usedSetsRef.current.includes(letterSet.setKey)) {
      usedSetsRef.current.push(letterSet.setKey);
    }
    lastSetKeyRef.current = letterSet.setKey;
    
    setCurrentLetters(letterSet.letters);
    setPossibleWords(letterSet.possibleWords);
    setDifficulty(currentDifficulty);
    setFoundWords([]);
    
    // Add partial time instead of full reset (capped at max)
    setTimeRemaining(prev => Math.min(prev + TIME_REFILL_AMOUNT, INITIAL_TIME));
    
    // Update timer speed based on score (only after threshold)
    if (score >= SPEED_INCREASE_THRESHOLD) {
      // Increase speed very gradually: starts at 1.0, increases ~2% per 10 points above threshold
      // At score 200: 1.2x, at score 300: 1.4x, at score 500: 1.8x (capped at 2.0)
      const pointsAboveThreshold = score - SPEED_INCREASE_THRESHOLD;
      timerSpeedRef.current = Math.min(1 + (pointsAboveThreshold * 0.002), 2.0);
    }
    
    lastUpdateRef.current = Date.now();
  }, [score]);

  // Start word formation (or continue if already in progress)
  const startWordFormation = useCallback((letterIndex) => {
    if (gameStatus !== 'playing') return;
    
    // If we already have selected letters and this is a new letter, add to it
    if (selectedIndices.length > 0 && !selectedIndices.includes(letterIndex)) {
      setSelectedIndices(prev => [...prev, letterIndex]);
      setCurrentWord(prev => prev + currentLetters[letterIndex]);
    } else if (!selectedIndices.includes(letterIndex)) {
      // Fresh start
      setSelectedIndices([letterIndex]);
      setCurrentWord(currentLetters[letterIndex]);
      setWordStartTime(Date.now());
    }
    // If already selected, do nothing (user touched an already-selected letter)
  }, [currentLetters, gameStatus, selectedIndices]);

  // Continue word formation
  const continueWordFormation = useCallback((letterIndex) => {
    if (gameStatus !== 'playing') return;
    if (!selectedIndices.includes(letterIndex)) {
      setSelectedIndices(prev => [...prev, letterIndex]);
      setCurrentWord(prev => prev + currentLetters[letterIndex]);
    }
  }, [currentLetters, selectedIndices, gameStatus]);

  // Remove last letter from current word
  const removeLastLetter = useCallback(() => {
    if (gameStatus !== 'playing') return;
    if (selectedIndices.length > 0) {
      setSelectedIndices(prev => prev.slice(0, -1));
      setCurrentWord(prev => prev.slice(0, -1));
    }
  }, [gameStatus, selectedIndices.length]);

  // Remove letter at specific position in current word
  const removeLetterAtIndex = useCallback((positionIndex) => {
    if (gameStatus !== 'playing') return;
    if (positionIndex >= 0 && positionIndex < selectedIndices.length) {
      setSelectedIndices(prev => {
        const newIndices = [...prev];
        newIndices.splice(positionIndex, 1);
        return newIndices;
      });
      setCurrentWord(prev => {
        return prev.slice(0, positionIndex) + prev.slice(positionIndex + 1);
      });
    }
  }, [gameStatus, selectedIndices.length]);

  // Clear current word
  const clearCurrentWord = useCallback(() => {
    if (gameStatus !== 'playing') return;
    setSelectedIndices([]);
    setCurrentWord('');
    setWordStartTime(null);
  }, [gameStatus]);

  // Validate word
  const validateWord = useCallback((word) => {
    // Only 4-letter words are valid
    if (word.length !== 4) return false;
    // Check if it's in the possible words list
    return possibleWords.includes(word.toUpperCase());
  }, [possibleWords]);

  // End word formation - accepts optional word parameter to handle async state issues
  const endWordFormation = useCallback((wordOverride) => {
    if (gameStatus !== 'playing') return;
    
    // Use provided word if available, otherwise fall back to state
    const word = (wordOverride || currentWord).toUpperCase();
    
    // If word is incomplete (less than 4 letters), keep the selection
    // This allows multi-swipe word building
    if (word.length < 4) {
      return; // Don't clear, let user continue swiping
    }
    
    const isValid = validateWord(word);
    const wordTime = Date.now() - wordStartTime;
    
    if (isValid && !foundWords.includes(word)) {
      // Calculate score
      let points = 1; // Base point
      
      // Speed bonus (replaces base point, caps at 10)
      if (wordTime < SPEED_BONUS_THRESHOLD) {
        const newStreak = Math.min(speedBonusStreak + 1, 10);
        points = newStreak; // Speed bonus IS the points (1-10)
        setSpeedBonusStreak(newStreak);
        setMessage(`+${points} (x${newStreak})`);
      } else {
        setSpeedBonusStreak(0);
        setMessage(`+${points}`);
      }
      
      // Update score and found words
      const newScore = score + points;
      setScore(newScore);
      setFoundWords(prev => [...prev, word]);
      addToDictionary(word);
      
      // Check if high score
      const highScore = getHighScore();
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      
      // Progress to next set immediately
      generateNewLetters();
      setTimeout(() => setMessage(''), 500);
      
      // Update statistics
      const stats = getStatistics();
      stats.totalWords += 1;
      stats.totalTime += wordTime;
      stats.averageSpeed = stats.totalTime / stats.totalWords;
      stats.bestStreak = Math.max(stats.bestStreak, speedBonusStreak + 1);
      setLocalStatistics(stats);
      setStatistics(stats);
    } else if (foundWords.includes(word)) {
      setMessage('Already found!');
      setSpeedBonusStreak(0);
    } else {
      setMessage('Not a word!');
      setSpeedBonusStreak(0);
    }
    
    // Clear message after 2 seconds
    setTimeout(() => setMessage(''), 2000);
    
    // Reset selection
    setSelectedIndices([]);
    setCurrentWord('');
    setWordStartTime(null);
  }, [currentWord, foundWords, possibleWords, score, speedBonusStreak, wordStartTime, validateWord, generateNewLetters, gameStatus]);

  // Timer logic
  useEffect(() => {
    if (gameStatus !== 'playing') return;

    timerRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastUpdateRef.current;
      lastUpdateRef.current = now;

      setTimeRemaining(prev => {
        // Apply speed multiplier to elapsed time (faster depletion at higher scores)
        const adjustedElapsed = elapsed * timerSpeedRef.current;
        const newTime = Math.max(0, prev - adjustedElapsed);
        if (newTime === 0) {
          // Game over
          setGameStatus('ended');
          const stats = getStatistics();
          stats.totalGames += 1;
          setLocalStatistics(stats);
          setStatistics(stats);
        }
        return newTime;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [gameStatus]);

  // Pause game
  const pauseGame = useCallback(() => {
    setGameStatus('paused');
  }, []);

  // Resume game
  const resumeGame = useCallback(() => {
    setGameStatus('playing');
    lastUpdateRef.current = Date.now();
  }, []);

  // Go to main menu
  const goToMenu = useCallback(() => {
    setGameStatus('menu');
    setScore(0);
    setCurrentWord('');
    setSelectedIndices([]);
    setFoundWords([]);
    setTimeRemaining(INITIAL_TIME);
  }, []);

  return {
    gameStatus,
    currentLetters,
    possibleWords,
    foundWords,
    currentWord,
    selectedIndices,
    score,
    timeRemaining,
    statistics,
    message,
    startGame,
    startWordFormation,
    continueWordFormation,
    endWordFormation,
    removeLastLetter,
    removeLetterAtIndex,
    clearCurrentWord,
    pauseGame,
    resumeGame,
    goToMenu,
    highScore: getHighScore()
  };
};
