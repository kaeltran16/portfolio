import React, { useState } from 'react';
import { FooterContainer } from './styles';
import SocialButton from './SocialButton';
import { useTrail } from 'react-spring/hooks';
import * as PropTypes from 'prop-types';

const Footer = ({ socialIcons }) => {
   const [toggle, set] = useState(false);

   const socialButtonTrailing = useTrail(socialIcons.length, {
      opacity: 1,
      from: { opacity: 0 }
   });


   const renderSocialButtons = () =>
      socialIcons.map((item, index) =>
         <SocialButton onClick={() => set(state => !state)} key={index}
                       iconName={socialIcons[index].icon}
                       text={socialIcons[index].name}
                       url={socialIcons[index].url}
                       style={socialButtonTrailing[index]}/>
      );


   return (
      <FooterContainer>
         <button onClick={() => set(!toggle)}>click me</button>
         {renderSocialButtons()}
      </FooterContainer>
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
