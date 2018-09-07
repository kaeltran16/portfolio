import React from 'react';
import styled from 'styled-components';
import SkillIcon from "./Icon";
import ItemHeading from "./ItemHeading";
import SkillDetail from "./Detail";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr;
  grid-template-columns: 1fr;
  width: 90%;
`;

const SkillItem = ({detail}) => {
    const {iconName, heading, subHeading, skillNames} = detail;
    return (
        <Container>
            <SkillIcon iconName={iconName}/>
            <ItemHeading heading={heading}/>
            <SkillDetail subHeading={subHeading} skillNames={skillNames}/>
        </Container>
    );
};

export default SkillItem;