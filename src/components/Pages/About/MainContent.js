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
	display: flex;
	flex-direction: column;
`;

const Text = styled.div`
    width: 80%;
    font-size: 2.5rem;
    font-weight: normal;
    color: ${props => props.theme.primary.dark}
    letter-spacing: .2rem;
    &:not(:first-child) {
      margin-top: 2rem;
    }
`;

const MainContent = ({contents}) => (
    <Container>
        <Text>
            <TextScrambler text={contents[0]} delay={500}/>
        </Text>
        <Text>
            <TextScrambler text={contents[1]} delay={1000}/>
        </Text>
        <Text>
            <TextScrambler text={contents[2]} delay={1200}/>
        </Text>
        <Text>
            <TextScrambler text={contents[3]} delay={1500}/>
        </Text>
    </Container>
);

export default withDataContext(MainContent, 'About');