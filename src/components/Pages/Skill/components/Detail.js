import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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


`;
const SkillDetail = ({subHeading, skillNames, delay}) => {
    const renderSkillNames = skillNames =>
        skillNames.map((name, index) => <SkillName delay={delay - 1} key={index}>{name}</SkillName>);
    return (
        <Container>
            <TextHeading>{subHeading}

            </TextHeading>
            <SkillItem>
                {renderSkillNames(skillNames)}
            </SkillItem>
        </Container>
    );
}

export default SkillDetail;