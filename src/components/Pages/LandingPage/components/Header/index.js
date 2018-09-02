import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {withContext} from 'appContext';

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

const Header = ({LandingPage}) => (
    <Container>
        <TextPrimary>
            <TextScrambler delay={100} text={LandingPage.welcomeText}/>
        </TextPrimary>
        <TextPrimarySub>
            <TextScrambler delay={2000} text={LandingPage.headline}/>
        </TextPrimarySub>
    </Container>
);

Header.propTypes = {
    LandingPage: PropTypes.object.isRequired
};

export default withContext(Header);