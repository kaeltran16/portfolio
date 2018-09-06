import React from 'react';
import styled from 'styled-components';

import Navigation from 'components/commons/Navigation';
import Header from './components/Header';
import NextPageButton from 'components/commons/NextPageButton';
import Background from "./components/Background";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
`;

const LandingPage = () => (
    <div>
        <Background/>
        <Container>
            <Navigation color='light' size={5}/>
            <Header/>
            <NextPageButton color='light' size={5}/>
        </Container>
    </div>

);

export {LandingPage};