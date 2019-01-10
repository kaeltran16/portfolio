import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { animated } from 'react-spring/hooks';

const ParagraphContainer = styled.div`
  width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	align-self: center;
	backface-visibility: hidden;
	display: flex;
	flex-direction: column;
`;


const ParagraphText = styled(animated.div)`
    width: 70%;
    font-size: 2.5rem;
    font-weight: normal;
    color: ${props => props.theme.primary.dark}
    letter-spacing: .2rem;
    
    &:not(:first-child) {
      margin-top: 4rem;
    }
    
  
  @media ${device.mobileS} {
      font-size: 2.5rem;
      width: 90%;
       &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

const AboutPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 4fr .5fr;
    
    @media ${device.mobileS} {
      grid-template-rows: 1fr .75fr 4fr 1fr;
    }
`;

const AboutPageStyle = {
   Container: AboutPageContainer
};

const ParagraphStyle = {
   Container: ParagraphContainer,
   Text: ParagraphText
};

export { ParagraphStyle, AboutPageStyle };
