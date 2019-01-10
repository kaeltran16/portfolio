import React from 'react';
import * as PropTypes from 'prop-types';

import TextScrambler from '../../commons/components/TextScrambler';
import { Container, Header, PhoneNumber, Text } from './styles';

const ContactInfo = ({ contactDetail }) => (
   <Container>
      <Header.Primary
         href={`mailto:${contactDetail.email}`}>
         <TextScrambler delay={1000} text={contactDetail.email}/>
      </Header.Primary>
      <Header.Secondary>
         <Text>
            <TextScrambler text={'Phone Number'}
                           delay={1500}/>
         </Text>
         <PhoneNumber href={`tel:1-${contactDetail.tel}`}>
            <TextScrambler text={`(+1) ${contactDetail.tel}`} delay={1700}/>
         </PhoneNumber>
      </Header.Secondary>
   </Container>
);

ContactInfo.propTypes = {
   contactDetail: PropTypes.shape({
      email: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired
   })
};

export default ContactInfo;
