import { useEffect, useCallback, useRef } from 'react';

export const useKeyboardInput = (letters, onStartWord, onContinueWord, onEndWord, onRemoveLetter, onClearWord, gameStatus) => {
  const isFormingWordRef = useRef(false);
  const selectedIndicesRef = useRef([]);
  const currentWordRef = useRef('');

  const handleKeyPress = useCallback((event) => {
    if (gameStatus !== 'playing') return;
    
    // Handle Ctrl+Backspace to clear all
    if (event.key === 'Backspace' && event.ctrlKey) {
      event.preventDefault();
      isFormingWordRef.current = false;
      selectedIndicesRef.current = [];
      currentWordRef.current = '';
      onClearWord();
      return;
    }
    
    // Handle Backspace to remove last letter
    if (event.key === 'Backspace') {
      event.preventDefault();
      if (selectedIndicesRef.current.length > 0) {
        selectedIndicesRef.current.pop();
        currentWordRef.current = currentWordRef.current.slice(0, -1);
        onRemoveLetter();
        if (selectedIndicesRef.current.length === 0) {
          isFormingWordRef.current = false;
        }
      }
      return;
    }
    
    const key = event.key.toUpperCase();
    
    // Only allow letters that appear on screen
    const letterIndex = letters.findIndex((letter, idx) => 
      letter === key && !selectedIndicesRef.current.includes(idx)
    );
    
    if (letterIndex !== -1) {
      if (!isFormingWordRef.current) {
        // Start a new word
        isFormingWordRef.current = true;
        selectedIndicesRef.current = [letterIndex];
        currentWordRef.current = letters[letterIndex];
        onStartWord(letterIndex);
      } else {
        // Continue the word
        selectedIndicesRef.current.push(letterIndex);
        currentWordRef.current += letters[letterIndex];
        onContinueWord(letterIndex);
      }
      
      // Check if we have 4 letters - instant validation
      if (selectedIndicesRef.current.length === 4) {
        const completedWord = currentWordRef.current;
        // Reset refs immediately
        isFormingWordRef.current = false;
        selectedIndicesRef.current = [];
        currentWordRef.current = '';
        // Pass the completed word directly to bypass async state issues
        onEndWord(completedWord);
      }
    }
  }, [letters, gameStatus, onStartWord, onContinueWord, onEndWord, onRemoveLetter, onClearWord]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};
