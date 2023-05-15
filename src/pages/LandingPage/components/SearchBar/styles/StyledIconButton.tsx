import styled from '@emotion/styled';

/* components */
import IconButton from '@mui/material/IconButton';

/* styles */
import theme from 'src/styles/theme/theme';

const StyledIconButton = styled(IconButton)`
  background-color: ${theme.palette.accent.main};
  border-radius: 5px;

  &.hover {
    background-color: ${theme.palette.background.default};
  }
`;

export default StyledIconButton;
