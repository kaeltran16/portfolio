import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Nav } from './styles';
import LogoBrand from './LogoBrand';
import NavigationButton from './NavigationButton';
import NavigationList from './NavigationList';
import { THEME } from 'styles/theme';
import { useSpring } from 'react-spring/hooks';

const Navigation = props => {
   const [active, setActive] = useState(false);

   const toggle = () => {
      setActive(!active);
   };


   const { transform } = useSpring({
      transform: `scale(${active ? '80' : '0'})`,
      config: { mass: 5, tension: 600, friction: 100 }
   });

   return (
      <React.Fragment>
         <Nav.Container>
            <LogoBrand {...props} active={active}/>
            <NavigationButton {...props} active={active} toggle={toggle}/>
         </Nav.Container>
         <NavigationList active={active}/>
         <Nav.Background
            style={{ transform }}/>
      </React.Fragment>
   );
};

Navigation.propTypes = {
   size: PropTypes.number,
   color: PropTypes.oneOf([THEME.light, THEME.dark])
};

export default Navigation;
