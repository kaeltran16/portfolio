import { DataType, withDataContext } from '../appContext';
import Heading from '../commons/components/Heading';
import Navigation from '../commons/components/Navigation';
import NextPageButton from '../commons/components/NextPageButton';
import React from 'react';
import styled from 'styled-components';
import SkillList from '../components/SkillList';
import { animated } from 'react-spring/hooks';

const Container = styled(animated.div)`
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

export default withDataContext(Skill, DataType.SkillPage);
