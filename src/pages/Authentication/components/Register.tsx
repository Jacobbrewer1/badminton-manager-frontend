import { Button, Grid, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
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

export default function Register() {
  const fetchRegister = async () => {
    const response = await fetch('http://localhost:3000/register');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { isLoading, isError, data, error } = useQuery(
    'register',
    fetchRegister,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    },
  );

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

      <Grid item container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="first name"
            value={username.username}
            error={isError}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="last name"
            value={username.username}
            error={isError}
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid item>
        <TextField
          label="email"
          value={username.username}
          error={isError}
          fullWidth
        />
      </Grid>

      <Grid item>
        <DatePicker label="Date of Birth" defaultValue={dayjs('2022-04-17')} />
      </Grid>

      <Grid item></Grid>

      <Grid item>
        <Button>Register</Button>
      </Grid>

      <Grid item>
        <Typography>Already haven an account?</Typography>
        <Button>Login</Button>
      </Grid>
    </Grid>
  );
}