import React from 'react';

import { Container, Heading, IntroText, SubHeading, ToolText } from './styles';
import * as PropTypes from 'prop-types';

const WorkDetail = ({ project }) => (
   <Container>
      <Heading>
         {project.name}
      </Heading>
      <SubHeading>
         {project.subHeading}
      </SubHeading>
      <IntroText>
         <ToolText>Build tools: </ToolText>
         {project.intro}
      </IntroText>
   </Container>
);

WorkDetail.propTypes = {
   project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
      srcUrl: PropTypes.string.isRequired
   })
};
export default WorkDetail;
