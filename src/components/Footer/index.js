import React from 'react';
import { Container } from './styles';
import { useTrail } from 'react-spring/hooks';
import * as PropTypes from 'prop-types';
import SocialButton from 'components/SocialButtons';

const Footer = ({ socialIcons }) => {
   const socialButtonTrailing = useTrail(socialIcons.length, {
      opacity: 1,
      config: { mass: 4, tension: 1000, friction: 200 },
      x: 0,
      y: 10,
      from: { opacity: 0, x: -50, y: 0 }
   });


   const renderSocialButtons = () =>
      socialButtonTrailing.map(({ x, y, opacity }, index) => {
         return (
            <SocialButton
               key={socialIcons[index].icon}
               iconName={socialIcons[index].icon}
               text={socialIcons[index].name}
               url={socialIcons[index].url}
               style={{
                  opacity,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
               }}>
            </SocialButton>
         );
      });

   return (
      <Container>
         {renderSocialButtons()}
      </Container>
   );
};

Footer.propTypes = {
   socialIcons: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
   })).isRequired
};

export default Footer;
