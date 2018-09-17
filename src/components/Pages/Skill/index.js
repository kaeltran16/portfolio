import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/commons/Navigation'
import Heading from "components/commons/Heading";
import {withDataContext} from "appContext";
import NextPageButton from "components/commons/NextPageButton";
import SkillContainer from "./components";
import withScroll from "../../../HOCs/withScroll";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr .75fr 3.5fr 1.5fr;
  grid-template-columns: 1fr;
`;
const Skill = ({header, details}) => (
    <Container>
        <Navigation color='dark' size={5}/>
        <Heading color='dark' heading={header}/>
        <SkillContainer details={details}/>
        <NextPageButton align='flex-end' color='dark' size={2}/>
    </Container>
);

export const SkillPage = withScroll(withDataContext(Skill, 'Skill'), '/work', '/about');