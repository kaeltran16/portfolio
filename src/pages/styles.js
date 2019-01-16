import styled from 'styled-components';
import { device } from '../styles/responsive';
import { animated } from 'react-spring/hooks';

const LandingPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
`;

const ContactPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.primary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 3fr 1fr;
`;

const AboutPageContainer = styled(animated.div)`
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 4fr .5fr;

    
    @media ${device.mobileS} {
      grid-template-rows: 1fr .75fr 4fr 1fr;
    }
`;


export { LandingPageContainer, ContactPageContainer, AboutPageContainer };
