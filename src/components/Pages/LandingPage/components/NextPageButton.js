import React from 'react';
import styled, {keyframes} from 'styled-components';

const move = keyframes`
    25% {
          opacity: 1;
    }
    33% {
          opacity: 1;
          transform: translateY(30px);
    }
    67% {
          opacity: 1;
          transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
`;


const Button = styled.button`
    display: flex;
	cursor: pointer;
	border: 0;
	background: transparent;
	outline: 0;
	overflow: hidden;
	align-items: center;
	position: absolute;
	justify-content: center;
	width: 100%;
	bottom: 0;
`;

const IconContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 15rem;
    top: 2rem;
`;

const Icon = styled.svg`
    position: absolute;
    left: 0;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: ${move} 3s ease-out infinite;
    width: 5rem;
    height: 5rem;
    fill: ${props => props.theme.secondary.main};
    
	&:first-child {
	  animation: ${move} 3s ease-out 1s infinite;
    }
			
	&:nth-child(2) {
      animation: ${move} 3s ease-out 2s infinite;
    }

    &:before,
    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 51%;
    }

    &:before {
      left: 0;
      transform: skew(0deg, 30deg);
    } 

    &:after {
      right: 0;
      width: 50%;
      transform: skew(0deg, -30deg);
    }   
`;

const Text = styled.span`
    width: 100%;
    height: 100%;
	opacity: 0;
	position: absolute;
	right: 50%;
	top: -100%;
	transform: translateX(50%);
	transition: .3s all;	
`;


const TextContainer = styled.div`
    border-radius: 2rem 0 0 2rem;
    text-transform: uppercase;
    position: relative;
	width: 0;
	height: 5rem;
	overflow: hidden;
	background: ${props => props.theme.secondary.main};
	color: ${props => props.theme.primary.main};
	font-weight: 700;
	transition: .2s all;
`;


const NextPageButton = () => (
    <Button>
        <TextContainer>
            <Text>View more..</Text>
        </TextContainer>
        <IconContainer>
            <Icon viewBox='0 0 20 20'>
                <path
                    d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'/>
            </Icon>

            <Icon viewBox='0 0 20 20'>
                <path
                    d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'/>
            </Icon>

            <Icon viewBox='0 0 20 20'>
                <path
                    d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'/>
            </Icon>
        </IconContainer>


    </Button>
);

export default NextPageButton;