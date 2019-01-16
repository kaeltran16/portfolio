import styled from 'styled-components';
import { fadeInUp } from '../../commons/animations/keyframes';
import { device } from '../../styles/responsive';
import { animated } from 'react-spring/hooks';

const Container = styled(animated.div)`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr;
  width: 90%;
  opacity: 0;
  animation: ${fadeInUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  &:hover {
    transform: translateY(5rem);
  },

  
  @media ${device.mobileS} {
    margin-top: 5rem;
  } 
`;

const SkillHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  justify-self: center; 
  align-self: center;
  
  @media ${device.mobileS} {
    font-size: 1.75rem;
  }
`;

const Icon = styled.svg`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  fill: ${props => props.theme.accent.dark};
`;


export { Container, SkillHeading, Icon };
