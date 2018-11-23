import React from 'react';
import styled from 'styled-components';
import { DataType, withDataContext } from '../../appContext';
import Navigation from '../../commons/components/Navigation/index';
import Heading from '../../commons/components/Heading';
import Footer from './Footer';
import ContactDetail from './ContactDetail';
import withScroll from '../../HOCs/withScroll';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.primary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 3fr 1fr;
    justify-content: center;
    
`;

const Contact = ({ header, socialIcons, contactDetails }) => (
   <Container>
      <Navigation color='light' size={5}/>
      <Heading color='light' heading={header}/>
      <ContactDetail contactDetails={contactDetails}/>
      <Footer socialIcons={socialIcons}/>
   </Container>
);

export const ContactPage = withScroll(withDataContext(Contact, DataType.ContactPage));
