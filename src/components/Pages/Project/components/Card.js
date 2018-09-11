import React from 'react';
import styled from 'styled-components';
import DetailContainer from "./DetailContainer";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  justify-self: center;
  align-self: center;
`;

const Image = styled.div`
  background-color: orangered;
  width: 100%;
  height: 100%;
`;

const ProjectCard = () => (
    <Container>
        <DetailContainer/>
        <Image/>
    </Container>
);

export default ProjectCard;