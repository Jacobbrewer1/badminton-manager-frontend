import { styled } from '@mui/system';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ReactComponent as LogoSvg } from '../../assets/shuttlecock.svg';

interface LogoProps {
  contrast?: 'light' | 'dark';
  height?: number;
}

export default function Logo({ contrast = 'dark', height = 24 }: LogoProps) {
  const StyledBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
  `;

  return (
    <StyledBox>
      <LogoSvg
        fill={contrast === 'dark' ? 'rgb(255,255,255)' : 'rgb(0,0,0)'}
        height={`${height}px`}
      />
      <Typography
        sx={{
          fontSize: `${height}px`,
          fontWeight: 500,
          padding: '0px 16px 0px 16px',
        }}
      >
        Badmin
      </Typography>
    </StyledBox>
  );
}
