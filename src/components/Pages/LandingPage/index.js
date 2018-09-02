import React from 'react';
import styled from 'styled-components';

import Background from './components/Background';
import Navigation from './components/Navigation';
import Header from './components/Header';
import NextPageButton from './components/NextPageButton';

const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
`;

const LandingPage = () => (
    <Container>
        <Background/>
        <Navigation/>
        <Header/>
        <NextPageButton/>
    </Container>
);

export {LandingPage};