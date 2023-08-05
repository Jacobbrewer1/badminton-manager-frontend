import Login from './components/Login';
import { Grid } from '@mui/material';
import Register from './components/Register';
import { useState } from 'react';

import AuthBackground from '../../../public/images/authenticationBackground.jpg';

export default function AuthenticationPage() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Grid container justifyContent="space-between" direction="row">
        <Grid item xs={4}>
          <Register setAuthMode={setAuthMode} />
        </Grid>

        <Grid item xs={4}>
          <Login setAuthMode={setAuthMode} />
        </Grid>
      </Grid>

      <img
        src={AuthBackground}
        alt="badminton tournament"
        style={{
          position: 'absolute',
          objectFit: 'cover',
          top: 0,
          right: authMode === 'register' ? 0 : undefined,
          left: authMode === 'login' ? 0 : undefined,

          width: '66%',
          zIndex: 5,
        }}
      />
    </div>
  );
}
