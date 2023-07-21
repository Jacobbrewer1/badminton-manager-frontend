import { ThemeProvider } from '@mui/material/styles';

import LandingPage from 'src/pages/LandingPage';

import theme from 'src/styles/theme';
import './app.module.css';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage></LandingPage>
    </ThemeProvider>
  );
}

export default App;
