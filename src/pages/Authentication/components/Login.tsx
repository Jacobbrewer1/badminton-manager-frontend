import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import StyledTextField from '../styles/StyledAuthTextField';

interface Username {
  username?: string;
  error?: boolean;
}

interface Password {
  password?: string;
  error?: boolean;
}

interface LoginProps {
  setAuthMode: React.Dispatch<React.SetStateAction<'register' | 'login'>>;
}

export default function Login({ setAuthMode }: LoginProps) {
  const fetchLogin = async () => {
    const response = await fetch('http://localhost:3000/login');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery('login', fetchLogin, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const [username, setUsername] = useState<Username>({});
  const [password, setPassword] = useState<Password>({});

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      <Grid
        item
        container
        direction="row"
        spacing={1}
        p={1}
        width="400px"
        justifyContent="center"
      >
        <Grid item xs={12}>
          <StyledTextField
            label="username"
            value={username.username}
            error={isError}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            label="password"
            value={password.password}
            error={isError}
            fullWidth
          />
        </Grid>

        <Grid item>
          <Button>Login</Button>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sx={{ marginTop: 4 }}
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography>Don't have an account? </Typography>
          </Grid>

          <Grid item>
            <Button onClick={() => setAuthMode('register')}>Register</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
