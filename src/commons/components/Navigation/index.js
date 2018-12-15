import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav } from './styles';
import LogoBrand from './LogoBrand';
import NavigationButton from './NavigationButton';
import NavigationList from './NavigationList';
import { THEME } from 'styles/theme';


const Navigation = props => {
   const [active, setActive] = useState(false);

   const toggle = () => {
      setActive(!active);
   };

   return (
      <React.Fragment>
         <Nav.Container>
            <LogoBrand {...props} active={active}/>
            <NavigationButton {...props} active={active} toggle={toggle}/>
         </Nav.Container>
         <NavigationList active={active}/>
         <Nav.Background pose={active ? 'active' : 'inactive'}/>
      </React.Fragment>
   );
};

Navigation.propTypes = {
   size: PropTypes.number,
   color: PropTypes.oneOf([THEME.light, THEME.dark])
};

export default Navigation;
