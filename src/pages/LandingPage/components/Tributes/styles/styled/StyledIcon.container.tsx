import styled from '@emotion/styled';

/* styles */
import theme from 'src/styles/theme';

const StyledIconContainer = styled.div`
  height: 100%;
  width: 100%;

  background-color: ${theme.palette.accent.main};

  border-radius: ${theme.spacing(1)};
  box-shadow: 0vmin 3vmin 6vmin rgb(0 0 0 / 50%),
    inset 0vmin 0.5vmin 1vmin rgb(255 255 255 / 15%);
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default StyledIconContainer;
