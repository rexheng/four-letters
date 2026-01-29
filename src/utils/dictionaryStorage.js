// Dictionary storage utilities for tracking unlocked words

const STORAGE_KEY = 'fourLetters_unlockedWords';
const NEW_WORD_THRESHOLD_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Get all unlocked words from storage
 * @returns {Object} Object with word keys and unlock data
 */
export function getUnlockedWords() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Unlock a word in the dictionary
 * @param {string} word - The word to unlock
 * @returns {Object} Updated unlocked words object
 */
export function unlockWord(word) {
  const unlocked = getUnlockedWords();
  const upperWord = word.toUpperCase();
  
  if (!unlocked[upperWord]) {
    unlocked[upperWord] = {
      unlockedAt: Date.now(),
      isNew: true
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
  }
  return unlocked;
}

/**
 * Mark a word as seen (removes "new" badge)
 * @param {string} word - The word to mark as seen
 */
export function markWordAsSeen(word) {
  const unlocked = getUnlockedWords();
  const upperWord = word.toUpperCase();
  
  if (unlocked[upperWord]) {
    unlocked[upperWord].isNew = false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlocked));
  }
}

/**
 * Check if a word is "new" (unlocked within last 24 hours and not seen)
 * @param {string} word - The word to check
 * @returns {boolean} True if word is new
 */
export function isWordNew(word) {
  const unlocked = getUnlockedWords();
  const upperWord = word.toUpperCase();
  
  if (!unlocked[upperWord]) return false;
  
  const timeSinceUnlock = Date.now() - unlocked[upperWord].unlockedAt;
  return timeSinceUnlock < NEW_WORD_THRESHOLD_MS && unlocked[upperWord].isNew;
}

/**
 * Get count of unlocked words
 * @returns {number} Number of unlocked words
 */
export function getUnlockedCount() {
  return Object.keys(getUnlockedWords()).length;
}

/**
 * Check if a word is unlocked
 * @param {string} word - The word to check
 * @returns {boolean} True if word is unlocked
 */
export function isWordUnlocked(word) {
  const unlocked = getUnlockedWords();
  return !!unlocked[word.toUpperCase()];
}

/**
 * Get all new words (unlocked within last 24 hours and marked as new)
 * @returns {string[]} Array of new word strings
 */
export function getNewWords() {
  const unlocked = getUnlockedWords();
  const now = Date.now();
  
  return Object.entries(unlocked)
    .filter(([word, data]) => {
      const timeSinceUnlock = now - data.unlockedAt;
      return timeSinceUnlock < NEW_WORD_THRESHOLD_MS && data.isNew;
    })
    .map(([word]) => word);
}
