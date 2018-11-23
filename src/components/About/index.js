import { DataType, withDataContext } from 'appContext';
import Heading from 'commons/components/Heading';
import Navigation from 'commons/components/Navigation';
import NextPageButton from 'commons/components/NextPageButton';
import Paragraphs from 'components/About/Paragraphs';
import React from 'react';
import { device } from 'styles/responsive';
import styled from 'styled-components';
import useNavigation from 'commons/utils/useNavigation';


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 4fr .5fr;
    
    @media ${device.mobileS} {
      grid-template-rows: 1fr .75fr 4fr 1fr;
    }
`;

const About = ({ header }) => {
   useNavigation();
   return (
      <Container>
         <Navigation color='dark' size={5}/>
         <Heading color='dark' heading={header}/>
         <Paragraphs/>
         <NextPageButton align='flex-end' color='dark' size={2}/>
      </Container>
   );
};

export const AboutPage = withDataContext(About, DataType.AboutPage);
