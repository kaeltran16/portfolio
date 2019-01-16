import React from 'react';
import * as PropTypes from 'prop-types';

import { DataType, withDataContext } from '../../appContext';
import TextScrambler from '../../commons/components/TextScrambler';
import { Container, Text } from './styles';

const LandingHeader = ({ primaryHeader, subHeader }) => {
   return (
      <Container>
         <Text.Primary>
            <TextScrambler delay={100} text={primaryHeader}/>
         </Text.Primary>
         <Text.Secondary>
            <TextScrambler delay={2000} text={subHeader}/>
         </Text.Secondary>
      </Container>
   );
};

LandingHeader.propTypes = {
   primaryHeader: PropTypes.string.isRequired,
   subHeader: PropTypes.string.isRequired
};

export default withDataContext(LandingHeader, DataType.LandingPage);
