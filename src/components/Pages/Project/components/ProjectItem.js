import React from 'react';
import Navigation from "../../../../commons/components/Navigation";
import Heading from "../../../../commons/components/Heading";
import ProjectCard from "./Card";
import NextPageButton from "../../../../commons/components/NextPageButton";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 4fr .75fr;
`;
const ProjectItem = ({header, detail}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <Heading color='dark' heading={header}/>
        <ProjectCard detail={detail}/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export default ProjectItem;