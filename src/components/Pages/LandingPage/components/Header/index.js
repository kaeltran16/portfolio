import React from 'react';
import styled from 'styled-components';

import {DataType, withDataContext} from 'appContext';

import TextScrambler from 'commons/components/TextScrambler';
import {device} from "../../../../../responsive";

const Container = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Text = styled.h3`
    color: ${props => props.theme.secondary.main};
`;

const TextPrimary = Text.extend`
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
	
	 @media ${device.mobileS} {
      font-size: 4.5rem;
  }
`;
const TextPrimarySub = Text.extend`
	font-size: 3rem;
	font-weight: 700;
	
	 @media ${device.mobileS} {
      font-size: 2rem;
  }

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

export default withDataContext(Header, DataType.LandingPage);
