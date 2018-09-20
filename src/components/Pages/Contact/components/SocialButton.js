import React from 'react';
import styled, {keyframes} from 'styled-components';

const lightSpeedIn = keyframes`
    0% {
        transform: translateY(100%) skewX(-0deg);
    opacity: 0;
}
    60% {
        transform: translateY(-10%) skewX(-20deg);
    opacity: 1;
}
    80% {
        transform: translateY(0%) skewX(10deg);
    opacity: 1;
}
    100% {
        transform: translateY(0%) skewX(0deg);
    opacity: 1;
}
`
const Container = styled.div`
  color: ${props => props.theme.secondary.main}

  height: 100%;
  
  animation: ${lightSpeedIn} 2s ease-out forwards;
`;


const Link = styled.a`
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 90%;
  text-decoration: none;
    color: ${props => props.theme.secondary.main};

  
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
    fill: ${props => props.theme.secondary.main}

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