import React from 'react';
import styled from "styled-components";

import {DataType, withDataContext} from "../../../appContext";
import {fadeInSlowly} from "../../../commons/keyframes";
import {device} from "../../../responsive";

const Container = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	align-self: center;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
	

`;


const Text = styled.div`
    width: 70%;
    font-size: 2.5rem;
    font-weight: normal;
    color: ${props => props.theme.primary.dark}
    letter-spacing: .2rem;
    
    &:not(:first-child) {
      margin-top: 3rem;
    }
    
    opacity: 0;
    animation: ${fadeInSlowly} 1.5s ease-in forwards;
    animation-delay: 1.5s;
    
    	  
  @media ${device.mobileS} {
      font-size: 2.5rem;
      width: 90%;
  }
`;

const Paragraphs = ({contents}) => {
    const renderTexts = paragraphs => {
        return paragraphs.map((paragraph, i) =>
            <Text key={i}>
                {paragraph}
            </Text>
        );
    };
    return (
        <Container>
            {renderTexts(contents)}
        </Container>
    );
};

export default withDataContext(Paragraphs, DataType.AboutPage);