import Navigation from '../commons/components/Navigation';
import NextPageButton from '../commons/components/NextPageButton';
import LandingBackground from 'components/LandingBackground';
import React from 'react';
import useNavigation from '../commons/utils/useNavigation';
import LandingHeader from 'components/LandingHeader';
import { THEME } from '../styles/theme';
import { LandingPageContainer } from './styles';


const Landing = () => {
   const { nextRoute } = useNavigation();
   return (
      <div>
         <LandingBackground/>
         <LandingPageContainer>
            <Navigation color='light' size={5}/>
            <LandingHeader/>
            <NextPageButton align='center' color={THEME.light} size={5}
                            nextRoute={nextRoute}/>
         </LandingPageContainer>
      </div>
   );
};

export default Landing;
