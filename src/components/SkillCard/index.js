import React from 'react';
import * as PropTypes from 'prop-types';
import { Container, Icon, SkillHeading } from './styles';
import SkillItem from '../SkillItem';

const SkillCard = ({ skill, delay }) => {
   const { iconName, heading, subHeading, skillNames } = skill;
   return (
      <Container delay={delay}>
         <Icon>
            <use
               xlinkHref={`${process.env.PUBLIC_URL}/assets/sprites.svg#icon-${iconName}`}/>
         </Icon>
         <SkillHeading>{heading}</SkillHeading>
         <SkillItem subHeading={subHeading} skillNames={skillNames}
                    delay={delay}/>
      </Container>
   );
};

SkillCard.propTypes = {
   skill: PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      skillNames: PropTypes.arrayOf(PropTypes.string).isRequired
   }),
   delay: PropTypes.number.isRequired
};

export default SkillCard;
