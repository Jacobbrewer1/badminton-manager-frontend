import styled from '@emotion/styled';

/* components */

import IconButton from '@mui/material/IconButton';
import theme from 'src/styles/theme';

const StyledIconButton = styled(IconButton)(
  ({ selected }: { selected: boolean }) => ({
    height: '56px',
    width: ' 56px',

    backgroundColor: selected ? theme.palette.accent.main : undefined,
    borderRadius: 3,

    '.MuiSvgIcon-root': {
      color: selected ? theme.palette.background.paper : undefined,
    },
  }),
);

export default StyledIconButton;
