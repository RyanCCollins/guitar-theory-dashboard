import { Box, Typography } from '@mui/material';
import { Scales, Chords } from './components';

export function App() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Guitar Dashboard
      </Typography>
      <Scales />
      <Chords />
    </Box>
  );
}
