import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Container = styled.div`
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
const ItemName = styled.span`
  	margin-right: 1.5rem;
				display: inline-block;
`;
const NavigationItem = ({itemNo, itemName, url}) => (
    <Container>
        <NavLink to={url}>
            <ItemName>
                {itemNo}.
            </ItemName>
            {itemName}
        </NavLink>
    </Container>
);

export default NavigationItem;