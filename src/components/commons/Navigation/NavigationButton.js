import React from 'react';
import styled from 'styled-components';

import NavigationIcon from './NavigationIcon';

const Container = styled.div`
   padding: 3.5rem;
   display: flex;
   justify-content: center;
   cursor: pointer;
   position: relative;
   z-index: 10;
`;


const NavigationButton = ({active, color, size, toggle}) => {
    return (
        <Container onClick={() => toggle()}>
            <NavigationIcon color={color} size={size} active={active}/>
        </Container>
    );
}

export default NavigationButton;