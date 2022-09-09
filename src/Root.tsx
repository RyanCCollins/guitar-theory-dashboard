import { Container, ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { App } from './App'


const themeLight = createTheme({
  palette: {
    background: {
      default: "#f5f5f5",
    }
  }
});

function Root() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Container sx={{ maxWidth: '1800px !important' }}>
        <App />
      </Container>
    </ThemeProvider>
  );
}

export default Root;
