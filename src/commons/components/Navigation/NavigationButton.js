import React from 'react';
import PropTypes from 'prop-types';

import NavigationIcon from './NavigationIcon';
import { BurgerButton } from 'commons/components/Navigation/styles';
import { THEME } from 'styles/theme';


const NavigationButton = ({ active, color, size, toggle }) => {
   return (
      <BurgerButton onClick={() => toggle()}>
         <NavigationIcon color={color} size={size} active={active}/>
      </BurgerButton>
   );
};

NavigationButton.propTypes = {
   active: PropTypes.bool.isRequired,
   color: PropTypes.oneOf([THEME.light, THEME.dark]).isRequired,
   size: PropTypes.number.isRequired,
   toggle: PropTypes.func.isRequired
};

export default NavigationButton;
