import { DataType, withDataContext } from '../appContext';
import Heading from '../commons/components/Heading';
import Navigation from '../commons/components/Navigation';
import NextPageButton from '../commons/components/NextPageButton';
import React from 'react';
import styled from 'styled-components';
import withScroll from '../HOCs/withScroll';
import SkillList from '../components/SkillList';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr .75fr 3.75fr 1.5fr;
  grid-template-columns: 1fr;
`;
const Skill = ({ header, details }) => (
   <Container>
      <Navigation color='dark' size={5}/>
      <Heading color='dark' heading={header}/>
      <SkillList details={details}/>
      <NextPageButton align='flex-end' color='dark' size={2}/>
   </Container>
);

export default withScroll(withDataContext(Skill, DataType.SkillPage));
