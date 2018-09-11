import React from 'react';
import styled from 'styled-components';
import ProjectDetail from "./Detail";
import AttentionButton from "./AttentionButton";

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 1fr;
`;


const DetailContainer = () => (
    <Container>
        <ProjectDetail/>
        <AttentionButton url='http://github.com' position='left'>Live demo</AttentionButton>
        <AttentionButton url='http://github.com' position='right'>View source</AttentionButton>
    </Container>
);

export default DetailContainer;
