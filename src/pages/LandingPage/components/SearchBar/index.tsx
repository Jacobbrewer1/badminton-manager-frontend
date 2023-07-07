import Grid from '@mui/material/Grid';
import { Divider, Toolbar } from '@mui/material';
import { ReactComponent as LogoSvg } from '../../../../assets/shuttlecock.svg';
import theme from 'src/styles/theme';

import { useCallback, useState } from 'react';
import { StyledIconButton, StyledTextField } from './styles';

interface Search {
  player?: string;
  club?: string;
  league?: string;
}

export default function SearchBar() {
  const [logoHover, setLogoHover] = useState<boolean>(false);
  const [search, setSearch] = useState<Search>({});

  const getLogoColor = useCallback(() => {
    if (logoHover) {
      return theme.palette.accent.main;
    } else {
      return theme.palette.background.default;
    }
  }, [logoHover]);

  const handlePlayerChange = (newValue: string) => {
    setSearch((previousState) => {
      return { ...previousState, player: newValue };
    });
  };

  const handleClubChange = (newValue: string) => {
    setSearch((previousState) => {
      return { ...previousState, club: newValue };
    });
  };

  const handleLeagueChange = (newValue: string) => {
    setSearch((previousState) => {
      return { ...previousState, league: newValue };
    });
  };

  return (
    <Toolbar
      sx={{
        borderRadius: '5px',
        backgroundColor: theme.palette.background.default,
        padding: '8px',
      }}
      disableGutters
    >
      <form>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <StyledTextField
              key="player"
              label="Player"
              value={search?.player ?? ''}
              onChange={(e) => handlePlayerChange(e.target.value)}
              fullWidth
            />
          </Grid>

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <Grid item>
            <StyledTextField
              key="club"
              label="Club"
              value={search?.club ?? ''}
              onChange={(e) => handleClubChange(e.target.value)}
              fullWidth
            />
          </Grid>

          <Divider orientation="vertical" variant="middle" flexItem></Divider>

          <Grid item>
            <StyledTextField
              key="league"
              label="League"
              value={search?.league ?? ''}
              onChange={(e) => handleLeagueChange(e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid item>
            <StyledIconButton>
              <LogoSvg
                onMouseOver={() => setLogoHover(true)}
                onMouseOut={() => setLogoHover(false)}
                height="100%"
                width="35px"
                fill={getLogoColor()}
              />
            </StyledIconButton>
          </Grid>
        </Grid>
      </form>
    </Toolbar>
  );
}
