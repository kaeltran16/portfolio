import styled from 'styled-components';
import { loadProgress } from '../animations/keyframes';

const HeadingContainer = styled.div`
	width: 100%;
	height: 100%;
  	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const TextHeader = styled.h2`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: .33rem;
  cursor: auto;
  color: ${props => props.color === 'dark'
   ? props.theme.primary.light
   : props.theme.secondary.light}; 
`;

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(circle, 
    ${props => props.theme.accent.dark}, ${props => props.theme.accent.light});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LoadingProgress = styled.div`
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

const LoadingText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Heading = {
   Container: HeadingContainer,
   Text: TextHeader
};

const Loading = {
   Container: LoadingContainer,
   Progress: LoadingProgress,
   Text: LoadingText
};

export { Heading, Loading };
