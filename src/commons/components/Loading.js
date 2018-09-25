import React from 'react';
import styled from 'styled-components';
import {loadProgress} from "../animations/keyframes";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle, ${props => props.theme.accent.dark}, ${props => props.theme.accent.light});
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
  animation: ${loadProgress} 1s linear;
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