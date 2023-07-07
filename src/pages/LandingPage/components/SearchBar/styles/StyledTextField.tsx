import styled from '@emotion/styled';

/* components */
import TextField from '@mui/material/TextField';

/*styles*/
import theme from 'src/styles/theme';

const StyledTextField = styled(TextField)({
  '& label': {
    fontWeight: 500,
    fontSize: '18px',
    color: theme.palette.text.primary,
  },
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'red',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
});

export default StyledTextField;
