import Navigation from 'commons/components/Navigation/index';
import NextPageButton from 'commons/components/NextPageButton';
import Background from 'components/LandingPage/Background';
import React from 'react';
import useNavigation from 'commons/utils/useNavigation';
import WelcomeText from 'components/LandingPage/Header';
import { HomeContainer } from 'components/LandingPage/styles';


const Landing = () => {
   const { nextRoute } = useNavigation();
   return (
      <div>
         <Background/>
         <HomeContainer>
            <Navigation color='light' size={5}/>
            <WelcomeText/>
            <NextPageButton align='center' color='light' size={5}
                            nextRoute={nextRoute}/>
         </HomeContainer>
      </div>
   );
};

export default Landing;
