import dayjs from 'dayjs';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

import StyledTextField from '../styles/StyledAuthTextField';
import StyledIconButton from '../styles/StyledIconButton';

interface Username {
  username?: string;
  error?: boolean;
}

interface Password {
  password?: string;
  error?: boolean;
}

interface RegisterProps {
  setAuthMode: React.Dispatch<React.SetStateAction<'register' | 'login'>>;
}

export default function Register({ setAuthMode }: RegisterProps) {
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
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState<'male' | 'female'>('male');

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
        p={3}
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

        <Grid item container spacing={1}>
          <Grid item xs={6}>
            <StyledTextField
              label="first name"
              value={username.username}
              error={isError}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <StyledTextField
              label="last name"
              value={username.username}
              error={isError}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <StyledTextField
            label="email"
            value={username.username}
            error={isError}
            fullWidth
          />
        </Grid>

        <Grid item container spacing={1}>
          <Grid item xs={6}>
            <DatePicker
              sx={{ backgroundColor: '#ffffff' }}
              label="Date of Birth"
              defaultValue={dayjs('2000-01-01')}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid
            item
            container
            xs={6}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <StyledIconButton
                selected={gender === 'male'}
                onClick={() => setGender('male')}
              >
                <MaleIcon />
              </StyledIconButton>
            </Grid>
            <Grid item>
              <StyledIconButton
                selected={gender === 'female'}
                onClick={() => setGender('female')}
              >
                <FemaleIcon />
              </StyledIconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Button>Register</Button>
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
            <Typography>Already haven an account?</Typography>
          </Grid>

          <Grid item>
            <Button onClick={() => setAuthMode('login')}>Login</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
