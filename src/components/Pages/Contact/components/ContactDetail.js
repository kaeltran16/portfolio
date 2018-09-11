import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PrimaryHeader = styled.a`
  color: #fff;
  font-size: 5rem;
`;
const SubHeader = styled.div`
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
`;
const Text = styled.h4`
  
`;
const PhoneNumber = styled.h4``;
const ContactDetail = () => (
    <Container>
        <PrimaryHeader href='#'>cktran16x2@gmail.com</PrimaryHeader>
        <SubHeader>
            <Text>Phone Number</Text>
            <PhoneNumber>(+1) 416-998-7489</PhoneNumber>
        </SubHeader>
    </Container>
);

export default ContactDetail;