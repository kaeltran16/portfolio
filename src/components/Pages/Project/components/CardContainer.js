import React from 'react';
import styled, {keyframes} from 'styled-components';
import ProjectCard from "./Card";

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

const CardContainer = () => (
    <Container>
        <ProjectCard/>
    </Container>
);


export default CardContainer;