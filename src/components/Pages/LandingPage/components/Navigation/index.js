import React from 'react';
import styled from 'styled-components';

import LogoBrand from './LogoBrand';
import NavigationButton from './NavigationButton';

const Container = styled.div`
  width: 100%;
  position: absolute; 
  display: flex; 
  top: 0;
  justify-content: space-between;
`;

const Navigation = () => (
    <Container>
        <LogoBrand/>
        <NavigationButton/>
    </Container>
);

export default Navigation;