import { useState, useCallback, useRef, useEffect } from 'react';

export const useSwipeGesture = (selectedIndices, onStart, onMove, onEnd, onRemove) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const sessionPathRef = useRef([]); // Track letters added during THIS swipe session only
  const lastTouchRef = useRef(null);

  // Prevent default touch behaviors on the document when drawing
  useEffect(() => {
    const preventDefaultTouch = (e) => {
      if (isDrawing) {
        e.preventDefault();
      }
    };

    // Add passive: false to allow preventDefault on touch events
    document.addEventListener('touchmove', preventDefaultTouch, { passive: false });
    
    return () => {
      document.removeEventListener('touchmove', preventDefaultTouch);
    };
  }, [isDrawing]);

  // Check if a letter is already selected (either from previous swipes or current session)
  const isLetterSelected = useCallback((letterIndex) => {
    return (selectedIndices && selectedIndices.includes(letterIndex)) || 
           sessionPathRef.current.includes(letterIndex);
  }, [selectedIndices]);

  // Find which letter element is at the given coordinates
  const findLetterAtPoint = useCallback((x, y) => {
    // Use elementsFromPoint for better touch detection on overlapping elements
    const elements = document.elementsFromPoint(x, y);
    for (const element of elements) {
      if (element && element.classList.contains('letter-button')) {
        const index = parseInt(element.dataset.index, 10);
        if (!isNaN(index)) {
          return index;
        }
      }
    }
    return null;
  }, []);

  // Touch event handlers
  const handleTouchStart = useCallback((e, letterIndex) => {
    e.preventDefault();
    e.stopPropagation();
    
    const touch = e.touches[0];
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    
    // Check if this letter is already selected - if so, remove it
    if (selectedIndices && selectedIndices.includes(letterIndex)) {
      const positionInWord = selectedIndices.indexOf(letterIndex);
      if (onRemove && positionInWord !== -1) {
        onRemove(positionInWord);
      }
      sessionPathRef.current = [];
      return; // Don't start drawing when removing
    }
    
    setIsDrawing(true);
    sessionPathRef.current = [letterIndex];
    onStart(letterIndex);
  }, [onStart, onRemove, selectedIndices]);

  const handleTouchMove = useCallback((e) => {
    if (!isDrawing) return;
    
    e.preventDefault();
    e.stopPropagation();

    const touch = e.touches[0];
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY };
    
    const letterIndex = findLetterAtPoint(touch.clientX, touch.clientY);

    if (letterIndex !== null && !isLetterSelected(letterIndex)) {
      sessionPathRef.current.push(letterIndex);
      onMove(letterIndex);
    }
  }, [isDrawing, findLetterAtPoint, onMove, isLetterSelected]);

  const handleTouchEnd = useCallback((e) => {
    if (!isDrawing) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    setIsDrawing(false);
    sessionPathRef.current = [];
    lastTouchRef.current = null;
    onEnd();
  }, [isDrawing, onEnd]);

  // Handle touch cancel (e.g., when a call comes in)
  const handleTouchCancel = useCallback((e) => {
    if (!isDrawing) return;
    
    setIsDrawing(false);
    sessionPathRef.current = [];
    lastTouchRef.current = null;
    onEnd();
  }, [isDrawing, onEnd]);

  // Mouse event handlers (for desktop)
  const handleMouseDown = useCallback((e, letterIndex) => {
    e.preventDefault();
    
    // Check if this letter is already selected - if so, remove it
    if (selectedIndices && selectedIndices.includes(letterIndex)) {
      const positionInWord = selectedIndices.indexOf(letterIndex);
      if (onRemove && positionInWord !== -1) {
        onRemove(positionInWord);
      }
      sessionPathRef.current = [];
      return; // Don't start drawing when removing
    }
    
    setIsDrawing(true);
    sessionPathRef.current = [letterIndex];
    onStart(letterIndex);
  }, [onStart, onRemove, selectedIndices]);

  const handleMouseEnter = useCallback((letterIndex) => {
    if (!isDrawing) return;
    
    if (!isLetterSelected(letterIndex)) {
      sessionPathRef.current.push(letterIndex);
      onMove(letterIndex);
    }
  }, [isDrawing, onMove, isLetterSelected]);

  const handleMouseUp = useCallback(() => {
    if (!isDrawing) return;
    
    setIsDrawing(false);
    sessionPathRef.current = [];
    onEnd();
  }, [isDrawing, onEnd]);

  return {
    isDrawing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel,
    handleMouseDown,
    handleMouseEnter,
    handleMouseUp
  };
};
