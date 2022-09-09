import { useMemo, useState } from 'react';
import { Container, Box, Typography, Select, SelectChangeEvent, FormControl, InputLabel, MenuItem, Card } from '@mui/material';
import { Fretboard } from '../';
import { NOTES, MODES, Mode } from '../../constants'


function Scales() {
  const [noteIndex, setNoteIndex] = useState(3)
  const [modeIndex, setModeIndex] = useState(0)
  const key = useMemo(() => NOTES[noteIndex], [noteIndex]);
  const mode = useMemo(() => MODES[modeIndex] as Mode, [modeIndex]);
  return (
    <Container maxWidth="xl">
      <Card sx={{ my: 4, p: 3 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Scales
        </Typography>
        <Box sx={{ my: 2 }}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Key</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={key}
              onChange={(e: SelectChangeEvent) => {
                const nextIndex = NOTES.findIndex(i => i === e.target.value)
                setNoteIndex(nextIndex)
              }}
              label="Key"
            >
              {NOTES.map(note => (
                <MenuItem key={note} value={note}>{note}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Key</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={mode}
              onChange={(e: SelectChangeEvent) => {
                const nextIndex = MODES.findIndex(i => i === e.target.value)
                setModeIndex(nextIndex)
              }}
              label="Key"
            >
              {MODES.map(mode => (
                <MenuItem key={mode} value={mode}>{mode}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ my: 2 }}>
          <Fretboard
            key={key}
            scale={{
              root: key,
              type: mode,
            }}
          />
        </Box>
      </Card>
    </Container>
  );
}

export default Scales;
