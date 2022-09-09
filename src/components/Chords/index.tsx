import { useMemo, useState } from 'react';
import { Container, Box, Typography, SelectChangeEvent, Card } from '@mui/material';
import { Fretboard } from '../';
import { NOTES, CHORDS, Chord } from '../../constants'
import { SelectField } from '../SelectField'
import { getChordNotes } from '../../utils';

function Chords() {
  const [noteIndex, setNoteIndex] = useState(3)
  const [chordIndex, setChordIndex] = useState(0)
  const key = useMemo(() => NOTES[noteIndex], [noteIndex]);
  const chord = useMemo(() => CHORDS[chordIndex] as Chord, [chordIndex]);
  const chordObj = getChordNotes(chord, key);
  console.log(
    JSON.stringify(chordObj, null, 2)
  )
  return (
    <Container maxWidth="xl">
      <Card sx={{ my: 4, p: 3 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Chords
        </Typography>
        <Box sx={{ my: 2 }}>
          <SelectField
            id="chords_select-field-notes"
            label="Notes"
            options={NOTES}
            value={key}
            onChange={(e: SelectChangeEvent) => {
              const nextIndex = NOTES.findIndex(i => i === e.target.value)
              setNoteIndex(nextIndex)
            }}
          />
          <SelectField
            id="chords_select-field-chords"
            label="Chords"
            options={CHORDS}
            value={chord}
            onChange={(e: SelectChangeEvent) => {
              const nextIndex = CHORDS.findIndex(i => i === e.target.value)
              setChordIndex(nextIndex)
            }}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Fretboard
            key={key}
            chord={`${key} ${chord}`}
          />
        </Box>
      </Card>
    </Container>
  );
}

export default Chords;
