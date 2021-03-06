import React from 'react';
import styled from 'styled-components';
import ProjectDetail from './Detail';
import AttentionButton from './AttentionButton';
import { device } from '../../../../responsive';
import { bounceInUp } from '../../../../commons/animations/keyframes';


const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
  transform:scale(0);
  animation:${bounceInUp} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  animation-delay: .5s;
    
  @media ${device.mobileS} {
    height: 100%;
    width: 100%;
  }
`;


const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(40rem, 1.5fr));
  grid-template-rows: repeat(auto-fit,minmax(25rem, 1.5fr));
  align-items: center;
  justify-self: center;
  align-self: center;
`;

const Image = styled.img`
    max-width: 90%; 
    max-height: 80%;
    height: auto;
    background-size: cover;
    display: flex;
    justify-self: center;
    
    @media ${device.mobileS} {
      align-self: flex-start;
      margin-top: -5rem;
    }
`;

const DetailContainer = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 1fr;
  justify-self: center;
  
  @media ${device.mobileS} {
    grid-template-rows: 3fr 1fr;
    height: 80%;
    align-self: flex-start;
  }
`;


const ProjectCard = ({ detail }) => (
  <Container>
    <CardContainer>
      <DetailContainer>
        <ProjectDetail detail={detail}/>
        <AttentionButton delay={0} url={detail.demoUrl} position='left'>Live
          demo</AttentionButton>
        <AttentionButton delay={1} url={detail.srcUrl} position='right'>View
          source</AttentionButton>
      </DetailContainer>
      <Image src={detail.imageUrl} alt={`${detail.name}-image`}/>
    </CardContainer>
  </Container>
);

export default ProjectCard;
