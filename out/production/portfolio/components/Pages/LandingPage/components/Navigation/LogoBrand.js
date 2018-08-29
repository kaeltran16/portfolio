import React from 'react';
import styled from 'styled-components';

import Logo from 'assets/logo.svg';

const Container = styled.div`
  z-index: 1;
  padding: 3.5rem;
`;

const Image = styled.svg`
  height: 20rem;
  width: 20rem;
  fill: white;
`;

const LogoBrand = () => (
    <Container>
        <Image>
        </Image>
    </Container>

);

export default LogoBrand;