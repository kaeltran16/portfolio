import React from 'react';
import NavigationItem from './NavigationItem';
import { NavList } from './styles';
import * as PropTypes from 'prop-types';

const NavigationList = ({ active }) => {
   const renderItems = () => {
      const items = [
         { name: 'Landing', url: '/' },
         { name: 'About', url: '/about' },
         { name: 'Skill', url: '/skill' },
         { name: 'Work', url: '/work/recipello' },
         { name: 'Contact', url: '/contact' }
      ];
      return items.map((item, index) =>
         <NavigationItem key={item.name}
                         active={active}
                         itemNo={index + 1}
                         itemName={item.name}
                         url={item.url}/>);
   };
   return (
      <NavList.Container active={active}>
         <NavList.ItemContainer>
            {renderItems()}
         </NavList.ItemContainer>
      </NavList.Container>
   );
};

NavigationList.propTypes = {
   active: PropTypes.bool.isRequired
};

export default NavigationList;
