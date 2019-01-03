import React from 'react';
import styled from "styled-components";

const Icon = styled.svg`
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: center;
  fill: ${props => props.theme.accent.dark};
`;

const SkillIcon = ({iconName}) => (
    <Icon>
        <use xlinkHref={`${process.env.PUBLIC_URL}/assets/sprites.svg#icon-${iconName}`}/>
    </Icon>
);

export default SkillIcon;