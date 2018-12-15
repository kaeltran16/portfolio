import React from 'react';
import PropTypes from 'prop-types';
import { Bar, BurgerIcon } from 'commons/components/Navigation/styles';
import { THEME } from 'styles/theme';

const NavigationButton = ({ color, size, active }) => {
   return (
      <BurgerIcon color={color} size={size} active={active}>
         <Bar/>
         <Bar/>
         <Bar/>
      </BurgerIcon>
   );
};

NavigationButton.propTypes = {
   color: PropTypes.oneOf([THEME.light, THEME.dark]).isRequired,
   size: PropTypes.number.isRequired,
   active: PropTypes.bool.isRequired
};

export default NavigationButton;
