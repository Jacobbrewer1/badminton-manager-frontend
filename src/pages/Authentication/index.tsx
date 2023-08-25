import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { Grid } from '@mui/material';
import Register from './components/Register';
import Login from './components/Login';

import AuthBackground from '../../../public/images/authenticationBackground.jpg';

export default function AuthenticationPage() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const authRef = useRef<HTMLInputElement>(null);
  const tlRef = useRef<any | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tlRef.current && tlRef.current.progress(0).kill();
      tlRef.current = gsap.timeline().to('#sliderId', {
        x: 400,
        duration: 0.8,
        ease: 'slow',
      });
    }, authRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tlRef.current.reversed(authMode === 'login');
  }, [authMode]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        backgroundColor: 'rgb(241,241,241)',
      }}
      ref={authRef}
    >
      <Grid
        container
        justifyContent="space-between"
        direction="row"
        height="100%"
      >
        <Grid item>
          <Register setAuthMode={setAuthMode} />
        </Grid>

        <Grid item>
          <Login setAuthMode={setAuthMode} />
        </Grid>
      </Grid>

      <img
        src={AuthBackground}
        alt="badminton tournament"
        id="sliderId"
        style={{
          position: 'absolute',
          objectFit: 'cover',
          top: 0,

          width: 'calc(100% - 400px)',
          height: '80vh',
          zIndex: 5,

          borderRadius: '0 0 5px 5px',
        }}
      />
    </div>
  );
}
