import styled from '@emotion/styled';

/* styles */
import theme from 'src/styles/theme';

const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%; 

  border-radius: ${theme.spacing(1)};
  overflow: hidden:
  
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default StyledImageContainer;
