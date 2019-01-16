import React from 'react';
import * as PropTypes from 'prop-types';

import { DataType, withDataContext } from '../appContext';
import Heading from '../commons/components/Heading';
import Navigation from '../commons/components/Navigation';
import NextPageButton from '../commons/components/NextPageButton';
import SkillList from '../components/SkillList';
import { SkillPageContainer } from './styles';
import useNavigation from '../commons/utils/useNavigation';
import { THEME } from '../styles/theme';

const SkillPage = ({ header, skills }) => {
   useNavigation();
   return (
      <SkillPageContainer>
         <Navigation color={THEME.dark} size={5}/>
         <Heading color={THEME.dark} heading={header}/>
         <SkillList skills={skills}/>
         <NextPageButton align='flex-end' color={THEME.dark} size={2}/>
      </SkillPageContainer>
   );
};

SkillPage.propTypes = {
   header: PropTypes.string.isRequired,
   skills: PropTypes.arrayOf(PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      skillNames: PropTypes.arrayOf(PropTypes.string).isRequired
   })).isRequired
};

export default withDataContext(SkillPage, DataType.SkillPage);
