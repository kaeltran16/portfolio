import React from 'react';
import TextScrambler from '../../commons/components/TextScrambler';
import { ContactDetailStyles as Styles } from './styles';
import * as PropTypes from 'prop-types';

const ContactDetail = ({ contactDetails }) => (
   <Styles.Container>
      <Styles.Header.Primary
         href={`mailto:${contactDetails.email}`}>
         <TextScrambler delay={1000} text={contactDetails.email}/>
      </Styles.Header.Primary>
      <Styles.Header.Secondary>
         <Styles.Text>
            <TextScrambler text={'Phone Number'}
                           delay={1500}/>
         </Styles.Text>
         <Styles.PhoneNumber href={`tel:1-${contactDetails.tel}`}>
            <TextScrambler text={`(+1) ${contactDetails.tel}`} delay={1700}/>
         </Styles.PhoneNumber>
      </Styles.Header.Secondary>
   </Styles.Container>
);

ContactDetail.propTypes = {
   contactDetails: PropTypes.shape({
      email: PropTypes.string,
      tel: PropTypes.string
   }).isRequired
};
export default ContactDetail;
