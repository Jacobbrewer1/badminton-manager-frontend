import styled from '@emotion/styled';

/* icons */
import ScreenshotMonitorRoundedIcon from '@mui/icons-material/ScreenshotMonitorRounded';
/* styles */
import theme from 'src/styles/theme';

const StyledIconFrontEnd = styled(ScreenshotMonitorRoundedIcon)`
  height: 100px;
  width: 100px;

  fill: ${theme.palette.accent.light};
`;

export default StyledIconFrontEnd;
