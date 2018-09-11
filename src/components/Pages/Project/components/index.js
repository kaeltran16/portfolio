import React from 'react';
import styled from 'styled-components';
import ProjectCard from "./Card";

const Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
`;

const ProjectContainer = () => (
    <Container>
        <ProjectCard/>
    </Container>
);

export default ProjectContainer;