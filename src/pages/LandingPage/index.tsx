import { Grid } from '@mui/material';
import AppToolBar from './components/AppToolBar';
import SearchBar from './components/SearchBar';
import './index.scss';

export default function LandingPage() {
  return (
    <div id="main-container">
      <AppToolBar />
      <img
        src="/public/main.jpg"
        alt="badminton background"
        id="main-image"
      ></img>
      <Grid
        direction="column"
        alignItems="center"
        justifyContent="center"
        container
        sx={{ height: '100%', width: '100%' }}
      >
        <Grid item>
          <SearchBar />
        </Grid>
      </Grid>
    </div>
  );
}
