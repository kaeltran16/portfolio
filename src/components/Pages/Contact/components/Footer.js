import React from 'react';
import styled from 'styled-components';
import SocialButton from "./SocialButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Footer = () => (
    <Container>
        <SocialButton/>
        <SocialButton/>
        <SocialButton/>
        <SocialButton/>
    </Container>
);

export default Footer;