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

const Text = styled(animated.p)`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
`;

const Icon = styled.svg`
  width: 5rem;
  height: 5rem;
  fill: ${props => props.theme.secondary.main}
`;

export { Container, Link, Text, Icon };
