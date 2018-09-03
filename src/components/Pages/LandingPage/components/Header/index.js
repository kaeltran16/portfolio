import React from 'react';
import styled from 'styled-components';

import {withDataContext} from 'appContext';

import TextScrambler from 'components/commons/TextScrambler';

const Container = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: column;
`;

const TextPrimary = styled.h1`
	color: ${props => props.theme.secondary.main};
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
`;
const TextPrimarySub = styled.h2`
	color: ${props => props.theme.secondary.main};
	font-size: 4rem;
	font-weight: 700;
`;

const Header = ({primaryHeader, subHeader}) => (
    <Container>
        <TextPrimary>
            <TextScrambler delay={100} text={primaryHeader}/>
        </TextPrimary>
        <TextPrimarySub>
            <TextScrambler delay={2000} text={subHeader}/>
        </TextPrimarySub>
    </Container>
);

export default withDataContext(Header, 'LandingPage');
