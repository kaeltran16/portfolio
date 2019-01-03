import React from 'react';
import styled from 'styled-components';
import SkillIcon from "./Icon";
import SkillDetail from "./Detail";
import {device} from "../../styles/responsive";
import {fadeInUp} from "../../commons/animations/keyframes";


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
`;

const ItemHeading = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  justify-self: center; 
  align-self: center;
  
  @media ${device.mobileS} {
    font-size: 1.75rem;
  }
`;

const SkillItem = ({detail, delay}) => {
    const {iconName, heading, subHeading, skillNames} = detail;
    return (
        <Container delay={delay}>
            <SkillIcon iconName={iconName}/>
            <ItemHeading>{heading}</ItemHeading>
            <SkillDetail subHeading={subHeading} skillNames={skillNames}/>
        </Container>
    );
};

export default SkillItem;
