import React from 'react';
import * as PropTypes from 'prop-types';

import { Container, SkillName, SkillNameList, SubHeading } from './styles';

const SkillItem = ({ subHeading, skillNames, trans }) => {
   console.log(trans);
   const renderSkillNames = () =>
      trans.map(({ item, key, props }) =>
         <SkillName
            key={key}
            style={props}>
            {item}
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
   skillNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SkillItem;
