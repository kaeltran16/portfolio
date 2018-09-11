import React from 'react';
import styled from "styled-components";
import {withDataContext} from "../../../appContext";
import Navigation from "../../commons/Navigation";
import Heading from "../../commons/Heading";
import Footer from "./components/Footer";
import ContactDetail from "./components/ContactDetail";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.primary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 4fr 1fr;
`;

const Contact = () => (
    <Container>
        <Navigation color='light' size={5}/>
        <Heading heading={'Get in touch'}/>
        <ContactDetail/>
        <Footer/>
    </Container>
);

export const ContactPage = withDataContext(Contact, 'Contact');