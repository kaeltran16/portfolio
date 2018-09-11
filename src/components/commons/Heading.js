import React from 'react';
import styled from 'styled-components';

import TextScrambler from 'components/commons/TextScrambler';

const Container = styled.div`
	width: 100%;
	height: 100%;
  	align-items: center;
	justify-content: flex-start;
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
    : props.theme.secondary.light };
`;


const Heading = ({heading, color}) => (
    <Container>
        <TextHeader color={color}>
            <TextScrambler delay={100} text={heading}/>
        </TextHeader>
    </Container>
);

export default Heading;
