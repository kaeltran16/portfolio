import React from 'react';
import styled from "styled-components";


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
        {heading}
    </Text>
);

export default ItemHeading;