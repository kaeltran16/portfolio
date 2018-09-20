import React from 'react';
import styled from 'styled-components';
import Navigation from 'commons/components/Navigation'
import Heading from "commons/components/Heading";
import {DataType, withDataContext} from "appContext";
import NextPageButton from "commons/components/NextPageButton";
import SkillContainer from "./components";
import withScroll from "../../../HOCs/withScroll";
import {device} from "../../../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr .75fr 3.75fr 1.5fr;
  grid-template-columns: 1fr;
  
    @media ${device.mobileS} {
      overflow-y: scroll; 
  }
`;
const Skill = ({header, details}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <Heading color='dark' heading={header}/>
        <SkillContainer details={details}/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export const SkillPage = withScroll(withDataContext(Skill, DataType.SkillPage));