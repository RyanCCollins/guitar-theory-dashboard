import { useState, useMemo } from 'react';
import { Container, Box, Typography, Select, SelectChangeEvent, FormControl, InputLabel, MenuItem, Card } from '@mui/material';

const notes = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
];

function rotateLeft(array: any[], startIndex: number) {
  return [...array.slice(startIndex - array.length), ...array.slice(0, startIndex - array.length)]
}

type ScaleType = 'Major' | 'Minor'
const SCALES: Record<ScaleType, number[]> = {
  'Major': [1, 3, 5, 6, 8, 10, 12],
  'Minor': [1, 3, 4, 6, 8, 9, 11]
};

type ChordType = 'Major' | 'Minor' | 'Major 7' | '7' | 'Minor 7' | 'Minor 7 Flat 5' | 'Diminished';
const CHORDS: Record<ChordType, number[]> = {
  'Major': [1, 5, 8],
  'Minor': [1, 4, 8],
  'Major 7': [1, 5, 8, 12],
  '7': [1, 5, 8, 11],
  'Minor 7': [1, 4, 8, 11],
  'Minor 7 Flat 5': [1, 4, 7, 11],
  'Diminished': [1, 4, 7],
};

type NoteType = ChordType | ScaleType
const SCALE_CHORDS: Record<ScaleType, NoteType[]> = {
  'Major': [
    'Major',
    'Minor',
    'Minor',
    'Major',
    'Major',
    'Minor',
    'Diminished',
  ],
  'Minor': [
    'Minor',
    'Diminished',
    'Major',
    'Minor',
    'Minor',
    'Major',
    'Major',
  ],
};

const typeToShordHand = (scaleType: ChordType | ScaleType) => scaleType.slice(0, 3).toLowerCase();

function App() {
  const [key, setKey] = useState(3)
  const shiftedNotes = useMemo(() => rotateLeft(notes, key), [key]);
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Guitar Dashboard
        </Typography>
        <Box sx={{ my: 2 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Key</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={notes[key]}
              onChange={(e: SelectChangeEvent) => {
                const nextIndex = notes.findIndex(i => i === e.target.value)
                setKey(nextIndex)
              }}
              label="Key"
            >
              {notes.map(note => (
                <MenuItem key={note} value={note}>{note}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Scales
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
            {Object.keys(SCALES).map((type) => {
              return (
                <Card sx={{ mb: 1, p: 2, flexGrow: 1, maxWidth: 'fit-content' }}>
                  <Typography variant="h5" component="h2">
                    {`${type} Scale Notes`}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    {SCALES[type as ScaleType].map((item: number) => (
                      <Typography key={item}>
                        {shiftedNotes[item - 1]}
                      </Typography>
                    ))}
                  </Box>
                </Card>
              )
            })}
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Chord Notes
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
            {Object.keys(CHORDS).map((type) => {
              return (
                <Card sx={{ mb: 1, p: 2, flexGrow: 1, maxWidth: 'fit-content' }}>
                  <Typography variant="h5" component="h2">
                    {`${type} Chord Notes`}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    {CHORDS[type as ChordType].map((item: number) => (
                      <Typography key={item}>
                        {shiftedNotes[item - 1]}
                      </Typography>
                    ))}
                  </Box>
                </Card>
              )
            })}
          </Box>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Scale Chords
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap' }}>
            {Object.keys(SCALE_CHORDS).map((type: any) => {
              return (
                <Card sx={{ mb: 1, p: 2, flexGrow: 1, maxWidth: 'fit-content' }}>
                  <Typography variant="h5" component="h2">
                    {`${type} Chords`}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                    {SCALE_CHORDS[type as ScaleType].map((noteType: NoteType, index: number) => {
                      const chords = SCALES[type as ScaleType]
                      const note = shiftedNotes[chords[index] - 1]
                      const noteTypeShortHand = typeToShordHand(noteType);
                      return (
                        <Typography key={note}>
                          {`${note}${noteTypeShortHand}`}
                        </Typography>
                      )
                    })}
                  </Box>
                </Card>
              )
            })}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
