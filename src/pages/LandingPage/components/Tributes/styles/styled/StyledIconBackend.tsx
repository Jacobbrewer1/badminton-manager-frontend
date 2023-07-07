import styled from '@emotion/styled';

/* icons */
import StorageRoundedIcon from '@mui/icons-material/StorageRounded';
/* styles */
import theme from 'src/styles/theme';

const StyledIconBackEnd = styled(StorageRoundedIcon)`
  height: 100px;
  width: 100px;

  fill: ${theme.palette.accent.light};
`;

export default StyledIconBackEnd;
