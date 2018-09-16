import React from 'react';
import styled, {keyframes} from "styled-components";
import {withDataContext} from "../../../appContext";
import {device} from "../../../responsive";

const fadeInOut = keyframes`
    0% {
        opacity: 0;
}

    50% {opacity: .5}

    100% {
        opacity: 1;
}
`
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
      margin-top: 5rem;
    }
    opacity: 0;
    animation: ${fadeInOut} 1.5s ease-in forwards;
    animation-delay: 1.5s;
         @media ${device.mobileS} {
          width: 90%;
          font-size: 3.5rem;
    }
      @media ${device.mobileM} {
          width: 90%;
          font-size: 3rem;
    }
     @media ${device.mobileL} {
          width: 85%;
          font-size: 3rem;
    }
    
  
    
 `;

const MainContent = ({contents}) => {
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

export default withDataContext(MainContent, 'About');