import React from 'react';
import styled from 'styled-components';
import Heading from '../../commons/components/Heading';

const HeadingContainer = styled.div`
  width: 100%;
  flex-basis: 15%;
 background-color: ${props => props.color === 'dark'
  ? props.theme.secondary.light
  : props.theme.primary.main}; `;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const PageContainer = ({ heading, children, currentPage }) => {

  const theme = currentPage === 4 ? 'light' : 'dark';
  return (
    <Container>
      <HeadingContainer color={theme}>
        <Heading heading={heading} color={theme}/>
      </HeadingContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default PageContainer;
