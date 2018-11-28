import React from 'react';
import styled, { css } from 'styled-components';
import NavigationItem from './NavigationItem';

const Container = styled.nav`
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0;
  z-index: 9;
  visibility: hidden;
  ${({ active }) => active && css`
    transition: all .4s .4s;
	  opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
  `};
`;
const NavList = styled.ul`
		list-style: none;
		text-align: center;
`;

const NavigationList = ({ active }) => {
   const renderItems = () => {
         const items = [
            { name: 'Landing', url: '/' },
            { name: 'About', url: '/about' },
            { name: 'Skill', url: '/skill' },
            { name: 'Work', url: '/work/natours' },
            { name: 'Contact', url: '/contact' }
         ];
         return items.map((item, index) => <NavigationItem key={item.name}
                                                           active={active}
                                                           itemNo={index + 1}
                                                           itemName={item.name}
                                                           url={item.url}/>);
      }
   ;
   return (
      <Container active={active}>
         <NavList>
            {renderItems()}
         </NavList>
      </Container>
   );
};

export default NavigationList;
