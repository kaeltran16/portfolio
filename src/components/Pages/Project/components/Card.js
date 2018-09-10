import React from 'react';
import styled from 'styled-components';
import DetailContainer from "./DetailContainer";

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-self: center;
`;

const Image = styled.div`
  background-color: orangered;
  width: 100%;
  height: 100%;
`;

const Left = styled.div`
  width: 100%;
  height: 100%;
`;

const Right = styled.div`
    width: 100%;
  height: 100%;
`;

const ProjectCard = () => (
    <Container>
        <Left>
            <DetailContainer/>
        </Left>
        <Right>
            <Image/>
        </Right>
    </Container>
);

export default ProjectCard;