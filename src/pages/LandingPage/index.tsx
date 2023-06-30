import { Box, Container, Grid, Paper, Typography } from '@mui/material';

/* components */
import AppToolBar from 'src/components/AppToolBar';
import SearchBar from './components/SearchBar';
import LinkTile from './components/LinkTile';

/* images */
import BadminMain from '../../../public/badminMain.jpg';
import BadminNet from '../../../public/badminNet.jpg';
import BadminPlayer from '../../../public/badminPlayer.jpg';
import BadminShuttlecock from '../../../public/badminShuttlecock.jpg';
import theme from 'src/styles/theme';

export default function LandingPage() {
  const tileSizing = { widthConstant: 300, heightConstant: 300 };

  return (
    <Grid container direction="column" alignItems="center">
      {/* section one */}
      <Grid item sx={{ width: ' 100%' }}>
        <Paper
          sx={{
            height: '700px',
            width: '100%',
            backgroundImage: `url(${BadminMain})`,
            backgroundSize: 'cover',
          }}
        >
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            sx={{ height: '50%' }}
          >
            <Grid item sx={{ width: '100%' }} alignSelf={'flex-start'}>
              <AppToolBar />
            </Grid>

            <Grid item>
              <SearchBar />
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* section two */}
      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '1100px' }}
        spacing={4}
      >
        <Grid item>
          <Box
            sx={{
              width: `${
                parseInt(theme.spacing(3).replace('px', '')) * 2 +
                tileSizing.widthConstant * 3
              }px`,
            }}
          >
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 400,
                    letterSpacing: 1.1,
                  }}
                >
                  What are you looking for?
                </Typography>
              </Grid>

              <Grid item>
                <Typography sx={{ fontWeight: 400, width: '50%' }}>
                  Use the tiles to navigate the website. If your not
                  particularly good we advise, for your own safety, avoiding the
                  rankings page.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item>
          <Container>
            <Grid container spacing={3}>
              <Grid
                container
                item
                direction="column"
                spacing={3}
                sx={{ width: 'min-content' }}
              >
                <Grid container item spacing={3}>
                  <Grid item>
                    <LinkTile
                      helperText="Players"
                      imageLink={BadminNet}
                      sizing={tileSizing}
                      link=""
                    />
                  </Grid>

                  <Grid item>
                    <LinkTile
                      helperText="Rankings"
                      imageLink={BadminPlayer}
                      sizing={tileSizing}
                      link=""
                    />
                  </Grid>
                </Grid>

                <Grid item>
                  <LinkTile
                    helperText="League"
                    imageLink={BadminShuttlecock}
                    sizing={{ ...tileSizing, widthVariant: 'large' }}
                    link=""
                  />
                </Grid>
              </Grid>

              <Grid item>
                <LinkTile
                  helperText="Clubs"
                  imageLink={BadminShuttlecock}
                  sizing={{ ...tileSizing, heightVariant: 'large' }}
                  link=""
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>

      {/* section three */}
      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: '100%', height: '1000px' }}
      ></Grid>
    </Grid>
  );
}
