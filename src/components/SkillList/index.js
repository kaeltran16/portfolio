import React from 'react';
import * as PropTypes from 'prop-types';

import { Container } from './styles';
import SkillCard from '../SkillCard';
import { animated, config, useTransition } from 'react-spring/hooks';

const SkillList = ({ skills }) => {
   console.log(skills);
   const spices = useTransition({
      config,
      from: { opacity: 0, transform: 'translate(-200px)' },
      enter: { opacity: 1, transform: 'translate(0)' },
      leave: {
         opacity: 0,
         transform: 'translate(200px)'
      },
      items: skills,
      keys: item => item.iconName,
      trail: 500 / skills.length
   });

   const renderSkillItems = () => {
      console.log(spices);
      return spices.map(({ item, props, key }) => {
            return (
               <animated.div key={key} style={props}>
                  <SkillCard skill={item}/>
               </animated.div>
            );
         }
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

