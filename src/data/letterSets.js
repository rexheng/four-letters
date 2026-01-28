// Pre-generated letter sets with their possible 4-letter words
// Each possibleWords array contains ONLY words that can be formed by rearranging the 4 letters
// Difficulty Criteria:
//   Easy: 2+ valid anagrams with at least 1 very common word
//   Medium: 2 valid anagrams OR 1 common single-anagram word
//   Hard: 1 valid anagram that requires thought, less obvious letter arrangements
//   Expert: Common letters forming uncommon words, unusual vowel placements, challenging recognition

export const letterSets = {
  easy: [
    // === CLASSIC MULTI-ANAGRAM SETS (3+ words) ===
    { letters: ['S', 'T', 'A', 'R'], possibleWords: ['STAR', 'RATS', 'ARTS', 'TARS'], difficulty: 'easy' },
    { letters: ['M', 'E', 'A', 'T'], possibleWords: ['MEAT', 'MATE', 'TEAM', 'TAME', 'META'], difficulty: 'easy' },
    { letters: ['S', 'E', 'A', 'T'], possibleWords: ['SEAT', 'EAST', 'SATE', 'EATS', 'TEAS'], difficulty: 'easy' },
    { letters: ['S', 'A', 'L', 'E'], possibleWords: ['SALE', 'SEAL', 'LEAS', 'ALES'], difficulty: 'easy' },
    { letters: ['P', 'A', 'L', 'E'], possibleWords: ['PALE', 'LEAP', 'PEAL', 'PLEA'], difficulty: 'easy' },
    { letters: ['M', 'A', 'N', 'E'], possibleWords: ['MANE', 'NAME', 'MEAN', 'AMEN'], difficulty: 'easy' },
    { letters: ['S', 'L', 'A', 'P'], possibleWords: ['SLAP', 'LAPS', 'ALPS', 'PALS'], difficulty: 'easy' },
    { letters: ['S', 'N', 'A', 'P'], possibleWords: ['SNAP', 'NAPS', 'PANS', 'SPAN'], difficulty: 'easy' },
    { letters: ['T', 'R', 'A', 'P'], possibleWords: ['TRAP', 'RAPT', 'TARP', 'PART', 'PRAT'], difficulty: 'easy' },
    { letters: ['S', 'P', 'O', 'T'], possibleWords: ['SPOT', 'STOP', 'POTS', 'TOPS', 'OPTS', 'POST'], difficulty: 'easy' },
    { letters: ['S', 'K', 'I', 'N'], possibleWords: ['SKIN', 'INKS', 'SINK', 'KINS'], difficulty: 'easy' },
    { letters: ['S', 'P', 'I', 'N'], possibleWords: ['SPIN', 'PINS', 'NIPS', 'SNIP'], difficulty: 'easy' },
    { letters: ['S', 'T', 'E', 'P'], possibleWords: ['STEP', 'PETS', 'PEST', 'SEPT'], difficulty: 'easy' },
    { letters: ['N', 'E', 'S', 'T'], possibleWords: ['NEST', 'NETS', 'SENT', 'TENS'], difficulty: 'easy' },
    { letters: ['P', 'A', 'S', 'T'], possibleWords: ['PAST', 'PATS', 'TAPS', 'SPAT'], difficulty: 'easy' },
    { letters: ['L', 'A', 'S', 'T'], possibleWords: ['LAST', 'SALT', 'SLAT', 'LATS'], difficulty: 'easy' },
    { letters: ['C', 'A', 'S', 'T'], possibleWords: ['CAST', 'CATS', 'SCAT', 'ACTS'], difficulty: 'easy' },
    { letters: ['S', 'N', 'O', 'W'], possibleWords: ['SNOW', 'SOWN', 'OWNS', 'NOWS'], difficulty: 'easy' },
    { letters: ['S', 'U', 'R', 'E'], possibleWords: ['SURE', 'RUSE', 'USER', 'RUES'], difficulty: 'easy' },
    { letters: ['T', 'I', 'M', 'E'], possibleWords: ['TIME', 'MITE', 'EMIT', 'ITEM'], difficulty: 'easy' },
    { letters: ['E', 'V', 'I', 'L'], possibleWords: ['EVIL', 'VILE', 'LIVE', 'VEIL'], difficulty: 'easy' },
    { letters: ['R', 'O', 'S', 'E'], possibleWords: ['ROSE', 'ORES', 'SORE', 'ROES', 'EROS'], difficulty: 'easy' },
    { letters: ['T', 'I', 'D', 'E'], possibleWords: ['TIDE', 'TIED', 'DIET', 'EDIT'], difficulty: 'easy' },
    { letters: ['T', 'H', 'I', 'S'], possibleWords: ['THIS', 'HITS', 'HIST'], difficulty: 'easy' },
    { letters: ['T', 'H', 'U', 'S'], possibleWords: ['THUS', 'SHUT', 'HUTS', 'TUSH'], difficulty: 'easy' },
    
    // === STRONG 3-ANAGRAM SETS ===
    { letters: ['C', 'A', 'R', 'E'], possibleWords: ['CARE', 'RACE', 'ACRE'], difficulty: 'easy' },
    { letters: ['T', 'E', 'A', 'R'], possibleWords: ['TEAR', 'RATE', 'TARE'], difficulty: 'easy' },
    { letters: ['T', 'A', 'L', 'E'], possibleWords: ['TALE', 'LATE', 'TEAL'], difficulty: 'easy' },
    { letters: ['P', 'A', 'N', 'E'], possibleWords: ['PANE', 'NEAP', 'NAPE'], difficulty: 'easy' },
    { letters: ['W', 'A', 'N', 'E'], possibleWords: ['WANE', 'ANEW', 'WEAN'], difficulty: 'easy' },
    { letters: ['L', 'O', 'S', 'T'], possibleWords: ['LOST', 'LOTS', 'SLOT'], difficulty: 'easy' },
    { letters: ['L', 'I', 'S', 'T'], possibleWords: ['LIST', 'SLIT', 'SILT'], difficulty: 'easy' },
    { letters: ['F', 'I', 'S', 'T'], possibleWords: ['FIST', 'FITS', 'SIFT'], difficulty: 'easy' },
    { letters: ['L', 'O', 'O', 'P'], possibleWords: ['LOOP', 'POOL', 'POLO'], difficulty: 'easy' },
    { letters: ['G', 'R', 'A', 'B'], possibleWords: ['GRAB', 'BRAG', 'GARB'], difficulty: 'easy' },
    { letters: ['S', 'W', 'A', 'P'], possibleWords: ['SWAP', 'WASP', 'PAWS'], difficulty: 'easy' },
    { letters: ['S', 'H', 'O', 'P'], possibleWords: ['SHOP', 'HOPS', 'POSH'], difficulty: 'easy' },
    { letters: ['W', 'E', 'S', 'T'], possibleWords: ['WEST', 'STEW', 'WETS'], difficulty: 'easy' },
    { letters: ['M', 'A', 'S', 'T'], possibleWords: ['MAST', 'MATS', 'TAMS'], difficulty: 'easy' },
    { letters: ['S', 'E', 'N', 'D'], possibleWords: ['SEND', 'ENDS', 'DENS'], difficulty: 'easy' },
    { letters: ['F', 'L', 'O', 'W'], possibleWords: ['FLOW', 'FOWL', 'WOLF'], difficulty: 'easy' },
    { letters: ['S', 'L', 'O', 'W'], possibleWords: ['SLOW', 'OWLS', 'LOWS'], difficulty: 'easy' },
    { letters: ['D', 'O', 'S', 'E'], possibleWords: ['DOSE', 'ODES', 'DOES'], difficulty: 'easy' },
    { letters: ['N', 'O', 'S', 'E'], possibleWords: ['NOSE', 'ONES', 'EONS'], difficulty: 'easy' },
    { letters: ['R', 'I', 'S', 'E'], possibleWords: ['RISE', 'SIRE', 'IRES'], difficulty: 'easy' },
    { letters: ['S', 'I', 'D', 'E'], possibleWords: ['SIDE', 'DIES', 'IDES'], difficulty: 'easy' },
    { letters: ['L', 'A', 'K', 'E'], possibleWords: ['LAKE', 'LEAK', 'KALE'], difficulty: 'easy' },
    { letters: ['F', 'A', 'T', 'E'], possibleWords: ['FATE', 'FEAT', 'FETA'], difficulty: 'easy' },
    { letters: ['S', 'A', 'V', 'E'], possibleWords: ['SAVE', 'VASE', 'AVES'], difficulty: 'easy' },
    { letters: ['M', 'A', 'D', 'E'], possibleWords: ['MADE', 'DAME', 'MEAD'], difficulty: 'easy' },
    { letters: ['C', 'O', 'D', 'E'], possibleWords: ['CODE', 'COED', 'DECO'], difficulty: 'easy' },
    { letters: ['M', 'O', 'D', 'E'], possibleWords: ['MODE', 'DOME', 'DEMO'], difficulty: 'easy' },
    { letters: ['R', 'O', 'P', 'E'], possibleWords: ['ROPE', 'PORE', 'REPO'], difficulty: 'easy' },
    { letters: ['H', 'O', 'S', 'E'], possibleWords: ['HOSE', 'HOES', 'SHOE'], difficulty: 'easy' },
    { letters: ['R', 'I', 'D', 'E'], possibleWords: ['RIDE', 'DIRE', 'IRED'], difficulty: 'easy' },
    { letters: ['S', 'O', 'I', 'L'], possibleWords: ['SOIL', 'OILS', 'SILO'], difficulty: 'easy' },
    { letters: ['A', 'R', 'M', 'S'], possibleWords: ['ARMS', 'MARS', 'RAMS'], difficulty: 'easy' },
    { letters: ['U', 'S', 'E', 'D'], possibleWords: ['USED', 'DUES', 'SUED'], difficulty: 'easy' },
    { letters: ['E', 'A', 'S', 'Y'], possibleWords: ['EASY', 'AYES', 'YEAS'], difficulty: 'easy' },
    { letters: ['E', 'L', 'S', 'E'], possibleWords: ['ELSE', 'EELS', 'LEES'], difficulty: 'easy' },
    { letters: ['P', 'O', 'S', 'E'], possibleWords: ['POSE', 'EPOS', 'PESO', 'OPES'], difficulty: 'easy' },
    
    // === 2-ANAGRAM SETS WITH COMMON WORDS ===
    { letters: ['O', 'P', 'E', 'N'], possibleWords: ['OPEN', 'PEON', 'NOPE'], difficulty: 'easy' },
    { letters: ['O', 'V', 'E', 'R'], possibleWords: ['OVER', 'ROVE'], difficulty: 'easy' },
    { letters: ['E', 'V', 'E', 'R'], possibleWords: ['EVER', 'VEER'], difficulty: 'easy' },
    { letters: ['E', 'A', 'C', 'H'], possibleWords: ['EACH', 'ACHE'], difficulty: 'easy' },
    { letters: ['A', 'B', 'L', 'E'], possibleWords: ['ABLE', 'BALE'], difficulty: 'easy' },
    { letters: ['I', 'D', 'E', 'A'], possibleWords: ['IDEA', 'AIDE'], difficulty: 'easy' },
    { letters: ['W', 'H', 'A', 'T'], possibleWords: ['WHAT', 'THAW'], difficulty: 'easy' },
    { letters: ['W', 'H', 'E', 'N'], possibleWords: ['WHEN', 'HEWN'], difficulty: 'easy' },
    { letters: ['R', 'O', 'C', 'K'], possibleWords: ['ROCK', 'CORK'], difficulty: 'easy' },
    { letters: ['C', 'O', 'A', 'T'], possibleWords: ['COAT', 'TACO'], difficulty: 'easy' },
    { letters: ['G', 'O', 'A', 'T'], possibleWords: ['GOAT', 'TOGA'], difficulty: 'easy' },
    { letters: ['M', 'O', 'A', 'T'], possibleWords: ['MOAT', 'ATOM'], difficulty: 'easy' },
    { letters: ['D', 'R', 'A', 'W'], possibleWords: ['DRAW', 'WARD'], difficulty: 'easy' },
    { letters: ['D', 'R', 'A', 'G'], possibleWords: ['DRAG', 'GRAD'], difficulty: 'easy' },
    { letters: ['G', 'R', 'I', 'N'], possibleWords: ['GRIN', 'RING'], difficulty: 'easy' },
    { letters: ['S', 'H', 'I', 'P'], possibleWords: ['SHIP', 'HIPS'], difficulty: 'easy' },
    { letters: ['D', 'R', 'O', 'P'], possibleWords: ['DROP', 'PROD'], difficulty: 'easy' },
    { letters: ['W', 'A', 'N', 'D'], possibleWords: ['WAND', 'DAWN'], difficulty: 'easy' },
    { letters: ['D', 'E', 'N', 'T'], possibleWords: ['DENT', 'TEND'], difficulty: 'easy' },
    { letters: ['R', 'E', 'N', 'T'], possibleWords: ['RENT', 'TERN'], difficulty: 'easy' },
    { letters: ['W', 'E', 'N', 'T'], possibleWords: ['WENT', 'NEWT'], difficulty: 'easy' },
    { letters: ['R', 'O', 'O', 'M'], possibleWords: ['ROOM', 'MOOR'], difficulty: 'easy' },
    { letters: ['D', 'O', 'O', 'M'], possibleWords: ['DOOM', 'MOOD'], difficulty: 'easy' },
    { letters: ['S', 'O', 'A', 'R'], possibleWords: ['SOAR', 'OARS'], difficulty: 'easy' },
    { letters: ['R', 'U', 'L', 'E'], possibleWords: ['RULE', 'LURE'], difficulty: 'easy' },
    { letters: ['P', 'A', 'G', 'E'], possibleWords: ['PAGE', 'GAPE'], difficulty: 'easy' },
    { letters: ['R', 'A', 'G', 'E'], possibleWords: ['RAGE', 'GEAR'], difficulty: 'easy' },
    { letters: ['S', 'A', 'G', 'E'], possibleWords: ['SAGE', 'AGES'], difficulty: 'easy' },
    { letters: ['T', 'A', 'K', 'E'], possibleWords: ['TAKE', 'TEAK'], difficulty: 'easy' },
    { letters: ['W', 'A', 'K', 'E'], possibleWords: ['WAKE', 'WEAK'], difficulty: 'easy' },
    { letters: ['B', 'A', 'K', 'E'], possibleWords: ['BAKE', 'BEAK'], difficulty: 'easy' },
    { letters: ['C', 'A', 'S', 'E'], possibleWords: ['CASE', 'ACES'], difficulty: 'easy' },
    { letters: ['P', 'A', 'C', 'E'], possibleWords: ['PACE', 'CAPE'], difficulty: 'easy' },
    { letters: ['L', 'O', 'N', 'E'], possibleWords: ['LONE', 'NOEL'], difficulty: 'easy' },
    { letters: ['N', 'O', 'D', 'E'], possibleWords: ['NODE', 'DONE'], difficulty: 'easy' },
    { letters: ['N', 'O', 'T', 'E'], possibleWords: ['NOTE', 'TONE'], difficulty: 'easy' },
    { letters: ['V', 'O', 'T', 'E'], possibleWords: ['VOTE', 'VETO'], difficulty: 'easy' },
    { letters: ['T', 'O', 'U', 'R'], possibleWords: ['TOUR', 'ROUT'], difficulty: 'easy' },
    { letters: ['S', 'O', 'U', 'R'], possibleWords: ['SOUR', 'OURS'], difficulty: 'easy' },
    { letters: ['C', 'O', 'I', 'N'], possibleWords: ['COIN', 'ICON'], difficulty: 'easy' },
    { letters: ['E', 'A', 'R', 'N'], possibleWords: ['EARN', 'NEAR'], difficulty: 'easy' },
    { letters: ['B', 'A', 'T', 'H'], possibleWords: ['BATH', 'BAHT'], difficulty: 'easy' },
    { letters: ['S', 'H', 'O', 'W'], possibleWords: ['SHOW', 'HOWS'], difficulty: 'easy' },
    { letters: ['K', 'N', 'O', 'W'], possibleWords: ['KNOW', 'WONK'], difficulty: 'easy' },
    { letters: ['W', 'I', 'T', 'H'], possibleWords: ['WITH', 'WHIT'], difficulty: 'easy' }
  ],
  
  medium: [
    // === 2 ANAGRAM SETS - Common word pairs ===
    { letters: ['B', 'E', 'A', 'R'], possibleWords: ['BEAR', 'BARE'], difficulty: 'medium' },
    { letters: ['H', 'E', 'A', 'T'], possibleWords: ['HEAT', 'HATE'], difficulty: 'medium' },
    { letters: ['L', 'O', 'V', 'E'], possibleWords: ['LOVE', 'VOLE'], difficulty: 'medium' },
    { letters: ['L', 'I', 'F', 'E'], possibleWords: ['LIFE', 'FILE'], difficulty: 'medium' },
    { letters: ['C', 'A', 'N', 'E'], possibleWords: ['CANE', 'ACNE'], difficulty: 'medium' },
    { letters: ['L', 'A', 'N', 'E'], possibleWords: ['LANE', 'LEAN'], difficulty: 'medium' },
    { letters: ['C', 'R', 'A', 'B'], possibleWords: ['CRAB', 'CARB'], difficulty: 'medium' },
    { letters: ['M', 'I', 'S', 'T'], possibleWords: ['MIST', 'SMIT'], difficulty: 'medium' },
    { letters: ['B', 'E', 'S', 'T'], possibleWords: ['BEST', 'BETS'], difficulty: 'medium' },
    { letters: ['B', 'L', 'O', 'W'], possibleWords: ['BLOW', 'BOWL'], difficulty: 'medium' },
    { letters: ['F', 'I', 'R', 'E'], possibleWords: ['FIRE', 'RIFE'], difficulty: 'medium' },
    { letters: ['D', 'O', 'O', 'R'], possibleWords: ['DOOR', 'ODOR'], difficulty: 'medium' },
    { letters: ['H', 'I', 'D', 'E'], possibleWords: ['HIDE', 'HIED'], difficulty: 'medium' },
    { letters: ['V', 'I', 'N', 'E'], possibleWords: ['VINE', 'VEIN'], difficulty: 'medium' },
    { letters: ['L', 'I', 'N', 'E'], possibleWords: ['LINE', 'LIEN'], difficulty: 'medium' },
    { letters: ['M', 'I', 'N', 'E'], possibleWords: ['MINE', 'MIEN'], difficulty: 'medium' },
    { letters: ['S', 'I', 'T', 'E'], possibleWords: ['SITE', 'TIES'], difficulty: 'medium' },
    { letters: ['D', 'I', 'V', 'E'], possibleWords: ['DIVE', 'VIED'], difficulty: 'medium' },
    { letters: ['F', 'A', 'C', 'E'], possibleWords: ['FACE', 'CAFE'], difficulty: 'medium' },
    { letters: ['F', 'A', 'D', 'E'], possibleWords: ['FADE', 'DEAF'], difficulty: 'medium' },
    { letters: ['W', 'A', 'D', 'E'], possibleWords: ['WADE', 'AWED'], difficulty: 'medium' },
    { letters: ['D', 'A', 'Z', 'E'], possibleWords: ['DAZE', 'ADZE'], difficulty: 'medium' },
    { letters: ['W', 'R', 'A', 'P'], possibleWords: ['WRAP', 'WARP'], difficulty: 'medium' },
    { letters: ['K', 'N', 'E', 'E'], possibleWords: ['KNEE', 'KEEN'], difficulty: 'medium' },
    { letters: ['F', 'R', 'E', 'E'], possibleWords: ['FREE', 'REEF'], difficulty: 'medium' },
    { letters: ['K', 'E', 'E', 'P'], possibleWords: ['KEEP', 'PEEK'], difficulty: 'medium' },
    { letters: ['D', 'U', 'S', 'T'], possibleWords: ['DUST', 'STUD'], difficulty: 'medium' },
    { letters: ['C', 'O', 'L', 'T'], possibleWords: ['COLT', 'CLOT'], difficulty: 'medium' },
    { letters: ['F', 'E', 'L', 'T'], possibleWords: ['FELT', 'LEFT'], difficulty: 'medium' },
    { letters: ['F', 'O', 'R', 'M'], possibleWords: ['FORM', 'FROM'], difficulty: 'medium' },
    { letters: ['B', 'L', 'U', 'E'], possibleWords: ['BLUE', 'LUBE'], difficulty: 'medium' },
    { letters: ['G', 'H', 'O', 'S'], possibleWords: ['GOSH', 'HOGS'], difficulty: 'medium' },
    { letters: ['S', 'O', 'U', 'P'], possibleWords: ['SOUP', 'OPUS'], difficulty: 'medium' },
    { letters: ['L', 'E', 'E', 'R'], possibleWords: ['LEER', 'REEL'], difficulty: 'medium' },
    
    // === COMMON SINGLE-WORD MEDIUM ===
    { letters: ['T', 'H', 'E', 'M'], possibleWords: ['THEM'], difficulty: 'medium' },
    { letters: ['T', 'H', 'E', 'N'], possibleWords: ['THEN'], difficulty: 'medium' },
    { letters: ['C', 'O', 'U', 'P'], possibleWords: ['COUP'], difficulty: 'medium' },
    { letters: ['Y', 'O', 'U', 'R'], possibleWords: ['YOUR'], difficulty: 'medium' },
    { letters: ['P', 'O', 'U', 'T'], possibleWords: ['POUT'], difficulty: 'medium' },
    { letters: ['B', 'O', 'U', 'T'], possibleWords: ['BOUT'], difficulty: 'medium' },
    { letters: ['V', 'O', 'I', 'D'], possibleWords: ['VOID'], difficulty: 'medium' },
    { letters: ['A', 'U', 'T', 'O'], possibleWords: ['AUTO'], difficulty: 'medium' },
    { letters: ['H', 'A', 'U', 'L'], possibleWords: ['HAUL'], difficulty: 'medium' },
    { letters: ['M', 'A', 'U', 'L'], possibleWords: ['MAUL'], difficulty: 'medium' },
    { letters: ['A', 'N', 'T', 'I'], possibleWords: ['ANTI'], difficulty: 'medium' },
    { letters: ['A', 'L', 'S', 'O'], possibleWords: ['ALSO'], difficulty: 'medium' },
    { letters: ['A', 'W', 'A', 'Y'], possibleWords: ['AWAY'], difficulty: 'medium' },
    { letters: ['A', 'C', 'I', 'D'], possibleWords: ['ACID'], difficulty: 'medium' },
    { letters: ['I', 'N', 'T', 'O'], possibleWords: ['INTO'], difficulty: 'medium' },
    { letters: ['I', 'R', 'O', 'N'], possibleWords: ['IRON',"NOIR"], difficulty: 'medium' },
    { letters: ['U', 'N', 'D', 'O'], possibleWords: ['UNDO'], difficulty: 'medium' },
    { letters: ['U', 'P', 'O', 'N'], possibleWords: ['UPON'], difficulty: 'medium' },
    { letters: ['W', 'I', 'D', 'E'], possibleWords: ['WIDE'], difficulty: 'medium' },
    { letters: ['W', 'I', 'F', 'E'], possibleWords: ['WIFE'], difficulty: 'medium' },
    { letters: ['W', 'I', 'S', 'E'], possibleWords: ['WISE'], difficulty: 'medium' },
    { letters: ['R', 'E', 'S', 'T'], possibleWords: ['REST'], difficulty: 'medium' },
    { letters: ['G', 'R', 'O', 'W'], possibleWords: ['GROW'], difficulty: 'medium' },
    { letters: ['H', 'A', 'Z', 'E'], possibleWords: ['HAZE'], difficulty: 'medium' },
    { letters: ['M', 'A', 'Z', 'E'], possibleWords: ['MAZE'], difficulty: 'medium' },
    { letters: ['G', 'A', 'Z', 'E'], possibleWords: ['GAZE'], difficulty: 'medium' },
    { letters: ['T', 'R', 'E', 'E'], possibleWords: ['TREE'], difficulty: 'medium' },
    { letters: ['B', 'E', 'E', 'R'], possibleWords: ['BEER'], difficulty: 'medium' },
    { letters: ['D', 'E', 'E', 'R'], possibleWords: ['DEER'], difficulty: 'medium' },
    { letters: ['B', 'E', 'E', 'F'], possibleWords: ['BEEF'], difficulty: 'medium' },
    { letters: ['F', 'E', 'E', 'L'], possibleWords: ['FEEL'], difficulty: 'medium' },
    { letters: ['H', 'E', 'E', 'L'], possibleWords: ['HEEL'], difficulty: 'medium' },
    { letters: ['W', 'E', 'E', 'K'], possibleWords: ['WEEK'], difficulty: 'medium' },
    { letters: ['S', 'E', 'E', 'D'], possibleWords: ['SEED'], difficulty: 'medium' },
    { letters: ['F', 'E', 'E', 'D'], possibleWords: ['FEED'], difficulty: 'medium' },
    { letters: ['N', 'E', 'E', 'D'], possibleWords: ['NEED'], difficulty: 'medium' },
    { letters: ['D', 'E', 'E', 'P'], possibleWords: ['DEEP'], difficulty: 'medium' },
    { letters: ['W', 'O', 'R', 'K'], possibleWords: ['WORK'], difficulty: 'medium' },
    { letters: ['W', 'O', 'R', 'D'], possibleWords: ['WORD'], difficulty: 'medium' },
    { letters: ['H', 'O', 'M', 'E'], possibleWords: ['HOME'], difficulty: 'medium' },
    { letters: ['K', 'I', 'N', 'D'], possibleWords: ['KIND'], difficulty: 'medium' },
    { letters: ['M', 'I', 'N', 'D'], possibleWords: ['MIND'], difficulty: 'medium' },
    { letters: ['W', 'I', 'N', 'D'], possibleWords: ['WIND'], difficulty: 'medium' },
    { letters: ['F', 'I', 'N', 'D'], possibleWords: ['FIND'], difficulty: 'medium' },
    { letters: ['G', 'O', 'L', 'D'], possibleWords: ['GOLD'], difficulty: 'medium' },
    { letters: ['W', 'I', 'L', 'D'], possibleWords: ['WILD'], difficulty: 'medium' },
    { letters: ['H', 'A', 'N', 'D'], possibleWords: ['HAND'], difficulty: 'medium' },
    { letters: ['B', 'A', 'N', 'D'], possibleWords: ['BAND'], difficulty: 'medium' },
    { letters: ['L', 'A', 'N', 'D'], possibleWords: ['LAND'], difficulty: 'medium' },
    { letters: ['B', 'O', 'A', 'T'], possibleWords: ['BOAT'], difficulty: 'medium' },
    { letters: ['R', 'O', 'A', 'D'], possibleWords: ['ROAD'], difficulty: 'medium' },
    { letters: ['L', 'O', 'A', 'D'], possibleWords: ['LOAD'], difficulty: 'medium' },
    { letters: ['G', 'I', 'R', 'L'], possibleWords: ['GIRL'], difficulty: 'medium' },
    { letters: ['P', 'L', 'A', 'Y'], possibleWords: ['PLAY'], difficulty: 'medium' },
    { letters: ['H', 'E', 'L', 'P'], possibleWords: ['HELP'], difficulty: 'medium' },
    { letters: ['T', 'R', 'U', 'E'], possibleWords: ['TRUE'], difficulty: 'medium' },
    { letters: ['C', 'U', 'R', 'E'], possibleWords: ['CURE'], difficulty: 'medium' },
    { letters: ['P', 'U', 'R', 'E'], possibleWords: ['PURE'], difficulty: 'medium' },
    { letters: ['D', 'A', 'R', 'K'], possibleWords: ['DARK'], difficulty: 'medium' },
    { letters: ['M', 'A', 'R', 'K'], possibleWords: ['MARK'], difficulty: 'medium' },
    { letters: ['P', 'A', 'R', 'K'], possibleWords: ['PARK'], difficulty: 'medium' },
    { letters: ['W', 'A', 'L', 'K'], possibleWords: ['WALK'], difficulty: 'medium' },
    { letters: ['T', 'A', 'L', 'K'], possibleWords: ['TALK'], difficulty: 'medium' },
    { letters: ['B', 'A', 'C', 'K'], possibleWords: ['BACK'], difficulty: 'medium' },
    { letters: ['P', 'A', 'C', 'K'], possibleWords: ['PACK'], difficulty: 'medium' },
    { letters: ['L', 'A', 'C', 'K'], possibleWords: ['LACK'], difficulty: 'medium' },
    { letters: ['R', 'A', 'C', 'K'], possibleWords: ['RACK'], difficulty: 'medium' },
    { letters: ['N', 'E', 'C', 'K'], possibleWords: ['NECK'], difficulty: 'medium' },
    { letters: ['D', 'E', 'C', 'K'], possibleWords: ['DECK'], difficulty: 'medium' },
    { letters: ['C', 'H', 'E', 'F'], possibleWords: ['CHEF'], difficulty: 'medium' },
    { letters: ['S', 'E', 'L', 'F'], possibleWords: ['SELF'], difficulty: 'medium' },
    { letters: ['G', 'U', 'L', 'F'], possibleWords: ['GULF'], difficulty: 'medium' },
    { letters: ['H', 'E', 'L', 'D'], possibleWords: ['HELD'], difficulty: 'medium' },
    { letters: ['W', 'E', 'L', 'D'], possibleWords: ['WELD'], difficulty: 'medium' },
    { letters: ['M', 'E', 'L', 'D'], possibleWords: ['MELD'], difficulty: 'medium' },
    { letters: ['P', 'O', 'U', 'R'], possibleWords: ['POUR'], difficulty: 'medium' },
    { letters: ['F', 'O', 'U', 'R'], possibleWords: ['FOUR'], difficulty: 'medium' },
    { letters: ['H', 'O', 'U', 'R'], possibleWords: ['HOUR'], difficulty: 'medium' },
    { letters: ['S', 'O', 'U', 'L'], possibleWords: ['SOUL'], difficulty: 'medium' },
    { letters: ['F', 'O', 'U', 'L'], possibleWords: ['FOUL'], difficulty: 'medium' },
    { letters: ['L', 'O', 'U', 'D'], possibleWords: ['LOUD'], difficulty: 'medium' },
    { letters: ['J', 'O', 'I', 'N'], possibleWords: ['JOIN'], difficulty: 'medium' },
    { letters: ['C', 'O', 'I', 'L'], possibleWords: ['COIL'], difficulty: 'medium' },
    { letters: ['B', 'O', 'I', 'L'], possibleWords: ['BOIL'], difficulty: 'medium' },
    { letters: ['O', 'N', 'L', 'Y'], possibleWords: ['ONLY'], difficulty: 'medium' },
    { letters: ['E', 'V', 'E', 'N'], possibleWords: ['EVEN'], difficulty: 'medium' },
    { letters: ['E', 'D', 'G', 'E'], possibleWords: ['EDGE'], difficulty: 'medium' },
    { letters: ['A', 'R', 'E', 'A'], possibleWords: ['AREA'], difficulty: 'medium' },
    { letters: ['U', 'N', 'I', 'T'], possibleWords: ['UNIT'], difficulty: 'medium' },
    { letters: ['W', 'H', 'O', 'M'], possibleWords: ['WHOM'], difficulty: 'medium' },
    { letters: ['K', 'I', 'C', 'K'], possibleWords: ['KICK'], difficulty: 'medium' },
    { letters: ['L', 'U', 'C', 'K'], possibleWords: ['LUCK'], difficulty: 'medium' },
    { letters: ['D', 'U', 'C', 'K'], possibleWords: ['DUCK'], difficulty: 'medium' },
    { letters: ['B', 'U', 'C', 'K'], possibleWords: ['BUCK'], difficulty: 'medium' },
    { letters: ['P', 'I', 'C', 'K'], possibleWords: ['PICK'], difficulty: 'medium' },
    { letters: ['S', 'I', 'C', 'K'], possibleWords: ['SICK'], difficulty: 'medium' },
    { letters: ['T', 'I', 'C', 'K'], possibleWords: ['TICK'], difficulty: 'medium' },
    { letters: ['L', 'O', 'C', 'K'], possibleWords: ['LOCK'], difficulty: 'medium' },
    { letters: ['S', 'O', 'C', 'K'], possibleWords: ['SOCK'], difficulty: 'medium' },
    { letters: ['D', 'O', 'C', 'K'], possibleWords: ['DOCK'], difficulty: 'medium' },
    { letters: ['P', 'A', 'T', 'H'], possibleWords: ['PATH'], difficulty: 'medium' },
    { letters: ['M', 'A', 'T', 'H'], possibleWords: ['MATH'], difficulty: 'medium' },
    { letters: ['T', 'H', 'A', 'T'], possibleWords: ['THAT'], difficulty: 'medium' },
    { letters: ['M', 'I', 'S', 'O'], possibleWords: ['MISO'], difficulty: 'medium' }
  ],
  
  hard: [
    // === LESS COMMON SINGLE WORDS - Requires thought ===
    { letters: ['C', 'R', 'A', 'W'], possibleWords: ['CRAW'], difficulty: 'hard' },
    { letters: ['D', 'U', 'S', 'K'], possibleWords: ['DUSK'], difficulty: 'hard' },
    { letters: ['B', 'I', 'N', 'D'], possibleWords: ['BIND'], difficulty: 'hard' },
    { letters: ['H', 'I', 'N', 'T'], possibleWords: ['HINT'], difficulty: 'hard' },
    { letters: ['M', 'I', 'N', 'T'], possibleWords: ['MINT'], difficulty: 'hard' },
    { letters: ['P', 'I', 'N', 'T'], possibleWords: ['PINT'], difficulty: 'hard' },
    { letters: ['L', 'I', 'N', 'K'], possibleWords: ['LINK'], difficulty: 'hard' },
    { letters: ['P', 'I', 'N', 'K'], possibleWords: ['PINK'], difficulty: 'hard' },
    { letters: ['R', 'I', 'N', 'K'], possibleWords: ['RINK'], difficulty: 'hard' },
    { letters: ['W', 'I', 'N', 'K'], possibleWords: ['WINK'], difficulty: 'hard' },
    { letters: ['B', 'U', 'L', 'K'], possibleWords: ['BULK'], difficulty: 'hard' },
    { letters: ['H', 'U', 'L', 'K'], possibleWords: ['HULK'], difficulty: 'hard' },
    { letters: ['S', 'U', 'L', 'K'], possibleWords: ['SULK'], difficulty: 'hard' },
    { letters: ['B', 'U', 'M', 'P'], possibleWords: ['BUMP'], difficulty: 'hard' },
    { letters: ['D', 'U', 'M', 'P'], possibleWords: ['DUMP'], difficulty: 'hard' },
    { letters: ['P', 'U', 'M', 'P'], possibleWords: ['PUMP'], difficulty: 'hard' },
    { letters: ['J', 'O', 'L', 'T'], possibleWords: ['JOLT'], difficulty: 'hard' },
    { letters: ['M', 'O', 'L', 'T'], possibleWords: ['MOLT'], difficulty: 'hard' },
    { letters: ['V', 'O', 'L', 'T'], possibleWords: ['VOLT'], difficulty: 'hard' },
    { letters: ['B', 'E', 'L', 'T'], possibleWords: ['BELT'], difficulty: 'hard' },
    { letters: ['M', 'E', 'L', 'T'], possibleWords: ['MELT'], difficulty: 'hard' },
    { letters: ['Y', 'E', 'L', 'P'], possibleWords: ['YELP'], difficulty: 'hard' },
    { letters: ['G', 'U', 'L', 'P'], possibleWords: ['GULP'], difficulty: 'hard' },
    { letters: ['P', 'U', 'L', 'P'], possibleWords: ['PULP'], difficulty: 'hard' },
    { letters: ['C', 'A', 'L', 'M'], possibleWords: ['CALM'], difficulty: 'hard' },
    { letters: ['B', 'A', 'L', 'M'], possibleWords: ['BALM'], difficulty: 'hard' },
    { letters: ['P', 'A', 'L', 'M'], possibleWords: ['PALM'], difficulty: 'hard' },
    { letters: ['H', 'A', 'R', 'M'], possibleWords: ['HARM'], difficulty: 'hard' },
    { letters: ['F', 'A', 'R', 'M'], possibleWords: ['FARM'], difficulty: 'hard' },
    { letters: ['W', 'A', 'R', 'M'], possibleWords: ['WARM'], difficulty: 'hard' },
    { letters: ['N', 'O', 'R', 'M'], possibleWords: ['NORM'], difficulty: 'hard' },
    { letters: ['W', 'O', 'R', 'M'], possibleWords: ['WORM'], difficulty: 'hard' },
    { letters: ['D', 'A', 'M', 'P'], possibleWords: ['DAMP'], difficulty: 'hard' },
    { letters: ['C', 'A', 'M', 'P'], possibleWords: ['CAMP'], difficulty: 'hard' },
    { letters: ['L', 'A', 'M', 'P'], possibleWords: ['LAMP'], difficulty: 'hard' },
    { letters: ['R', 'A', 'M', 'P'], possibleWords: ['RAMP'], difficulty: 'hard' },
    { letters: ['G', 'I', 'F', 'T'], possibleWords: ['GIFT'], difficulty: 'hard' },
    { letters: ['L', 'I', 'F', 'T'], possibleWords: ['LIFT'], difficulty: 'hard' },
    { letters: ['R', 'I', 'F', 'T'], possibleWords: ['RIFT'], difficulty: 'hard' },
    { letters: ['S', 'O', 'F', 'T'], possibleWords: ['SOFT'], difficulty: 'hard' },
    { letters: ['L', 'O', 'F', 'T'], possibleWords: ['LOFT'], difficulty: 'hard' },
    { letters: ['B', 'O', 'L', 'T'], possibleWords: ['BOLT'], difficulty: 'hard' },
    { letters: ['C', 'O', 'R', 'N'], possibleWords: ['CORN'], difficulty: 'hard' },
    
    // Double letter words
    { letters: ['T', 'E', 'L', 'L'], possibleWords: ['TELL'], difficulty: 'hard' },
    { letters: ['W', 'E', 'L', 'L'], possibleWords: ['WELL'], difficulty: 'hard' },
    { letters: ['F', 'E', 'L', 'L'], possibleWords: ['FELL'], difficulty: 'hard' },
    { letters: ['B', 'E', 'L', 'L'], possibleWords: ['BELL'], difficulty: 'hard' },
    { letters: ['F', 'I', 'L', 'L'], possibleWords: ['FILL'], difficulty: 'hard' },
    { letters: ['H', 'I', 'L', 'L'], possibleWords: ['HILL'], difficulty: 'hard' },
    { letters: ['K', 'I', 'L', 'L'], possibleWords: ['KILL'], difficulty: 'hard' },
    { letters: ['M', 'I', 'L', 'L'], possibleWords: ['MILL'], difficulty: 'hard' },
    { letters: ['P', 'I', 'L', 'L'], possibleWords: ['PILL'], difficulty: 'hard' },
    { letters: ['W', 'I', 'L', 'L'], possibleWords: ['WILL'], difficulty: 'hard' },
    { letters: ['B', 'A', 'L', 'L'], possibleWords: ['BALL'], difficulty: 'hard' },
    { letters: ['C', 'A', 'L', 'L'], possibleWords: ['CALL'], difficulty: 'hard' },
    { letters: ['F', 'A', 'L', 'L'], possibleWords: ['FALL'], difficulty: 'hard' },
    { letters: ['H', 'A', 'L', 'L'], possibleWords: ['HALL'], difficulty: 'hard' },
    { letters: ['T', 'A', 'L', 'L'], possibleWords: ['TALL'], difficulty: 'hard' },
    { letters: ['W', 'A', 'L', 'L'], possibleWords: ['WALL'], difficulty: 'hard' },
    { letters: ['P', 'U', 'L', 'L'], possibleWords: ['PULL'], difficulty: 'hard' },
    { letters: ['F', 'U', 'L', 'L'], possibleWords: ['FULL'], difficulty: 'hard' },
    { letters: ['B', 'U', 'L', 'L'], possibleWords: ['BULL'], difficulty: 'hard' },
    { letters: ['D', 'U', 'L', 'L'], possibleWords: ['DULL'], difficulty: 'hard' },
    { letters: ['H', 'U', 'L', 'L'], possibleWords: ['HULL'], difficulty: 'hard' },
    { letters: ['T', 'E', 'S', 'T'], possibleWords: ['TEST'], difficulty: 'hard' },
    
    // CH/WH/TH combinations
    { letters: ['W', 'H', 'I', 'P'], possibleWords: ['WHIP'], difficulty: 'hard' },
    { letters: ['C', 'H', 'O', 'P'], possibleWords: ['CHOP'], difficulty: 'hard' },
    { letters: ['C', 'H', 'I', 'P'], possibleWords: ['CHIP'], difficulty: 'hard' },
    { letters: ['C', 'R', 'O', 'P'], possibleWords: ['CROP'], difficulty: 'hard' },
    { letters: ['P', 'R', 'O', 'P'], possibleWords: ['PROP'], difficulty: 'hard' },
    { letters: ['T', 'W', 'I', 'N'], possibleWords: ['TWIN'], difficulty: 'hard' },
    { letters: ['S', 'W', 'I', 'M'], possibleWords: ['SWIM'], difficulty: 'hard' },
    { letters: ['G', 'L', 'O', 'W'], possibleWords: ['GLOW'], difficulty: 'hard' },
    { letters: ['C', 'L', 'U', 'E'], possibleWords: ['CLUE'], difficulty: 'hard' },
    { letters: ['G', 'L', 'U', 'E'], possibleWords: ['GLUE'], difficulty: 'hard' },
    { letters: ['T', 'U', 'B', 'E'], possibleWords: ['TUBE'], difficulty: 'hard' },
    { letters: ['C', 'U', 'B', 'E'], possibleWords: ['CUBE'], difficulty: 'hard' },
    { letters: ['F', 'U', 'S', 'E'], possibleWords: ['FUSE'], difficulty: 'hard' },
    
    // Multi-anagram sets that are harder
    { letters: ['S', 'I', 'N', 'K'], possibleWords: ['SINK', 'INKS', 'KINS'], difficulty: 'hard' },
    { letters: ['B', 'U', 'S', 'T'], possibleWords: ['BUST', 'BUTS', 'TUBS', 'STUB'], difficulty: 'hard' },
    { letters: ['G', 'U', 'S', 'T'], possibleWords: ['GUST', 'GUTS', 'TUGS'], difficulty: 'hard' },
    { letters: ['J', 'U', 'S', 'T'], possibleWords: ['JUST', 'JUTS'], difficulty: 'hard' },
    { letters: ['M', 'U', 'S', 'T'], possibleWords: ['MUST', 'SMUT'], difficulty: 'hard' },
    { letters: ['R', 'U', 'S', 'T'], possibleWords: ['RUST', 'RUTS'], difficulty: 'hard' },
    { letters: ['S', 'A', 'N', 'D'], possibleWords: ['SAND', 'ANDS'], difficulty: 'hard' },
    { letters: ['S', 'E', 'L', 'L'], possibleWords: ['SELL', 'ELLS'], difficulty: 'hard' },
    { letters: ['S', 'W', 'A', 'N'], possibleWords: ['SWAN', 'WANS', 'AWNS'], difficulty: 'hard' },
    { letters: ['H', 'U', 'G', 'E'], possibleWords: ['HUGE'], difficulty: 'hard' },
    { letters: ['J', 'U', 'M', 'P'], possibleWords: ['JUMP'], difficulty: 'hard' },
    
    // Less obvious words with common letters
    { letters: ['W', 'E', 'I', 'N'], possibleWords: ['WINE'], difficulty: 'hard' },
    { letters: ['G', 'A', 'W', 'K'], possibleWords: ['GAWK'], difficulty: 'hard' },
    { letters: ['H', 'A', 'W', 'K'], possibleWords: ['HAWK'], difficulty: 'hard' },
    { letters: ['Y', 'A', 'W', 'N'], possibleWords: ['YAWN'], difficulty: 'hard' },
    { letters: ['F', 'A', 'W', 'N'], possibleWords: ['FAWN'], difficulty: 'hard' },
    { letters: ['P', 'A', 'W', 'N'], possibleWords: ['PAWN'], difficulty: 'hard' },
    { letters: ['D', 'A', 'W', 'N'], possibleWords: ['DAWN'], difficulty: 'hard' },
    { letters: ['L', 'A', 'W', 'N'], possibleWords: ['LAWN'], difficulty: 'hard' },
    { letters: ['C', 'L', 'A', 'W'], possibleWords: ['CLAW'], difficulty: 'hard' },
    { letters: ['F', 'L', 'A', 'W'], possibleWords: ['FLAW'], difficulty: 'hard' },
    { letters: ['S', 'L', 'A', 'W'], possibleWords: ['SLAW'], difficulty: 'hard' },
    { letters: ['T', 'H', 'A', 'W'], possibleWords: ['THAW'], difficulty: 'hard' },
    
    // GH words
    { letters: ['S', 'I', 'G', 'H'], possibleWords: ['SIGH'], difficulty: 'hard' },
    { letters: ['H', 'I', 'G', 'H'], possibleWords: ['HIGH'], difficulty: 'hard' },
    { letters: ['N', 'I', 'G', 'H'], possibleWords: ['NIGH'], difficulty: 'hard' },
    
    // Words starting with unusual consonant clusters
    { letters: ['S', 'K', 'I', 'T'], possibleWords: ['SKIT', 'KITS'], difficulty: 'hard' },
    { letters: ['S', 'K', 'I', 'M'], possibleWords: ['SKIM'], difficulty: 'hard' },
    { letters: ['S', 'K', 'I', 'P'], possibleWords: ['SKIP', 'KIPS'], difficulty: 'hard' },
    { letters: ['S', 'P', 'U', 'N'], possibleWords: ['SPUN', 'PUNS'], difficulty: 'hard' },
    { letters: ['S', 'T', 'U', 'N'], possibleWords: ['STUN', 'NUTS', 'TUNS'], difficulty: 'hard' },
    { letters: ['S', 'P', 'U', 'R'], possibleWords: ['SPUR'], difficulty: 'hard' },
    { letters: ['S', 'L', 'U', 'R'], possibleWords: ['SLUR'], difficulty: 'hard' },
    { letters: ['S', 'L', 'U', 'M'], possibleWords: ['SLUM'], difficulty: 'hard' },
    { letters: ['S', 'L', 'U', 'G'], possibleWords: ['SLUG', 'LUGS'], difficulty: 'hard' },
    { letters: ['S', 'M', 'U', 'G'], possibleWords: ['SMUG', 'MUGS', 'GUMS'], difficulty: 'hard' },
    { letters: ['S', 'N', 'U', 'G'], possibleWords: ['SNUG', 'GUNS', 'GNUS','SUNG'], difficulty: 'hard' },
    { letters: ['S', 'N', 'U', 'B'], possibleWords: ['SNUB', 'BUNS', 'NUBS'], difficulty: 'hard' },
    
    // Unusual but valid words
    { letters: ['G', 'R', 'I', 'M'], possibleWords: ['GRIM'], difficulty: 'hard' },
    { letters: ['P', 'R', 'I', 'M'], possibleWords: ['PRIM'], difficulty: 'hard' },
    { letters: ['T', 'R', 'I', 'M'], possibleWords: ['TRIM'], difficulty: 'hard' },
    { letters: ['B', 'R', 'I', 'M'], possibleWords: ['BRIM'], difficulty: 'hard' },
    { letters: ['G', 'R', 'I', 'P'], possibleWords: ['GRIP'], difficulty: 'hard' },
    { letters: ['T', 'R', 'I', 'P'], possibleWords: ['TRIP'], difficulty: 'hard' },
    { letters: ['D', 'R', 'I', 'P'], possibleWords: ['DRIP'], difficulty: 'hard' },
    { letters: ['C', 'R', 'I', 'B'], possibleWords: ['CRIB'], difficulty: 'hard' },
    { letters: ['G', 'R', 'U', 'B'], possibleWords: ['GRUB'], difficulty: 'hard' },
    
    // Words with tricky vowel placement
    { letters: ['O', 'A', 'T', 'H'], possibleWords: ['OATH'], difficulty: 'hard' },
    { letters: ['O', 'V', 'A', 'L'], possibleWords: ['OVAL'], difficulty: 'hard' },
    { letters: ['O', 'R', 'A', 'L'], possibleWords: ['ORAL'], difficulty: 'hard' },
    { letters: ['O', 'M', 'E', 'N'], possibleWords: ['OMEN'], difficulty: 'hard' },
    { letters: ['O', 'W', 'E', 'D'], possibleWords: ['OWED'], difficulty: 'hard' },
    { letters: ['A', 'I', 'L', 'S'], possibleWords: ['AILS', 'SAIL'], difficulty: 'hard' },
    { letters: ['A', 'V', 'I', 'D'], possibleWords: ['AVID','DIVA'], difficulty: 'hard' },
    { letters: ['A', 'R', 'I', 'D'], possibleWords: ['ARID', 'RAID'], difficulty: 'hard' },
    { letters: ['G', 'O', 'U', 'T'], possibleWords: ['GOUT'], difficulty: 'hard' },
    { letters: ['L', 'O', 'U', 'T'], possibleWords: ['LOUT'], difficulty: 'hard' },
    { letters: ['G', 'E', 'L', 'D'], possibleWords: ['GELD'], difficulty: 'hard' },
    
    // Additional hard words
    { letters: ['G', 'O', 'R', 'Y'], possibleWords: ['GORY', 'ORGY', 'GYRO'], difficulty: 'hard' },
    { letters: ['R', 'O', 'P', 'Y'], possibleWords: ['ROPY', 'PYRO'], difficulty: 'hard' },
    { letters: ['B', 'A', 'S', 'K'], possibleWords: ['BASK'], difficulty: 'hard' },
    { letters: ['B', 'I', 'L', 'K'], possibleWords: ['BILK'], difficulty: 'hard' },
    { letters: ['B', 'R', 'I', 'G'], possibleWords: ['BRIG', 'GRIB'], difficulty: 'hard' },
    { letters: ['C', 'H', 'U', 'M'], possibleWords: ['CHUM', 'MUCH'], difficulty: 'hard' },
    { letters: ['C', 'L', 'O', 'D'], possibleWords: ['CLOD'], difficulty: 'hard' },
    { letters: ['C', 'R', 'A', 'M'], possibleWords: ['CRAM', 'MARC'], difficulty: 'hard' },
    { letters: ['D', 'A', 'N', 'K'], possibleWords: ['DANK'], difficulty: 'hard' },
    { letters: ['G', 'L', 'U', 'M'], possibleWords: ['GLUM'], difficulty: 'hard' },
    { letters: ['H', 'E', 'F', 'T'], possibleWords: ['HEFT'], difficulty: 'hard' },
    { letters: ['H', 'E', 'M', 'P'], possibleWords: ['HEMP'], difficulty: 'hard' },
    { letters: ['M', 'U', 'R', 'K'], possibleWords: ['MURK'], difficulty: 'hard' },
    { letters: ['P', 'A', 'N', 'G'], possibleWords: ['PANG'], difficulty: 'hard' },
    { letters: ['P', 'L', 'O', 'D'], possibleWords: ['PLOD'], difficulty: 'hard' },
    { letters: ['P', 'R', 'I', 'G'], possibleWords: ['PRIG', 'GRIP'], difficulty: 'hard' }
  ],
  
  expert: [
    // === RARE LETTER WORDS (Q, X, Z, J) ===
    { letters: ['Q', 'U', 'I', 'Z'], possibleWords: ['QUIZ'], difficulty: 'expert' },
    { letters: ['Z', 'E', 'S', 'T'], possibleWords: ['ZEST'], difficulty: 'expert' },
    { letters: ['J', 'A', 'Z', 'Z'], possibleWords: ['JAZZ'], difficulty: 'expert' },
    { letters: ['F', 'I', 'Z', 'Z'], possibleWords: ['FIZZ'], difficulty: 'expert' },
    { letters: ['B', 'U', 'Z', 'Z'], possibleWords: ['BUZZ'], difficulty: 'expert' },
    { letters: ['F', 'U', 'Z', 'Z'], possibleWords: ['FUZZ'], difficulty: 'expert' },
    { letters: ['A', 'X', 'I', 'S'], possibleWords: ['AXIS'], difficulty: 'expert' },
    { letters: ['E', 'X', 'I', 'T'], possibleWords: ['EXIT'], difficulty: 'expert' },
    { letters: ['N', 'E', 'X', 'T'], possibleWords: ['NEXT'], difficulty: 'expert' },
    { letters: ['T', 'E', 'X', 'T'], possibleWords: ['TEXT'], difficulty: 'expert' },
    { letters: ['Z', 'E', 'R', 'O'], possibleWords: ['ZERO'], difficulty: 'expert' },
    { letters: ['Z', 'O', 'N', 'E'], possibleWords: ['ZONE'], difficulty: 'expert' },
    { letters: ['Z', 'O', 'O', 'M'], possibleWords: ['ZOOM'], difficulty: 'expert' },
    { letters: ['L', 'Y', 'N', 'X'], possibleWords: ['LYNX'], difficulty: 'expert' },
    { letters: ['O', 'N', 'Y', 'X'], possibleWords: ['ONYX'], difficulty: 'expert' },
    { letters: ['J', 'U', 'R', 'Y'], possibleWords: ['JURY'], difficulty: 'expert' },
    { letters: ['J', 'U', 'L', 'Y'], possibleWords: ['JULY'], difficulty: 'expert' },
    { letters: ['J', 'E', 'S', 'T'], possibleWords: ['JEST'], difficulty: 'expert' },
    { letters: ['J', 'U', 'N', 'K'], possibleWords: ['JUNK'], difficulty: 'expert' },
    { letters: ['J', 'A', 'W', 'S'], possibleWords: ['JAWS'], difficulty: 'expert' },
    { letters: ['J', 'O', 'K', 'E'], possibleWords: ['JOKE'], difficulty: 'expert' },
    { letters: ['Y', 'O', 'K', 'E'], possibleWords: ['YOKE'], difficulty: 'expert' },
    { letters: ['P', 'O', 'K', 'E'], possibleWords: ['POKE'], difficulty: 'expert' },
    { letters: ['A', 'P', 'E', 'X'], possibleWords: ['APEX'], difficulty: 'expert' },
    { letters: ['O', 'X', 'E', 'N'], possibleWords: ['OXEN'], difficulty: 'expert' },
    { letters: ['C', 'R', 'U', 'X'], possibleWords: ['CRUX'], difficulty: 'expert' },
    { letters: ['F', 'L', 'U', 'X'], possibleWords: ['FLUX'], difficulty: 'expert' },
    { letters: ['H', 'A', 'Z', 'Y'], possibleWords: ['HAZY'], difficulty: 'expert' },
    { letters: ['L', 'A', 'Z', 'Y'], possibleWords: ['LAZY'], difficulty: 'expert' },
    { letters: ['C', 'O', 'Z', 'Y'], possibleWords: ['COZY'], difficulty: 'expert' },
    { letters: ['D', 'O', 'Z', 'Y'], possibleWords: ['DOZY'], difficulty: 'expert' },
    { letters: ['Z', 'A', 'N', 'Y'], possibleWords: ['ZANY'], difficulty: 'expert' },
    
    // === UNCOMMON WORDS WITH COMMON LETTERS ===
    { letters: ['B', 'R', 'I', 'E'], possibleWords: ['BRIE'], difficulty: 'expert' },
    { letters: ['A', 'G', 'O', 'G'], possibleWords: ['AGOG'], difficulty: 'expert' },
    { letters: ['A', 'J', 'A', 'R'], possibleWords: ['AJAR'], difficulty: 'expert' },
    { letters: ['T', 'W', 'E', 'E'], possibleWords: ['TWEE'], difficulty: 'expert' },
    { letters: ['A', 'W', 'R', 'Y'], possibleWords: ['AWRY'], difficulty: 'expert' },
    { letters: ['E', 'W', 'E', 'R'], possibleWords: ['EWER'], difficulty: 'expert' },
    { letters: ['O', 'G', 'R', 'E'], possibleWords: ['OGRE', 'GORE', 'ERGO'], difficulty: 'expert' },
    { letters: ['O', 'N', 'C', 'E'], possibleWords: ['ONCE', 'CONE'], difficulty: 'expert' },
    { letters: ['A', 'C', 'M', 'E'], possibleWords: ['ACME', 'CAME', 'MACE'], difficulty: 'expert' },
    
    // Silent letter words
    { letters: ['M', 'Y', 'T', 'H'], possibleWords: ['MYTH'], difficulty: 'expert' },
    { letters: ['H', 'Y', 'M', 'N'], possibleWords: ['HYMN'], difficulty: 'expert' },
    { letters: ['W', 'R', 'E', 'N'], possibleWords: ['WREN'], difficulty: 'expert' },
    { letters: ['K', 'N', 'O', 'T'], possibleWords: ['KNOT'], difficulty: 'expert' },
    { letters: ['K', 'N', 'I', 'T'], possibleWords: ['KNIT'], difficulty: 'expert' },
    { letters: ['G', 'N', 'A', 'W'], possibleWords: ['GNAW'], difficulty: 'expert' },
    { letters: ['G', 'N', 'A', 'T'], possibleWords: ['GNAT'], difficulty: 'expert' },
    { letters: ['W', 'R', 'I', 'T'], possibleWords: ['WRIT'], difficulty: 'expert' },
    
    // Unusual vowel positions
    { letters: ['I', 'O', 'T', 'A'], possibleWords: ['IOTA'], difficulty: 'expert' },
    { letters: ['A', 'U', 'R', 'A'], possibleWords: ['AURA'], difficulty: 'expert' },
    { letters: ['A', 'Q', 'U', 'A'], possibleWords: ['AQUA'], difficulty: 'expert' },
    { letters: ['O', 'L', 'I', 'O'], possibleWords: ['OLIO'], difficulty: 'expert' },
    { letters: ['O', 'R', 'C', 'A'], possibleWords: ['ORCA'], difficulty: 'expert' },
    { letters: ['O', 'K', 'R', 'A'], possibleWords: ['OKRA'], difficulty: 'expert' },
    { letters: ['U', 'N', 'T', 'O'], possibleWords: ['UNTO'], difficulty: 'expert' },
    { letters: ['A', 'N', 'T', 'E'], possibleWords: ['ANTE'], difficulty: 'expert' },
    
    // Words that look like gibberish
    { letters: ['G', 'Y', 'R', 'O'], possibleWords: ['GYRO'], difficulty: 'expert' },
    { letters: ['P', 'Y', 'R', 'O'], possibleWords: ['PYRO'], difficulty: 'expert' },
    { letters: ['G', 'U', 'R', 'U'], possibleWords: ['GURU'], difficulty: 'expert' },
    { letters: ['T', 'U', 'T', 'U'], possibleWords: ['TUTU'], difficulty: 'expert' },
    { letters: ['M', 'U', 'M', 'U'], possibleWords: ['MUMU'], difficulty: 'expert' },
    { letters: ['L', 'U', 'A', 'U'], possibleWords: ['LUAU'], difficulty: 'expert' },
    { letters: ['T', 'O', 'F', 'U'], possibleWords: ['TOFU'], difficulty: 'expert' },
    { letters: ['S', 'U', 'M', 'O'], possibleWords: ['SUMO'], difficulty: 'expert' },
    { letters: ['J', 'U', 'D', 'O'], possibleWords: ['JUDO'], difficulty: 'expert' },
    
    // Archaic/Literary words
    { letters: ['D', 'O', 'T', 'H'], possibleWords: ['DOTH'], difficulty: 'expert' },
    { letters: ['H', 'A', 'T', 'H'], possibleWords: ['HATH'], difficulty: 'expert' },
    { letters: ['N', 'E', 'A', 'T'], possibleWords: ['NEAT', 'ANTE'], difficulty: 'expert' },
    { letters: ['M', 'I', 'R', 'E'], possibleWords: ['MIRE', 'RIME', 'EMIR'], difficulty: 'expert' },
    { letters: ['B', 'A', 'N', 'E'], possibleWords: ['BANE', 'BEAN'], difficulty: 'expert' },
    { letters: ['W', 'A', 'R', 'Y'], possibleWords: ['WARY'], difficulty: 'expert' },
    
    // Food/cuisine words
    { letters: ['T', 'A', 'R', 'O'], possibleWords: ['TARO'], difficulty: 'expert' },
    { letters: ['N', 'A', 'A', 'N'], possibleWords: ['NAAN'], difficulty: 'expert' },
    { letters: ['P', 'I', 'T', 'A'], possibleWords: ['PITA'], difficulty: 'expert' },
    
    // Musical/technical terms
    { letters: ['O', 'B', 'O', 'E'], possibleWords: ['OBOE'], difficulty: 'expert' },
    { letters: ['T', 'U', 'B', 'A'], possibleWords: ['TUBA'], difficulty: 'expert' },
    { letters: ['R', 'A', 'G', 'A'], possibleWords: ['RAGA'], difficulty: 'expert' },
    
    // Biological/scientific
    { letters: ['C', 'E', 'L', 'L'], possibleWords: ['CELL'], difficulty: 'expert' },
    { letters: ['G', 'E', 'N', 'E'], possibleWords: ['GENE'], difficulty: 'expert' },
    
    // Additional rare letter words (Q, X, Z, J)
    { letters: ['Q', 'U', 'A', 'Y'], possibleWords: ['QUAY'], difficulty: 'expert' },
    { letters: ['Q', 'O', 'P', 'H'], possibleWords: ['QOPH'], difficulty: 'expert' },
    { letters: ['O', 'R', 'Y', 'X'], possibleWords: ['ORYX'], difficulty: 'expert' },
    { letters: ['J', 'I', 'N', 'X'], possibleWords: ['JINX'], difficulty: 'expert' },
    { letters: ['M', 'I', 'N', 'X'], possibleWords: ['MINX'], difficulty: 'expert' },
    { letters: ['L', 'U', 'X', 'E'], possibleWords: ['LUXE'], difficulty: 'expert' },
    { letters: ['C', 'Z', 'A', 'R'], possibleWords: ['CZAR'], difficulty: 'expert' },
    { letters: ['J', 'I', 'B', 'E'], possibleWords: ['JIBE'], difficulty: 'expert' },
    { letters: ['J', 'O', 'W', 'L'], possibleWords: ['JOWL'], difficulty: 'expert' },
    { letters: ['J', 'A', 'M', 'B'], possibleWords: ['JAMB'], difficulty: 'expert' },
    
    // Uncommon but valid words
    { letters: ['P', 'S', 'S', 'T'], possibleWords: ['PSST'], difficulty: 'expert' },
    { letters: ['C', 'Y', 'S', 'T'], possibleWords: ['CYST'], difficulty: 'expert' },
    { letters: ['B', 'Y', 'R', 'E'], possibleWords: ['BYRE'], difficulty: 'expert' },
    { letters: ['D', 'Y', 'N', 'E'], possibleWords: ['DYNE', 'DENY'], difficulty: 'expert' },
    { letters: ['F', 'Y', 'R', 'D'], possibleWords: ['FYRD'], difficulty: 'expert' },
    { letters: ['G', 'Y', 'B', 'E'], possibleWords: ['GYBE'], difficulty: 'expert' },
    { letters: ['K', 'E', 'L', 'P'], possibleWords: ['KELP'], difficulty: 'expert' },
    { letters: ['K', 'I', 'T', 'H'], possibleWords: ['KITH'], difficulty: 'expert' },
    { letters: ['L', 'O', 'C', 'H'], possibleWords: ['LOCH'], difficulty: 'expert' },
    { letters: ['O', 'A', 'S', 'T'], possibleWords: ['OAST', 'OATS', 'TAOS'], difficulty: 'expert' },
    { letters: ['P', 'Y', 'R', 'E'], possibleWords: ['PYRE', 'PREY'], difficulty: 'expert' },
    { letters: ['R', 'U', 'N', 'E'], possibleWords: ['RUNE'], difficulty: 'expert' },
    { letters: ['S', 'H', 'I', 'V'], possibleWords: ['SHIV'], difficulty: 'expert' },
    { letters: ['S', 'K', 'E', 'W'], possibleWords: ['SKEW'], difficulty: 'expert' },
    { letters: ['S', 'P', 'R', 'Y'], possibleWords: ['SPRY'], difficulty: 'expert' },
    { letters: ['S', 'W', 'A', 'B'], possibleWords: ['SWAB', 'WABS'], difficulty: 'expert' },
    { letters: ['T', 'U', 'F', 'T'], possibleWords: ['TUFT'], difficulty: 'expert' },
    { letters: ['W', 'A', 'F', 'T'], possibleWords: ['WAFT'], difficulty: 'expert' },
    { letters: ['W', 'A', 'I', 'F'], possibleWords: ['WAIF'], difficulty: 'expert' },
    { letters: ['W', 'I', 'S', 'P'], possibleWords: ['WISP'], difficulty: 'expert' },
    { letters: ['Y', 'A', 'W', 'L'], possibleWords: ['YAWL'], difficulty: 'expert' },
    { letters: ['K', 'N', 'E', 'W'], possibleWords: ['KNEW'], difficulty: 'expert' }
  ]
};

// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get a random letter set based on difficulty
export const getRandomLetterSet = (difficulty = 'easy') => {
  const sets = letterSets[difficulty];
  if (!sets || sets.length === 0) {
    const fallback = letterSets.easy[0];
    return { ...fallback, letters: shuffleArray(fallback.letters) };
  }
  const selectedSet = sets[Math.floor(Math.random() * sets.length)];
  return { ...selectedSet, letters: shuffleArray(selectedSet.letters) };
};

// Get difficulty using weighted probabilities that scale with score
// Returns a difficulty string based on weighted random selection
// 
// Distribution targets:
// - Easy: Never below 15%
// - Medium: 30-70% range
// - Hard/Expert: Scarce before score 100, then scale slowly
export const getDifficultyFromScore = (score) => {
  let easyWeight, mediumWeight, hardWeight, expertWeight;
  
  if (score < 50) {
    // Score 0-49: Mostly easy and medium, minimal hard/expert
    const t = score / 50; // 0 to 1
    easyWeight = 50 - t * 20;         // 50% -> 30%
    mediumWeight = 48 + t * 20;       // 48% -> 68%
    hardWeight = 2;                    // Fixed 2% (rare appearance)
    expertWeight = 0;                  // No expert words yet
  } else if (score < 100) {
    // Score 50-99: Still mostly easy/medium, hard starts appearing slightly
    const t = (score - 50) / 50; // 0 to 1
    easyWeight = 30 - t * 10;         // 30% -> 20%
    mediumWeight = 65 - t * 5;        // 65% -> 60%
    hardWeight = 5 + t * 10;          // 5% -> 15%
    expertWeight = 0 + t * 5;         // 0% -> 5%
  } else if (score < 200) {
    // Score 100-199: Hard/Expert start scaling in slowly
    const t = (score - 100) / 100; // 0 to 1
    easyWeight = 20 - t * 5;          // 20% -> 15%
    mediumWeight = 55 - t * 15;       // 55% -> 40%
    hardWeight = 18 + t * 12;         // 18% -> 30%
    expertWeight = 7 + t * 8;         // 7% -> 15%
  } else if (score < 300) {
    // Score 200-299: Moderate hard/expert presence
    const t = (score - 200) / 100; // 0 to 1
    easyWeight = 15;                  // Fixed 15% minimum
    mediumWeight = 40 - t * 8;        // 40% -> 32%
    hardWeight = 30 + t * 5;          // 30% -> 35%
    expertWeight = 15 + t * 3;        // 15% -> 18%
  } else {
    // Score 300+: Peak difficulty, but easy stays at 15%
    const t = Math.min((score - 300) / 200, 1); // 0 to 1, capped at score 500
    easyWeight = 15;                  // Fixed 15% minimum
    mediumWeight = 32 - t * 2;        // 32% -> 30%
    hardWeight = 35 + t * 5;          // 35% -> 40%
    expertWeight = 18 + t * 7;        // 18% -> 25%
  }
  
  // Enforce minimum constraints
  easyWeight = Math.max(easyWeight, 15);   // Never below 15%
  mediumWeight = Math.max(mediumWeight, 30); // Never below 30%
  hardWeight = Math.max(hardWeight, 0);
  expertWeight = Math.max(expertWeight, 0);
  
  const totalWeight = easyWeight + mediumWeight + hardWeight + expertWeight;
  const random = Math.random() * totalWeight;
  
  if (random < easyWeight) {
    return 'easy';
  } else if (random < easyWeight + mediumWeight) {
    return 'medium';
  } else if (random < easyWeight + mediumWeight + hardWeight) {
    return 'hard';
  } else {
    return 'expert';
  }
};
