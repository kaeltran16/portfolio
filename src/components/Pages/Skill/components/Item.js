import React from 'react';
import styled, {keyframes} from 'styled-components';
import SkillIcon from "./Icon";
import ItemHeading from "./ItemHeading";
import SkillDetail from "./Detail";
import {device} from "../../../../responsive";

const fadeInUp = keyframes`
    0% {
    opacity:0;
transform:  translate(0px,40px)  ;
}
100% {
    opacity:1;
transform:  translate(0px,0px)  ;
}
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr;
  width: 90%;
  opacity: 0;
   animation: ${fadeInUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
   animation-delay: ${props => props.delay}s;
   &:hover {
    transform: translateY(5rem);
   }
   
      @media ${device.mobileS} {
        margin-top: 5rem;
      } 
  }
`;

const SkillItem = ({detail, delay}) => {
    const {iconName, heading, subHeading, skillNames} = detail;
    return (
        <Container delay={delay}>
            <SkillIcon iconName={iconName}/>
            <ItemHeading heading={heading}/>
            <SkillDetail subHeading={subHeading} skillNames={skillNames}/>
        </Container>
    );
};

export default SkillItem;