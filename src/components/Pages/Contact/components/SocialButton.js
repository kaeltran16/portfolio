import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  height: 100%;
`;


const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90%;
  text-decoration: none;
  color: #fff;
  
  &:active, 
  &:visited {
    
  }
`;

const Text = styled.p`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: .5rem;
  opacity: 0;
  transition: opacity .5s ease-in;
  
  ${Link}:hover & {
    opacity: 1;
  }
`;

const Icon = styled.svg`
  width: 5rem;
  height: 5rem;
  fill: #fff;
`;

const SocialButton = ({text, iconName, url}) => (
    <Container>
        <Link href={url}>
            <Text>{text}</Text>
            <Icon>
                <use xlinkHref={`${process.env.PUBLIC_URL}/assets/sprites.svg#icon-${iconName}`}/>
            </Icon>
        </Link>
    </Container>
);

export default SocialButton;