import React from 'react';
import styled from "styled-components";
import TextScrambler from "../../../commons/TextScrambler";


const Text = styled.h4`
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  justify-content: center; 
  align-items: center;
  text-align: center;
`;
const ItemHeading = ({heading}) => (

    <Text>
        <TextScrambler text={heading} delay={1500}/>
    </Text>
);

export default ItemHeading;