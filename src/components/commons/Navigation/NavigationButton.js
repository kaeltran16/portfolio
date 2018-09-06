import React from 'react';
import styled from 'styled-components';

import NavigationIcon from './NavigationIcon';

const Container = styled.div`
   z-index: 1;
   padding: 3.5rem;
`;


const NavigationButton = (props) => (
    <Container>
        <NavigationIcon {...props}/>
    </Container>
);

export default NavigationButton;