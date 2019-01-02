import React from 'react';
import { NavItem } from './styles';
import * as PropTypes from 'prop-types';

const NavigationItem = ({ itemNo, itemName, url }) => (
   < NavItem.Container>
      <NavItem.Link to={url}>
         <NavItem.Name>
            {itemNo}.
         </NavItem.Name>
         {itemName}
      </NavItem.Link>
   </NavItem.Container>
);

NavigationItem.propTypes = {
   itemNo: PropTypes.number.isRequired,
   itemName: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
};

export default NavigationItem;
