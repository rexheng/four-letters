import { useState, useCallback, useRef, useEffect } from 'react';

export const useSwipeGesture = (selectedIndices, onStart, onMove, onEnd, onRemove) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const sessionPathRef = useRef([]); // Track letters added during THIS swipe session only
  const lastTouchRef = useRef(null);
  const selectedIndicesRef = useRef(selectedIndices);
  
  // Keep the ref in sync with the prop
  useEffect(() => {
    selectedIndicesRef.current = selectedIndices;
  }, [selectedIndices]);

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
    const currentSelectedIndices = selectedIndicesRef.current;
    return (currentSelectedIndices && currentSelectedIndices.includes(letterIndex)) || 
           sessionPathRef.current.includes(letterIndex);
  }, []);

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
    
    // Use ref to get fresh selectedIndices value
    const currentSelectedIndices = selectedIndicesRef.current;
    
    // Check if this letter is already selected - if so, remove it
    if (currentSelectedIndices && currentSelectedIndices.includes(letterIndex)) {
      const positionInWord = currentSelectedIndices.indexOf(letterIndex);
      if (onRemove && positionInWord !== -1) {
        onRemove(positionInWord);
      }
      sessionPathRef.current = [];
      return; // Don't start drawing when removing
    }
    
    setIsDrawing(true);
    sessionPathRef.current = [letterIndex];
    onStart(letterIndex);
  }, [onStart, onRemove]);

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
    
    // Use ref to get fresh selectedIndices value
    const currentSelectedIndices = selectedIndicesRef.current;
    
    // Check if this letter is already selected - if so, remove it
    if (currentSelectedIndices && currentSelectedIndices.includes(letterIndex)) {
      const positionInWord = currentSelectedIndices.indexOf(letterIndex);
      if (onRemove && positionInWord !== -1) {
        onRemove(positionInWord);
      }
      sessionPathRef.current = [];
      return; // Don't start drawing when removing
    }
    
    setIsDrawing(true);
    sessionPathRef.current = [letterIndex];
    onStart(letterIndex);
  }, [onStart, onRemove]);

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
