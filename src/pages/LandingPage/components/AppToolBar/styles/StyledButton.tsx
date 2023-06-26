import styled from '@emotion/styled';

/* components */
import Button from '@mui/material/Button';

/* theme */
import theme from '../../../../../styles/theme/theme';

const StyledButton = styled(Button)`
  color: ${theme.palette.background.default};

  font-size: 24px;

  border: solid 1px #fff;
  padding: 6px;

  &:hover {
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.accent.main};
  }
`;

export default StyledButton;
