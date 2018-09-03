import React from 'react';
import styled from 'styled-components';


const Image = styled.svg`
  height: 5rem;
  width: 5rem;
  fill: ${props => props.theme.secondary.main};
`;

const NavigationButton = () => (
    <div>
        <Image xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path
                d='M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z'
            />
            <path
                d='M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z'
            />
            <path
                d='M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z'
            />
        </Image>

    </div>
);

export default NavigationButton;