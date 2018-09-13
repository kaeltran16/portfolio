import React from 'react';
import styled, {keyframes} from 'styled-components';
import DetailContainer from "./DetailContainer";
import natours from 'assets/img/natours.png';

const zoomIn = keyframes`
    0% {
        transform:scale(0);
}
    100% {
        transform:scale(1);
}
`;


const Container = styled.div`
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

const Image = styled.img


    `
    width: 100%;
    height: 100%;
    background-image: url("assets/img/natours.png");
    background-size: cover;
    `


;


const ProjectCard = () => (
    <Container>
        <DetailContainer/>
        <Image src={natours}/>
    </Container>
);

export default ProjectCard;