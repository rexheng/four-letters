import { useState, useCallback, useRef, useEffect } from 'react';

export const useSwipeGesture = (selectedIndices, onStart, onMove, onEnd, onRemove) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const sessionPathRef = useRef([]); // Track letters added during THIS swipe session only
  const lastTouchRef = useRef(null);
  const selectedIndicesRef = useRef(selectedIndices);
  const touchHandledRef = useRef(false); // Prevent ghost mousedown after touch
  
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
  // Uses proximity-based detection for more generous touch recognition
  const findLetterAtPoint = useCallback((x, y) => {
    // First, try direct hit detection
    const elements = document.elementsFromPoint(x, y);
    for (const element of elements) {
      if (element && element.classList.contains('letter-button')) {
        const index = parseInt(element.dataset.index, 10);
        if (!isNaN(index)) {
          return index;
        }
      }
    }
    
    // If no direct hit, use proximity-based detection
    // Find all letter buttons and check if touch is within expanded hit radius
    const letterButtons = document.querySelectorAll('.letter-button');
    const HIT_RADIUS_MULTIPLIER = 1.4; // 40% larger hit area than visual button
    
    let closestIndex = null;
    let closestDistance = Infinity;
    
    for (const button of letterButtons) {
      const rect = button.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      const buttonRadius = Math.max(rect.width, rect.height) / 2;
      const expandedRadius = buttonRadius * HIT_RADIUS_MULTIPLIER;
      
      // Calculate distance from touch point to button center
      const distance = Math.sqrt(
        Math.pow(x - buttonCenterX, 2) + Math.pow(y - buttonCenterY, 2)
      );
      
      // Check if within expanded hit area and closer than any previous match
      if (distance <= expandedRadius && distance < closestDistance) {
        closestDistance = distance;
        closestIndex = parseInt(button.dataset.index, 10);
      }
    }
    
    return closestIndex;
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
      // Mark touch as handled to prevent ghost mousedown
      touchHandledRef.current = true;
      setTimeout(() => { touchHandledRef.current = false; }, 300);
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
    // Mark touch as handled to prevent ghost mousedown
    touchHandledRef.current = true;
    setTimeout(() => { touchHandledRef.current = false; }, 300);
    
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
    // Mark that touch was handled to prevent ghost mousedown
    touchHandledRef.current = true;
    setTimeout(() => { touchHandledRef.current = false; }, 300);
    
    if (!isDrawing) return;
    
    setIsDrawing(false);
    sessionPathRef.current = [];
    lastTouchRef.current = null;
    onEnd();
  }, [isDrawing, onEnd]);

  // Mouse event handlers (for desktop)
  const handleMouseDown = useCallback((e, letterIndex) => {
    e.preventDefault();
    
    // Skip if this is a ghost mousedown after a touch event
    if (touchHandledRef.current) {
      return;
    }
    
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
