import styled from '@emotion/styled';

/* components */
import Tab, { tabClasses } from '@mui/material/Tab';

/* theme */
import theme from 'src/styles/theme';

const StyledTab = styled(Tab)`
  background-color: transparent;
  color: ${theme.palette.background.default};

  font-weight: 500;
  font-size: 24px;

  border: none;

  &.${tabClasses.selected} {
    border-bottom: solid 2px ${theme.palette.background.default};
  }
`;

export default StyledTab;
