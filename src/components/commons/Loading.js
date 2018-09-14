import React from 'react';
import styled, {keyframes} from 'styled-components';

const load = keyframes`
    0% {
        width: 0;
}
    10% {
        width: 5%;
}
    20% {
        width: 15%;
}
    30% {
        width: 25%;
}
    40% {
        width: 30%;
}
    50% {
        width: 44%;
}
    60% {
        width: 50%;
}
    70% {
        width: 72%;
}
    80% {
        width: 84%;
}
    90% {
        width: 92%;
}
    100% {
        width: 100%;
}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(${props => props.theme.primary.light}, ${props => props.theme.primary.dark});
  background-size: cover;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Progress = styled.div`
  width: 50vw;
  height: 4px;
  
  border-radius: 4px;
  background: black;
  overflow: hidden;
  
  &:after {
     content: '';
  display: block;
  height: 4px;
  background: #fff;
  animation: ${load} 1s linear;
  }
`;

const Text = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Loading = () => (
    <Container>
        <Text>I am thinking..</Text>
        <Progress/>
    </Container>
);

export default Loading;