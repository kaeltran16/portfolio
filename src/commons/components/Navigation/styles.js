import styled, { css } from 'styled-components';
import { fadeInRotate, fadeInSlowly } from 'commons/animations/keyframes';
import { AnimatedBackground } from 'commons/components/Navigation/animations';
import { Link } from 'react-router-dom';

const NavContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

const NavBackground = styled(AnimatedBackground)`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  right: 0;
  z-index: 1;
  margin: 2.5rem;
  background-image: radial-gradient(${props => props.theme.accent.light},
    ${props => props.theme.accent.dark})`;

const LogoContainer = styled.svg`
  margin-left: 3.5rem;
  height: ${props => `${props.size}rem`}
  width: ${props => `${props.size}rem`}
  fill: ${props => props.color === 'dark'
   ? props.theme.primary.main
   : props.theme.secondary.main};
  animation: ${fadeInRotate} 2s;
  cursor: pointer;
  
  &:hover {
      transform: rotate(180deg);
      transition: all 1s;
      backface-visibility: hidden;
  }
  
  position: relative;
  z-index: 500;
`;

const BurgerButton = styled.div`
   padding: 3.5rem;
   display: flex;
   justify-content: center;
   cursor: pointer;
   position: relative;
   z-index: 10;
`;

const Bar = styled.div`
    &:not(:first-child) {
      margin-top: .6rem;
    }
    
    transition: all 0.4s;
    width: 100%;
    height: 12.5%;  
`;


const BurgerIcon = styled.div`
    position: relative;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: ${props => `${props.size}rem`};
    height: ${props => `${props.size}rem`};
    animation: ${fadeInSlowly} 2s;
    ${Bar} {
      background-color: ${props => props.color === 'dark'
   ? props.theme.primary.main
   : props.theme.secondary.main};;
    }
    
    ${props => props.active && css`
      ${Bar} {
        &:nth-child(1) {
          transform: rotate(-45deg) translate(-.9rem, .6rem);
        }
    
        &:nth-child(2) {
          opacity: 0;
        }
    
        &:nth-child(3) {
          transform: rotate(45deg) translate(-1rem, -.8rem);
        }   
       }
       
		z-index: 500;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  `}
`;

const NavItemContainer = styled.div`
    margin: 1rem;
    position: relative;
    z-index: 100;
 `;

const NavLink = styled(Link)`
    cursor: pointer;
    font-size: 3rem;
    font-weight: 500;
    color: ${props => props.theme.primary.main};
    padding: 1rem 2.5rem;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
    	120deg,
    	transparent,
    	transparent 0%,
    	transparent 50%,
    	${props => props.theme.secondary.main} 50%	
    );
    background-size: 220%;
    transition: all 0.4s;
    display: inline-block;
    &:hover,
	&:active {
	  background-position: 100%;
	  color: #000;
	  transform: translateX(1rem);
	}
`;

const NavItemName = styled.span`
  	margin-right: 1.5rem;
	display: inline-block;
`;

const Nav = {
   Container: NavContainer,
   Background: NavBackground
};

const NavItem = {
   Container: NavItemContainer,
   Link: NavLink,
   Name: NavItemName
};

const NavListContainer = styled.nav`
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0;
  display: none;
  z-index: 9;
  transition: all 0.4s;
  
  ${({ active }) => active && css`
	opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const NavListItems = styled.ul`
		list-style: none;
		text-align: center;
`;

const NavList = {
   Container: NavListContainer,
   ItemContainer: NavListItems
};

export { Nav, LogoContainer, BurgerButton, Bar, BurgerIcon, NavItem, NavList };
