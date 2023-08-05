import Login from './components/Login';
import { Grid } from '@mui/material';
import Register from './components/Register';

export default function AuthenticationPage() {
  return (
    <Grid container justifyContent="space-between" direction="row">
      <Grid item>
        <Register />
      </Grid>

      <Grid item>
        <Login />
      </Grid>
    </Grid>
  );
}
