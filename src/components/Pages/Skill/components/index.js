import React from 'react';
import styled from 'styled-components';
import SkillItem from "./Item";

const Container = styled.div`
  width: 80%;
  height: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-self: center;
  flex-direction: column;
  align-self: center;
`;


const SkillContainer = ({details}) => {
    const renderSkillItems = (details) => {
        return details.map((detail, index) => <SkillItem detail={detail} key={index}/>);
    };
    return (
        <Container>
            {renderSkillItems(details)}
        </Container>
    );
}

export default SkillContainer;