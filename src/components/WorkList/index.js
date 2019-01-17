import React from 'react';
import * as PropTypes from 'prop-types';
import { DataType, withDataContext } from '../../appContext';
import WorkCard from '../WorkCard';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  grid-gap: 2rem;
  align-self: center;
  justify-self: center;
`;

const WorkList = ({ projects }) => {
   const renderWorkCards = () => projects.map(project =>
      <WorkCard key={project.name} project={project}/>
   );
   return (
      <Container>
         {renderWorkCards()}
      </Container>
   );
};

WorkList.propTypes = {
   projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
      srcUrl: PropTypes.string.isRequired
   })).isRequired
};

export default withDataContext(WorkList, DataType.WorkPage);
