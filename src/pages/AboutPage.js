import { DataType, withDataContext } from '../appContext';
import Heading from '../commons/components/Heading';
import Navigation from '../commons/components/Navigation';
import NextPageButton from '../commons/components/NextPageButton';
import Paragraphs from '../components/Paragraph';
import React from 'react';
import useNavigation from '../commons/utils/useNavigation';
import { THEME } from '../styles/theme';
import * as PropTypes from 'prop-types';
import { AboutPageContainer } from './styles';

const About = ({ header, style }) => {
   useNavigation();
   return (
      <AboutPageContainer style={style}>
         <Navigation color={THEME.dark} size={5}/>
         <Heading color={THEME.dark} heading={header}/>
         <Paragraphs/>
         <NextPageButton align='flex-end' color={THEME.dark} size={2}/>
      </AboutPageContainer>
   );
};

About.propTypes = {
   header: PropTypes.string.isRequired
};

export default withDataContext(About, DataType.AboutPage);
