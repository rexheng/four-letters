import { letterSets } from './letterSets';

// ============================================
// FREE DICTIONARY API INTEGRATION
// ============================================
// API: https://api.dictionaryapi.dev/api/v2/entries/en/{word}
// - Free, no API key required
// - Returns definitions, examples, phonetics
// - Rate limit: None specified (be respectful with requests)
// ============================================

const DICTIONARY_API_BASE = 'https://api.dictionaryapi.dev/api/v2/entries/en';

/**
 * Fetch definition and example from Free Dictionary API
 * @param {string} word - The word to look up (lowercase)
 * @returns {Promise<{definition: string|null, example: string|null}>}
 */
export async function fetchWordData(word) {
  try {
    const response = await fetch(`${DICTIONARY_API_BASE}/${word.toLowerCase()}`);
    
    if (!response.ok) {
      // Word not found in API (404) or other error
      return { definition: null, example: null };
    }
    
    const data = await response.json();
    
    // API returns an array; take the first entry
    const entry = data[0];
    if (!entry || !entry.meanings || entry.meanings.length === 0) {
      return { definition: null, example: null };
    }
    
    // Find first definition with an example, or just the first definition
    let bestDefinition = null;
    let bestExample = null;
    
    for (const meaning of entry.meanings) {
      for (const def of meaning.definitions) {
        if (!bestDefinition) {
          bestDefinition = def.definition;
        }
        if (def.example && !bestExample) {
          bestExample = def.example;
          bestDefinition = def.definition; // Prefer definition that has example
          break;
        }
      }
      if (bestExample) break;
    }
    
    return {
      definition: bestDefinition || null,
      example: bestExample || null
    };
    
  } catch (error) {
    console.error(`Error fetching definition for "${word}":`, error);
    return { definition: null, example: null };
  }
}

/**
 * Build master dictionary from letterSets
 * Returns alphabetically sorted array of word objects
 */
export function buildDictionary() {
  const dictionary = {};
  
  Object.entries(letterSets).forEach(([difficulty, sets]) => {
    sets.forEach(set => {
      set.possibleWords.forEach(word => {
        if (!dictionary[word]) {
          dictionary[word] = {
            word: word,
            letters: set.letters.slice().sort().join(''),
            difficulty: difficulty,
            anagrams: set.possibleWords.filter(w => w !== word),
            // Definition/example fetched on-demand via API
            definition: null,
            example: null,
            definitionLoaded: false
          };
        }
      });
    });
  });
  
  // Return sorted alphabetically
  return Object.values(dictionary).sort((a, b) => a.word.localeCompare(b.word));
}

/**
 * Get total word count for progress display
 */
export function getTotalWordCount() {
  return buildDictionary().length;
}

// ============================================
// DEFINITION CACHING (localStorage)
// ============================================
// Cache API responses to reduce requests and improve UX

const DEFINITION_CACHE_KEY = 'fourLetters_definitionCache';

export function getCachedDefinition(word) {
  try {
    const cache = JSON.parse(localStorage.getItem(DEFINITION_CACHE_KEY) || '{}');
    return cache[word.toUpperCase()] || null;
  } catch {
    return null;
  }
}

export function cacheDefinition(word, definition, example) {
  try {
    const cache = JSON.parse(localStorage.getItem(DEFINITION_CACHE_KEY) || '{}');
    cache[word.toUpperCase()] = {
      definition,
      example,
      cachedAt: Date.now()
    };
    localStorage.setItem(DEFINITION_CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.error('Error caching definition:', error);
  }
}

/**
 * Get definition with caching
 * First checks cache, then fetches from API if needed
 */
export async function getDefinitionWithCache(word) {
  // Check cache first
  const cached = getCachedDefinition(word);
  if (cached) {
    return {
      definition: cached.definition,
      example: cached.example
    };
  }
  
  // Fetch from API
  const result = await fetchWordData(word);
  
  // Cache the result (even if null, to avoid repeated failed requests)
  cacheDefinition(word, result.definition, result.example);
  
  return result;
}
