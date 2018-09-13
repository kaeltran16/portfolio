import React from 'react';
import styled, {keyframes} from "styled-components";
import TextScrambler from "../../../commons/TextScrambler";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
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

const TextHeading = styled.h4`
  font-size: 1.75rem;
  width: 100%;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.primary.light}
`;

const SkillItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: .9;
    align-items: center;
`;

const SkillName = styled.p`
    font-size: 2rem;
    font-weight: bolder;
    color: ${props => props.theme.primary.dark};
      animation: ${fadeInUp} cubic-bezier(1,-0.26,.88,.7) 5s;


`;
const SkillDetail = ({subHeading, skillNames}) => {
    const renderSkillNames = skillNames =>
        skillNames.map((name, index) => <SkillName key={index}>{name}</SkillName>);
    return (
        <Container>
            <TextHeading><TextScrambler text={subHeading} delay={2000}/></TextHeading>
            <SkillItem>
                {renderSkillNames(skillNames)}
            </SkillItem>
        </Container>
    );
}

export default SkillDetail;