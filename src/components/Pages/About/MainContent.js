import React from 'react';
import styled from "styled-components";
import TextScrambler from "../../commons/TextScrambler";
import {withDataContext} from "../../../appContext";

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
`;

const MainContent = ({contents}) => {
    const renderTexts = paragraphs => {
        let delay = 1500;
        return paragraphs.map((paragraph, i) =>
            <Text key={i}>
                <TextScrambler text={paragraph} delay={delay + 300}/>
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