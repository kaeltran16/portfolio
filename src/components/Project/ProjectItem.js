import React from 'react';
import Navigation from "../../commons/components/Navigation/index";
import ProjectCard from "./Card";
import NextPageButton from "../../commons/components/NextPageButton";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 5fr .75fr;
`;
const ProjectItem = ({header, detail}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <ProjectCard detail={detail}/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export default ProjectItem;
