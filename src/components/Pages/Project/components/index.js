import React from 'react';
import styled from 'styled-components';
import Slider from "./Slider";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-rows: 10fr 1fr;
  grid-template-columns: 1fr;
`;

const ProjectContainer = () => (
    <Container>
        <Slider/>
        <div>Icon</div>
    </Container>
);

export default ProjectContainer;