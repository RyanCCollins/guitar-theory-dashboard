export const MODES = [
  'ionian',
  'dorian',
  'phrygian',
  'lydian',
  'mixolydian',
  'aeolian',
  'locrian',
  'minor pentatonic',
  'major pentatonic',
  'minor blues',
  'major blues',
];

export type Mode = typeof MODES[number]