import React from 'react';
import styled, {keyframes} from "styled-components";

const jackInTheBox = keyframes`
    from {
        opacity: 0;
        transform: scale(0.1) rotate(30deg);
        transform-origin: center bottom;
    }

    50% {
        transform: rotate(-10deg);
}

    70% {
        transform: rotate(3deg);
}

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const zoomIn = keyframes`
    0% {
        transform:scale(0);
}
    100% {
        transform:scale(1);
}
`;

const top = distance => keyframes`
    from{
        transform: translate(0rem, 0);
    }
    to {
        transform: translate(0rem, ${distance}rem);
    }
`;
const bottom = distance => keyframes`
    from{
        transform: translate(${distance}rem, 0);
    }
    to{
        transform: translate(0rem, 0);
    }
`;


const Container = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  animation: ${jackInTheBox} 1.5s ease-in forwards;
  animation-delay: ${props => props.delay + 1.5}s;
  opacity: 0;
`;

const Button = styled.a`
  &:link,
  &:visited {
  color: ${props => props.theme.primary.main}
  width: 70%;
  height: 70%;
  text-decoration: none;
  background: transparent;
  outline: none;
  font-size: 3rem;
  position: relative;
  z-index: 3;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.15s;
     animation: ${zoomIn} .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;

  }
  
  &::after,
  &::before {
			content: "";
			position: absolute;
			z-index: -1;
			height: 40%;
			width: 10%;
			transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
			border-radius: 50%;		
		}
		&::before {
			background-color: ${props => props.theme.accent.main};
			animation: ${top(3)} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.25s infinite alternate;
			${props => props.position === 'left' && `
			    left: 5%;
			`};
			${props => props.position === 'right' && `
			    right: -2%;
			`};
    }
		&::after {
			background-color: ${props => props.theme.accent.dark};;
			animation: ${props => props.position === 'left' ? bottom(-15) : bottom(15)} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s infinite alternate;
			top: 90%;
			left: ${props => props.position === 'right' ? '7%' : '93%'};
			right: ${props => props.position === 'left' ? '7%' : '93%'};
		}
		&:hover {
			color: white;
			font-weight: bold;
			&::before,
			&::after {
				top: 0;
				height: 100%;
				width: 100%;
				border-radius: 0;
				animation: none;
			}
			&::after {
				left: 5%;
			}
			&::before {
				top: 0.5rem;
				left: 0.35rem;
			}
		}
`;
const AttentionButton = ({url, children, position, delay}) => (
    <Container delay={delay}>
        <Button href={url} target='_blank' position={position}>{children}</Button>
    </Container>
);

export default AttentionButton;