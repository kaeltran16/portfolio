import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 1/1/1/span 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Heading = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: .75rem;
  font-weight: bold;
`;

const SubHeading = styled.h3`
  font-size: 1.75rem;
  text-align: left;
  font-weight: 500;
  line-height: 2.5rem;
`;

const IntroText = styled.h4`
  font-size: 1.75rem;
  width: 100%;
  font-weight: 300;
`;

const ProjectDetail = ({detail}) => (
    <Container>
        <Heading>{detail.name}</Heading>
        <SubHeading>
            {detail.subHeading}
        </SubHeading>
        <IntroText>{detail.intro}</IntroText>
    </Container>
);
export default ProjectDetail;