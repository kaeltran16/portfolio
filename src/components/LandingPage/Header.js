import { DataType } from 'appContext';
import TextScrambler from 'commons/components/TextScrambler';
import React from 'react';
import { Text } from './styles';
import getData from 'commons/utils/getData';

const WelcomeText = () => {
   const { primaryHeader, subHeader } = getData(DataType.LandingPage);
   return (
      <Text.Container>
         <Text.Primary>
            <TextScrambler delay={100} text={primaryHeader}/>
         </Text.Primary>
         <Text.Secondary>
            <TextScrambler delay={2000} text={subHeader}/>
         </Text.Secondary>
      </Text.Container>
   );
};


export default WelcomeText;
