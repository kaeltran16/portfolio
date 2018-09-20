import React from 'react';
import styled from 'styled-components';
import SocialButton from "./SocialButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Footer = ({socialIcons}) => {
    const renderSocialButtons = () =>
        socialIcons.map(icon =>
            <SocialButton key={icon.name} iconName={icon.icon} text={icon.name} url={icon.url}/>);
    return (
        <Container>
            {renderSocialButtons()}
        </Container>
    );
}

export default Footer;