import styled from '@emotion/styled';

import linkedIn from '../../../../../../../public/svg/linkedinfilled.svg';

const StyledTileContainer = styled.div`
  height: 150px;
  width: 150px;

  position: relative;

  transition: 1s;
  cursor: url(${linkedIn}) 12 12, pointer;

  :hover: {
    transform: scale(1.1);
  }
`;

export default StyledTileContainer;
