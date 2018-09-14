import React from 'react';
import styled, {keyframes} from 'styled-components';
import SkillIcon from "./Icon";
import ItemHeading from "./ItemHeading";
import SkillDetail from "./Detail";

const modalFadeIn = keyframes`
    0% {
    display: none;
    transform: perspective(400px);
    animation-timing-function: ease-in;
  }

  100% {
    transform: perspective(400px);
        opacity: 1;
  } 
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr;
  width: 90%;
  opacity: 0;
   animation: ${modalFadeIn} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
   animation-delay: ${props => props.delay}s;
`;

const SkillItem = ({detail, delay}) => {
    const {iconName, heading, subHeading, skillNames} = detail;
    return (
        <Container delay={delay}>
            <SkillIcon iconName={iconName}/>
            <ItemHeading delay={delay} heading={heading}/>
            <SkillDetail delay={delay} subHeading={subHeading} skillNames={skillNames}/>
        </Container>
    );
};

export default SkillItem;