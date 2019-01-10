import React from 'react';
import Particles from 'react-particles-js';

import particleSettings from './particleSettings';
import useWindowSize from './useWindowSize';
import { Container } from './styles';

const Background = () => {
   const { width, height } = useWindowSize();
   return (
      <Container>
         <Particles height={height} width={width} params={particleSettings}/>
      </Container>
   );
};

export default Background;
