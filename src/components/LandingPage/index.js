import Navigation from 'commons/components/Navigation/index';
import NextPageButton from 'commons/components/NextPageButton';
import Background from 'components/LandingPage/Background';
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import useNavigation from 'commons/utils/useNavigation';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
`;

const Landing = () => {
   const { nextRoute } = useNavigation();
   return (
      <div>
         <Background/>
         <Container>
            <Navigation color='light' size={5}/>
            <Header/>
            <NextPageButton align='center' color='light' size={5}
                            nextRoute={nextRoute}/>
         </Container>
      </div>
   );
};

export default Landing;
