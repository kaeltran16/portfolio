import React from 'react';
import * as PropTypes from 'prop-types';

import { Container, SkillName, SkillNameList, SubHeading } from './styles';

const SkillItem = ({ subHeading, skillNames, delay }) => {
   const renderSkillNames = () =>
      skillNames.map(name =>
         <SkillName delay={delay - 1}
                    key={name}>
            {name}
         </SkillName>
      );
   return (
      <Container>
         <SubHeading>
            {subHeading}
         </SubHeading>
         <SkillNameList>
            {renderSkillNames()}
         </SkillNameList>
      </Container>
   );
};

SkillItem.propTypes = {
   subHeading: PropTypes.string.isRequired,
   skillNames: PropTypes.arrayOf(PropTypes.string).isRequired,
   delay: PropTypes.number.isRequired
};

export default SkillItem;
