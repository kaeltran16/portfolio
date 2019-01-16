import React from 'react';
import * as PropTypes from 'prop-types';

import { Container } from './styles';
import { DataType, withDataContext } from '../../appContext';
import SkillCard from '../SkillCard';

const SkillList = ({ skills }) => {
   const renderSkillItems = () => {
      return skills.map((skill, index) =>
         <SkillCard delay={index + .5}
                    skill={skill}
                    key={skill.iconName}/>
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

export default withDataContext(SkillList, DataType.SkillPage);

