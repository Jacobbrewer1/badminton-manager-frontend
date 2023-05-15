import Logo from 'src/components/Logo/Logo';
import Grid from '@mui/material/Grid';

import LoginIcon from '@mui/icons-material/Login';
import { StyledAppBar, StyledButton, StyledTab, StyledTabs } from './styles';
import { useState } from 'react';

export default function AppToolBar() {
  const [tab, setTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <StyledAppBar>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        spacing={2}
      >
        <Grid item xs={2}>
          <Logo />
        </Grid>

        <Grid item>
          <StyledTabs value={tab} onChange={handleTabChange}>
            <StyledTab label="League" value={0} />
            <StyledTab label="Clubs" value={1} />
            <StyledTab label="Tournaments" value={2} />
          </StyledTabs>
        </Grid>

        <Grid item xs={1} alignSelf={'flex-end'}>
          <StyledButton>
            <LoginIcon sx={{ marginRight: '8px' }} />
            Login
          </StyledButton>
        </Grid>
      </Grid>
    </StyledAppBar>
  );
}
