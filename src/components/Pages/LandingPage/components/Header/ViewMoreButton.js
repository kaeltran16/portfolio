import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  font-weight: 700;
  background-color: ${props => props.theme.secondary.dark}
  margin-top: 5rem;
`;

const ViewMoreButton = () => (
    <Button>View my work</Button>
);

export default ViewMoreButton;