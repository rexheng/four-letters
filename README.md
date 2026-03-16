# Four Letters

Fast-paced word puzzle game. Swipe or type through 4 letters to form valid words before the timer runs out.

**Play:** [four-letters.vercel.app](https://four-letters.vercel.app)

## Gameplay

- Each round gives you 4 letters and a 10-second timer
- Swipe (mobile) or type (desktop) the letters to form a valid English word
- Form words in under 1 second to build a speed bonus streak (up to 10x)
- The timer refills on each valid word — keep chaining to survive
- Difficulty scales as your score increases

## Controls

| Input | Action |
|-------|--------|
| Swipe / click | Select letters in order |
| Keyboard | Type letters directly |
| Backspace | Remove last letter |
| Ctrl+Backspace | Clear all letters |
| Menu (☰) | Pause |

## Getting Started

```bash
git clone https://github.com/rexheng/four-letters.git
cd four-letters
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Scoring

- 1 point per valid word
- Speed bonus: +1 to +10 for words formed under 1 second (streak-based)
- High scores and stats persist via localStorage

## Project Structure

```
src/
  components/
    GameHeader       Score and pause button
    WordFormation    Visual word builder
    LetterCircle     Letter buttons with timer ring
    GameStats        Possible words counter
    ResultsScreen    Game over screen
    MenuScreen       Start menu
    PauseMenu        In-game pause overlay
  hooks/
    useGameLogic     Core game state and logic
    useSwipeGesture  Touch/mouse gesture handling
    useKeyboardInput Keyboard input handling
  utils/
    storage          LocalStorage management
  data/
    letterSets       Pre-generated word puzzles (280+ sets)
```

## Stack

React 19.2, CSS3, LocalStorage API, SVG. PWA-ready.

## Licence

MIT
