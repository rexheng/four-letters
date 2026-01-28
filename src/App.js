import './App.css';
import React from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { useSwipeGesture } from './hooks/useSwipeGesture';
import { useKeyboardInput } from './hooks/useKeyboardInput';
import GameHeader from './components/GameHeader';
import WordFormation from './components/WordFormation';
import LetterCircle from './components/LetterCircle';
import GameStats from './components/GameStats';
import ResultsScreen from './components/ResultsScreen';
import MenuScreen from './components/MenuScreen';
import PauseMenu from './components/PauseMenu';

const INITIAL_TIME = 10000; // 10 seconds

function App() {
  const {
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
    clearCurrentWord,
    pauseGame,
    resumeGame,
    goToMenu,
    highScore
  } = useGameLogic();

  const swipeHandlers = useSwipeGesture(
    selectedIndices,
    startWordFormation,
    continueWordFormation,
    endWordFormation
  );

  // Enable keyboard input
  useKeyboardInput(
    currentLetters, 
    startWordFormation, 
    continueWordFormation, 
    endWordFormation, 
    removeLastLetter, 
    clearCurrentWord, 
    gameStatus
  );

  const handleMenuClick = () => {
    if (gameStatus === 'playing') {
      pauseGame();
    }
  };

  // Menu screen
  if (gameStatus === 'menu') {
    return <MenuScreen highScore={highScore} onStartGame={startGame} />;
  }

  // Results screen
  if (gameStatus === 'ended') {
    return (
      <ResultsScreen
        score={score}
        highScore={highScore}
        statistics={statistics}
        possibleWords={possibleWords}
        foundWords={foundWords}
        onPlayAgain={startGame}
        onMenu={goToMenu}
      />
    );
  }

  // Paused screen
  if (gameStatus === 'paused') {
    return (
      <div className="App">
        <GameHeader 
          score={score} 
          onMenuClick={handleMenuClick}
        />

        <div className="score-message-container" />

        <WordFormation currentWord={currentWord} />

        <LetterCircle
          letters={currentLetters}
          selectedIndices={selectedIndices}
          timeRemaining={timeRemaining}
          duration={INITIAL_TIME}
          swipeHandlers={swipeHandlers}
        />

        <GameStats 
          possibleWords={possibleWords}
          foundWords={foundWords}
        />

        <PauseMenu 
          score={score}
          onResume={resumeGame}
          onRestart={startGame}
          onMainMenu={goToMenu}
        />
      </div>
    );
  }

  // Playing screen
  return (
    <div className="App">
      <GameHeader 
        score={score} 
        onMenuClick={handleMenuClick}
      />

      <div className="score-message-container">
        {message && (
          <div className="score-message" key={message}>{message}</div>
        )}
      </div>

      <WordFormation currentWord={currentWord} />

      <LetterCircle
        letters={currentLetters}
        selectedIndices={selectedIndices}
        timeRemaining={timeRemaining}
        duration={INITIAL_TIME}
        swipeHandlers={swipeHandlers}
      />

      <GameStats 
        possibleWords={possibleWords}
        foundWords={foundWords}
      />
    </div>
  );
}

export default App;