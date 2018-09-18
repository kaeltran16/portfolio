import React from 'react';
import styled, {keyframes} from 'styled-components';
import natours from 'assets/img/natours.png';
import ProjectDetail from "./Detail";
import AttentionButton from "./AttentionButton";

const bounceInUp = keyframes`
    0% {
        opacity: 0;
    transform: translateY(2000px);
}
    60% {
        opacity: 1;
    transform: translateY(-30px);
}
    80% {
        transform: translateY(10px);
}
    100% {
        transform: translateY(0);
}
`

const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
    transform:scale(0);
    animation:${bounceInUp} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    animation-delay: .5s;
`;


const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(50rem, 1.5fr));
  grid-template-rows: repeat(auto-fit,minmax(30rem, 1.5fr));
  align-items: center;
  justify-self: center;
  align-self: center;
  
    `;

const Image = styled.img`
    width: 100%;
    height: 100%;
    background-image: url("assets/img/natours.png");
    background-size: cover;
    `
;

const DetailContainer = styled.div`
   width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 1fr;
`;


const ProjectCard = ({detail}) => (
    <Container>
        <CardContainer>
            <DetailContainer>
                <ProjectDetail detail={detail}/>
                <AttentionButton delay={0} url='http://github.com' position='left'>Live demo</AttentionButton>
                <AttentionButton delay={1} url='http://github.com' position='right'>View source</AttentionButton>
            </DetailContainer>
            <Image src={natours}/>
        </CardContainer>
    </Container>
);

export default ProjectCard;