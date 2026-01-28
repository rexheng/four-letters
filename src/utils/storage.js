// Local storage utilities for persisting game data

const STORAGE_KEYS = {
  HIGH_SCORE: 'fourLetters_highScore',
  STATISTICS: 'fourLetters_statistics',
  DICTIONARY: 'fourLetters_dictionary'
};

// High Score
export const getHighScore = () => {
  const stored = localStorage.getItem(STORAGE_KEYS.HIGH_SCORE);
  return stored ? parseInt(stored, 10) : 0;
};

export const setHighScore = (score) => {
  localStorage.setItem(STORAGE_KEYS.HIGH_SCORE, score.toString());
};

// Statistics
export const getStatistics = () => {
  const stored = localStorage.getItem(STORAGE_KEYS.STATISTICS);
  return stored ? JSON.parse(stored) : {
    totalWords: 0,
    bestStreak: 0,
    totalGames: 0,
    averageSpeed: 0,
    totalTime: 0
  };
};

export const setStatistics = (stats) => {
  localStorage.setItem(STORAGE_KEYS.STATISTICS, JSON.stringify(stats));
};

// Dictionary (words found by the player)
export const getDictionary = () => {
  const stored = localStorage.getItem(STORAGE_KEYS.DICTIONARY);
  return stored ? JSON.parse(stored) : [];
};

export const addToDictionary = (word) => {
  const dictionary = getDictionary();
  if (!dictionary.includes(word)) {
    dictionary.push(word);
    localStorage.setItem(STORAGE_KEYS.DICTIONARY, JSON.stringify(dictionary));
  }
};
