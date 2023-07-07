import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import theme from 'src/styles/theme';

interface LinkTileProps {
  sizing: {
    widthVariant?: 'large' | 'small';
    heightVariant?: 'large' | 'small';
    widthConstant: number;
    heightConstant: number;
  };

  link: string;
  helperText: string;
  imageLink: string;
}

export default function LinkTile({
  sizing: {
    widthVariant = 'small',
    heightVariant = 'small',
    widthConstant,
    heightConstant,
  },
  link,
  imageLink,
  helperText,
}: LinkTileProps) {
  return (
    <Card
      sx={
        heightVariant === 'small'
          ? { height: `${heightConstant}px` }
          : {
              height: `${
                parseInt(theme.spacing(3).replace('px', '')) +
                heightConstant * 2
              }px`,
            }
      }
      style={
        widthVariant === 'small'
          ? { width: `${widthConstant}px` }
          : {
              width: `${
                parseInt(theme.spacing(3).replace('px', '')) + widthConstant * 2
              }px`,
            }
      }
    >
      <Paper
        onClick={() => {
          console.timeLog(link);
        }}
        sx={{
          height: '100%',
          backgroundImage: `url(${imageLink})`,
          backgroundSize: 'cover',
          transition: 'opacity 1s',

          display: 'flex',
          flexDirection: 'column-reverse',
          '&:hover': { opacity: 0.7 },
        }}
      >
        <Box
          sx={{
            height: '40px',
            width: '100%',
            backgroundColor: 'rgba(225,225,225,0.8)',
            padding: theme.spacing(1),

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography component="h2" variant="h6" sx={{ width: '100%' }}>
            {helperText}
          </Typography>
        </Box>
      </Paper>
    </Card>
  );
}
