import React from 'react';
import styled, {keyframes} from 'styled-components';
import natours from 'assets/img/natours.png';
import ProjectDetail from "./Detail";
import AttentionButton from "./AttentionButton";

const unfoldIn = keyframes`
    0% {
        transform:scaleX(.005) scaleY(0);
        background-color: black;
}
    50% {
        transform:scaleX(.005) scaleY(1);

        background-color: black;

}
    100% {
        transform:scaleX(1) scaleY(1);
        background-color: transparent;
}
`;

const Container = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-self: center;
  align-self: center;
    transform:scale(0);
    animation:${unfoldIn} 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
    animation-delay: 1s;
`;

const zoomIn = keyframes`
    0% {
        transform:scale(0);
}
    100% {
        transform:scale(1);
}
`;


const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  justify-self: center;
  align-self: center;
  
   transform:scale(0);
   animation: ${zoomIn} .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
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
                <AttentionButton url='http://github.com' position='left'>Live demo</AttentionButton>
                <AttentionButton url='http://github.com' position='right'>View source</AttentionButton>
            </DetailContainer>
            <Image src={natours}/>
        </CardContainer>
    </Container>
);

export default ProjectCard;