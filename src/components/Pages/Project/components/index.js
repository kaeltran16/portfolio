import React from 'react';
import styled from 'styled-components';

import Navigation from 'components/commons/Navigation';
import NextPageButton from 'components/commons/NextPageButton';
import Heading from 'components/commons/Heading';
import {withDataContext} from "appContext";
import withScroll from "HOCs/withScroll";
import CardContainer from "./CardContainer";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 4fr .75fr;
`;

const Project = ({match, header}) => {
    return (
        <Container>
            <Navigation color='dark' size={5}/>
            <Heading heading={header}/>
            <CardContainer/>
            <NextPageButton align='flex-end' color='dark' size={2}/>
        </Container>
    );
}

export const ProjectPage = withScroll(withDataContext(Project, 'Project'), '/contact', '/skill');