import { GUITAR_TUNINGS } from '@moonwave99/fretboard.js';

export const TUNING = GUITAR_TUNINGS.default;
export const TUNING_NOTES = TUNING.map(item => item.slice(0, 1));

export const NUM_FRETS = 24