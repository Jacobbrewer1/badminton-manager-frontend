import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';

interface Username {
  username?: string;
  error?: boolean;
}

interface Password {
  password?: string;
  error?: boolean;
}

export default function Login() {
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
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <TextField
          label="username"
          value={username.username}
          error={isError}
          fullWidth
        />
      </Grid>

      <Grid item>
        <TextField
          label="password"
          value={password.password}
          error={isError}
          fullWidth
        />
      </Grid>

      <Grid item>
        <Button>Login</Button>
      </Grid>

      <Grid>
        <Typography>Don't have an account? </Typography>
        <Button>Register</Button>
      </Grid>
    </Grid>
  );
}
