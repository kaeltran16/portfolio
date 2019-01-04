import React from 'react';
import { DataType, withDataContext } from '../../appContext';
import Navigation from '../../commons/components/Navigation/index';
import Heading from '../../commons/components/Heading';
import Footer from './Footer';
import ContactDetail from './ContactDetail';
import { ContactPageContainer } from './styles';
import * as PropTypes from 'prop-types';

const Contact = ({ header, socialIcons, contactDetails }) => (
   <ContactPageContainer>
      <Navigation color='light' size={5}/>
      <Heading color='light' heading={header}/>
      <ContactDetail contactDetails={contactDetails}/>
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
   contactDetails: PropTypes.shape({
      email: PropTypes.string,
      tel: PropTypes.string
   }).isRequired
};

export default withDataContext(Contact, DataType.ContactPage);
