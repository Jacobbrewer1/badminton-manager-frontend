import styled from '@emotion/styled';

import theme from 'src/styles/theme';

const StyledImage = styled.img`
  height: 100%;
  width: 100%;

  border-radius: ${theme.spacing(1)};

  position: absolute;
  left: 0;
  top: 0;
`;

export default StyledImage;
