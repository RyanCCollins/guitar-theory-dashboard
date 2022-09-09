import { Fretboard as FretboardInit } from '@moonwave99/fretboard.js';
import { useEffect, useState } from 'react';
import { FretboardProps } from './types'
import { NUM_FRETS, TUNING } from '../../constants/fretboard';

export const useFretboard = ({ scale, chord, id }: FretboardProps) => {
  const [fretboard, setFretboard] = useState<any>()
  useEffect(() => {
    setFretboard(new FretboardInit({
      el: `#${id}`,
      dotText: (dot: any) => dot.note,
      fretCount: NUM_FRETS,
      tuning: TUNING,
    }));
    return () => {
      if (fretboard) {
        fretboard.clear();
      }
      setFretboard(undefined);
    }
  }, []) // eslint-disable-line
  useEffect(() => {
    if (fretboard) {
      fretboard.clear();
      if (scale) {
        fretboard.renderScale(scale).style({
          filter: { interval: '1P' },
          fill: 'red',
        });
      } else if (chord) {
        fretboard.renderChord(chord);
      }
    }
  }, [scale, fretboard, chord])
}