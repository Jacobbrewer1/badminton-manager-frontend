import { useEffect, useState, useRef } from 'react';

/* images */
import HarryImage from '../../../../../public/images/harry.jpg';
import JacobImage from '../../../../../public/images/jacob.jpg';
import BenImage from '../../../../../public/images/ben.jpg';

/* styles */
import theme from 'src/styles/theme';
import StyledTileContainer from './styles/styled/StyledTileContianer';
import StyledIconContainer from './styles/styled/StyledIcon.container';
import StyledImageContainer from './styles/styled/StyledLink.container';
import StyledImage from './styles/styled/StyledLinkImage';
import StyledIconFrontEnd from './styles/styled/StyledIconFrontend';
import StyledIconBackEnd from './styles/styled/StyledIconBackend';
import StyledLinkTypography from './styles/styled/StyledLinkTypography';
import StyledLinkTypographyContainer from './styles/styled/StyledLinkTypography.container';

const tributeSx = {
  display: 'flex',
};

interface ComponentPosition {
  x?: number;
  width?: number;
}

export default function Tributes({ width }: { width: number }) {
  const harryRef = useRef<HTMLInputElement>(null);
  const [harryPos, setHarryPos] = useState<ComponentPosition>({});

  const jacobRef = useRef<HTMLInputElement>(null);
  const [jacobPos, setJacobPos] = useState<ComponentPosition>({});

  const benRef = useRef<HTMLInputElement>(null);
  const [benPos, setBenPos] = useState<ComponentPosition>({});

  const [mousePos, setMousePos] = useState(0);

  const getEffect = (mousePos: number, componentBounds: ComponentPosition) => {
    const { x, width } = componentBounds;

    if (!x || !width) {
      return;
    }

    const relativeMouseX = mousePos - x;

    const mouseXAsDecimal =
      relativeMouseX / width < 1 ? relativeMouseX / width : 1;

    return { opacity: mouseXAsDecimal, blur: 1 - mouseXAsDecimal };
  };

  useEffect(() => {
    function handleResize() {
      if (!harryRef?.current || !jacobRef?.current || !benRef?.current) {
        return;
      }

      const harryBounds = harryRef.current.getBoundingClientRect();
      setHarryPos({ x: harryBounds.x, width: harryBounds.width });

      const jacobBounds = jacobRef.current.getBoundingClientRect();
      setJacobPos({ x: jacobBounds.x, width: jacobBounds.width });

      const benBounds = benRef.current.getBoundingClientRect();
      setBenPos({ x: benBounds.x, width: benBounds.width });
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [harryRef]);

  // mouse position
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos(event.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ ...tributeSx, ...{ width: width } }}>
      <StyledTileContainer
        ref={harryRef}
        className="tile"
        onClick={() =>
          window.open('https://www.linkedin.com/in/harry-whorlow', '_blank')
        }
      >
        <StyledIconContainer
          style={{
            ...{ zIndex: 2, rotate: '3deg' },
            ...getEffect(mousePos, harryPos),
          }}
        >
          <StyledIconFrontEnd />
        </StyledIconContainer>

        <StyledImageContainer>
          <StyledImage
            style={{ rotate: '3deg' }}
            alt="harry whorlow"
            src={HarryImage}
          />

          <StyledLinkTypographyContainer style={{ rotate: '3deg' }}>
            <StyledLinkTypography>HARRY</StyledLinkTypography>
          </StyledLinkTypographyContainer>
        </StyledImageContainer>
      </StyledTileContainer>

      <StyledTileContainer
        ref={jacobRef}
        className="tile"
        style={{ marginLeft: theme.spacing(8) }}
        onClick={() =>
          window.open('https://www.linkedin.com/in/jacobbrewer1', '_blank')
        }
      >
        <StyledIconContainer
          style={{
            ...{ zIndex: 3, rotate: '-2deg' },
            ...getEffect(mousePos, jacobPos),
          }}
        >
          <StyledIconBackEnd />
        </StyledIconContainer>

        <StyledImageContainer>
          <StyledImage
            style={{ rotate: '-2deg' }}
            alt="jacob brewer"
            src={JacobImage}
          />

          <StyledLinkTypographyContainer style={{ rotate: '-2deg' }}>
            <StyledLinkTypography>JACOB</StyledLinkTypography>
          </StyledLinkTypographyContainer>
        </StyledImageContainer>
      </StyledTileContainer>

      <StyledTileContainer
        ref={benRef}
        className="tile"
        onClick={() =>
          window.open('https://www.linkedin.com/in/ben-shellswell', '_blank')
        }
      >
        <StyledIconContainer
          style={{
            ...{ zIndex: 2, rotate: '5deg' },
            ...getEffect(mousePos, benPos),
          }}
        >
          <StyledIconBackEnd />
        </StyledIconContainer>

        <StyledImageContainer>
          <StyledImage
            style={{ rotate: '5deg' }}
            alt="ben shellswell"
            src={BenImage}
          />

          <StyledLinkTypographyContainer style={{ rotate: '5deg' }}>
            <StyledLinkTypography>BEN</StyledLinkTypography>
          </StyledLinkTypographyContainer>
        </StyledImageContainer>
      </StyledTileContainer>
    </div>
  );
}
