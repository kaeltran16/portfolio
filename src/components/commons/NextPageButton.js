import React from 'react';
import styled, {keyframes} from 'styled-components';
import {withRouter} from 'react-router-dom';

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

const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  
  to {
    transform: scale(1);
  }
`;

const Icon = styled.svg`
    position: absolute;
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
    animation: ${move} 3s ease-out infinite;
    
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


const Container = styled.div`
    width: 5%;
    position: relative;
    cursor: pointer;
    display: flex;
    justify-self: ${props => props.align}
    align-items: flex-start;
    justify-content: center;
 
    ${Icon} {
        height: ${props => `${props.size}rem`}
        width: ${props => `${props.size}rem`}
        fill: ${props => props.color === 'dark'
    ? props.theme.primary.main
    : props.theme.secondary.main };
    }
        animation: ${zoomIn} 2s;

`;


const NextPageButton = ({align, color, size, horizontal, nextPageUrl, history}) => {
    const gotoNextPage = () => {
        history.push(nextPageUrl);
    };
    return (
        <Container align={align} color={color} size={size} horizontal={horizontal} onClick={() => gotoNextPage()}>
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
        </Container>
    );
}

export default withRouter(NextPageButton);