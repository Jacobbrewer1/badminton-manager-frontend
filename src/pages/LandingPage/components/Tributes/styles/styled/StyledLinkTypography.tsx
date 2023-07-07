import styled from '@emotion/styled';

/* components */
import { Typography } from '@mui/material';

/* styles */
import theme from 'src/styles/theme';
import hexToRgba from '../../../../../../styles/utils/hexToRgba';

const StyledLinkTypography = styled(Typography)`
  width: 100%;
  height: 20%;

  font-weight: 500;

  z-index: 1;

  padding-left: 8px;
  border-radius: 0 0 ${theme.spacing(1)} ${theme.spacing(1)};

  color: ${theme.palette.accent.light};
  background-color: ${hexToRgba(theme.palette.accent.main, 0.8)};
`;

export default StyledLinkTypography;
