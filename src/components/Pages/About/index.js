import React from 'react';
import styled from 'styled-components';

import Navigation from '../../commons/Navigation';
import NextPageButton from '../../commons/NextPageButton';
import Heading from 'components/commons/Heading';
import MainContent from "./MainContent";
import {withDataContext} from "../../../appContext";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 4fr .75fr;
`;

const About = ({header}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <Heading color='dark' heading={header}/>
        <MainContent/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export const AboutPage = withDataContext(About, 'About');