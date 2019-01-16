import React, { useRef, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Container, Icon, SkillHeading } from './styles';
import SkillItem from '../SkillItem';
import { config, useChain, useSpring, useTransition } from 'react-spring/hooks';

const SkillCard = ({ skill }) => {
   const [open, setOpen] = useState(false);
   const springRef = useRef();

   const spring = useSpring({
      config: config.stiff,
      width: `${open ? 90 : 60}%`,
      ref: springRef
   });

   const transRef = useRef();
   const spices = useTransition({
      config,
      from: { opacity: 0, transform: 'translateY(100px) scale(0)' },
      enter: { opacity: 1, transform: 'translateY(0) scale(1)' },
      leave: { opacity: 0, transform: 'translateY(30px) scale(0)' },
      items: open ? skill.skillNames : [],
      trail: 500 / skill.length,
      unique: true,
      ref: transRef
   });
   useChain(
      open ? [springRef, transRef] : [transRef, springRef]
   );
   const { iconName, heading, subHeading, skillNames } = skill;
   return (
      <Container style={spring} onClick={() => setOpen(true)}>
         <Icon>
            <use
               xlinkHref={`${process.env.PUBLIC_URL}/assets/sprites.svg#icon-${iconName}`}/>
         </Icon>
         <SkillHeading>{heading}</SkillHeading>
         <SkillItem trans={spices} subHeading={subHeading}
                    skillNames={skillNames}
         />
      </Container>
   );
};

SkillCard.propTypes = {
   skill: PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      skillNames: PropTypes.arrayOf(PropTypes.string).isRequired
   })
};

export default SkillCard;
