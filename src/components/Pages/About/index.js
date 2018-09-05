import React from 'react';
import styled from 'styled-components';

import Navigation from './components/Navigation';
import NextPageButton from './components/NextPageButton';
import Header from './components/Header';
import MainContent from "./components/MainContent";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.secondary.main};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr .75fr 4fr .25fr;
`;

const AboutPage = () => (
    <Container>
        <Navigation/>
        <Header/>
        <MainContent/>
        <NextPageButton/>
    </Container>
);

export default AboutPage;