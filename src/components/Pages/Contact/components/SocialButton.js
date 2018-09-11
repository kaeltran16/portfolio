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

const SocialButton = () => (
    <Container>
        <Link href="#">
            <Text>Linkedin</Text>
            <Icon id="icon-linkedin" viewBox="0 0 32 32">
                <path
                    d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"
                />
            </Icon>
        </Link>
    </Container>
);

export default SocialButton;