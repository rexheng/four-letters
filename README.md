# Four Letters - Word Game

A fast-paced React word puzzle game where players form 4-letter words by swiping through letters before time runs out.

## Features

- **Swipe/Click Gameplay**: Form words by swiping or clicking through letter buttons
- **Keyboard Support**: Type letters on desktop for instant word formation
- **Timer System**: 10-second countdown with visual progress ring
- **Speed Bonuses**: Chain quick words for bonus points (up to 10x multiplier)
- **Weighted Difficulty**: Probability-based difficulty scaling from easy to expert
- **Pause Menu**: Pause, resume, restart, or return to menu mid-game
- **Local Storage**: Persists high scores, statistics, and word dictionary
- **PWA Ready**: Installable as a mobile app

## How to Play

1. Swipe or click through the 4 letters to form valid words
2. On desktop, type letters on your keyboard for quick input
3. Form words in under 1 second for speed bonuses
4. Each valid word advances you to a new letter set
5. Keep playing until the timer runs out

## Controls

- **Mouse/Touch**: Click or swipe through letters
- **Keyboard**: 
  - Type letters to select them
  - `Backspace` to remove the last letter
  - `Ctrl+Backspace` to clear all letters
- **Menu Button (☰)**: Pause the game

## Getting Started

```bash
npm install
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

```bash
npm run build
```

Builds the app for production to the `build` folder

## Game Mechanics

- **Base Score**: 1 point per valid word
- **Speed Bonus**: +1 to +10 points for words formed under 1 second (incremental streak)
- **Timer**: 10 seconds per letter set, refills on valid words
- **Difficulty**: Weighted probability scaling based on score
  - Low scores favor easy words with multiple anagrams
  - Higher scores increase chance of harder words with fewer solutions

## Project Structure

```
src/
├── components/
│   ├── GameHeader       # Score and pause button
│   ├── WordFormation    # Visual word builder
│   ├── LetterCircle     # Letter buttons with timer ring
│   ├── GameStats        # Possible words counter
│   ├── ResultsScreen    # Game over screen
│   ├── MenuScreen       # Start menu
│   └── PauseMenu        # In-game pause overlay
├── hooks/
│   ├── useGameLogic     # Core game state and logic
│   ├── useSwipeGesture  # Touch/mouse gesture handling
│   └── useKeyboardInput # Keyboard input handling
├── utils/
│   └── storage          # LocalStorage management
└── data/
    └── letterSets       # Pre-generated word puzzles (280+ sets)
```

## Technologies

- React 19.2
- React Hooks for state management
- CSS3 animations and gradients
- LocalStorage API
- SVG for timer ring

## License

MIT
