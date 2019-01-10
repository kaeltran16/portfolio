import React from 'react';
import { DataType, withDataContext } from '../appContext';
import Navigation from '../commons/components/Navigation';
import Heading from '../commons/components/Heading';
import Footer from 'components/Footer';
import { ContactPageContainer } from './styles';
import * as PropTypes from 'prop-types';
import ContactInfo from 'components/ContactInfo';

const Contact = ({ header, socialIcons, contactDetail }) => (
   <ContactPageContainer>
      <Navigation color='light' size={5}/>
      <Heading color='light' heading={header}/>
      <ContactInfo contactDetail={contactDetail}/>
      <Footer socialIcons={socialIcons}/>
   </ContactPageContainer>
);

Contact.propTypes = {
   header: PropTypes.string.isRequired,
   socialIcons: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string
   })).isRequired,
   contactDetail: PropTypes.shape({
      email: PropTypes.string,
      tel: PropTypes.string
   }).isRequired
};

export default withDataContext(Contact, DataType.ContactPage);
