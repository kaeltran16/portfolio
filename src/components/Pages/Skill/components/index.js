import React from 'react';
import styled from 'styled-components';
import SkillItem from "./Item";
import {device} from "../../../../responsive";

const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-template-rows: 1fr;
  justify-self: center;
  flex-direction: column;
  align-self: flex-start;
  
  @media ${device.mobileS} {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
 

`;


const SkillContainer = ({details}) => {
    const renderSkillItems = (details) => {
        return details.map((detail, index) => <SkillItem delay={(index + .5)} detail={detail} key={index}/>);
    };
    return (
        <Container>
            {renderSkillItems(details)}
        </Container>
    )

};

export default SkillContainer;