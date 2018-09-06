import React from 'react';
import styled from 'styled-components';

import LogoBrand from './LogoBrand';
import NavigationButton from './NavigationButton';

const Container = styled.div`
  width: 100%;
  display: flex; 
  top: 0;
  align-items: center;
  justify-content: space-between;
`;

const Navigation = (props) => (
    <Container>
        <LogoBrand {...props}/>
        <NavigationButton {...props}/>
    </Container>
);

export default Navigation;