import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {withContext} from 'appContext';
import ViewMoreButton from './ViewMoreButton';

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
        <TextPrimary>{LandingPage.welcomeText}</TextPrimary>
        <TextPrimarySub>{LandingPage.headline}</TextPrimarySub>
        <ViewMoreButton/>
    </Container>
);

Header.propTypes = {
    LandingPage: PropTypes.object.isRequired
};

export default withContext(Header);