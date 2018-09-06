import React from 'react';
import styled from 'styled-components';

import {withDataContext} from 'appContext';

import TextScrambler from 'components/commons/TextScrambler';

const Container = styled.div`
	width: 100%;
	height: 100%;
  	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const TextHeader = styled.h2`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 3rem;
  letter-spacing: .33rem;
  cursor: auto;
  color: ${props => props.theme.primary.light};
`;


const Header = ({header}) => (
    <Container>
        <TextHeader>
            <TextScrambler delay={100} text={header}/>
        </TextHeader>
    </Container>
);

export default withDataContext(Header, 'About');