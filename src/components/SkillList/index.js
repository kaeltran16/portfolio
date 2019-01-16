import React from 'react';
import * as PropTypes from 'prop-types';

import { Container } from './styles';
import SkillCard from '../SkillCard';

const SkillList = ({ skills }) => {
   const renderSkillItems = () => {
      return skills.map(skill =>
         <SkillCard key={skill.iconName} skill={skill}/>
      );
   };
   return (
      <Container>
         {renderSkillItems()}
      </Container>
   );
};

SkillList.propTypes = {
   skills: PropTypes.arrayOf(PropTypes.shape({
      iconName: PropTypes.string,
      heading: PropTypes.string,
      subHeading: PropTypes.string,
      skillNames: PropTypes.arrayOf(PropTypes.string).isRequired
   })).isRequired
};

export default SkillList;

