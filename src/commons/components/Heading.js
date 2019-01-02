import React from 'react';
import { Heading } from './styles';
import TextScrambler from './TextScrambler';
import * as PropTypes from 'prop-types';
import { THEME } from '../../styles/theme';

const HeadingTitle = ({ heading, color }) => (
   <Heading.Container>
      <Heading.Text color={color}>
         <TextScrambler delay={100} text={heading}/>
      </Heading.Text>
   </Heading.Container>
);

HeadingTitle.propTypes = {
   heading: PropTypes.string.isRequired,
   color: PropTypes.oneOf([THEME.light, THEME.dark])
};

export default HeadingTitle;
