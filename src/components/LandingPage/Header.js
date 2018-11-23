import { DataType } from 'appContext';
import TextScrambler from 'commons/components/TextScrambler';
import React from 'react';
import styled from 'styled-components';
import getData from 'commons/utils/getData';

const Container = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const Text = styled.h3`
  color: ${props => props.theme.secondary.main};
`;

const TextPrimary = styled(Text)`
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
`;
const TextPrimarySub = styled(Text)`
	font-size: 3rem;
	font-weight: 700;
`;

const Header = () => {
   const { primaryHeader, subHeader } = getData(DataType.LandingPage);
   return (
      <Container>
         <TextPrimary>
            <TextScrambler delay={100} text={primaryHeader}/>
         </TextPrimary>
         <TextPrimarySub>
            <TextScrambler delay={2000} text={subHeader}/>
         </TextPrimarySub>
      </Container>
   );
};


export default Header;
