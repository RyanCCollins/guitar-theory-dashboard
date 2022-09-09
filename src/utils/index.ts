import { Chord } from "@tonaljs/tonal";
import { Note, TUNING_NOTES } from "../constants";

export const getChordNotes = (chord: string, key: Note) => {
  console.log(TUNING_NOTES);
  return Chord.getChord(chord, key).notes;
}