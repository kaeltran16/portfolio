import styled from 'styled-components';
import { animated } from 'react-spring/hooks';

const Container = styled(animated.div)`
  color: ${props => props.theme.secondary.main}
  height: 100%;
`;


const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90%;
  text-decoration: none;
  color: ${props => props.theme.secondary.main};
`;

const Text = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
  opacity: 0;
  transition: opacity .5s ease-in;
  
  ${Link}:hover & {
    opacity: 1;
  }
`;

const Icon = styled.svg`
  width: 5rem;
  height: 5rem;
  fill: ${props => props.theme.secondary.main}
`;

const AboutPageStyle = {
   Container,
   Link,
   Text,
   Icon
};

export default AboutPageStyle;