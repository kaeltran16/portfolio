import styled from 'styled-components';
import { device } from '../../styles/responsive';
import { animated } from 'react-spring/hooks';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`;


const SubHeading = styled.h4`
  font-size: 1.75rem;
  width: 100%;
  justify-content: center;
  display: flex;
  color: ${props => props.theme.accent.dark}
  text-align: center;
  
  @media ${device.mobileS} {
    font-size: 2.5rem;
  } 
`;

const SkillNameList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex: .9;
    align-items: center;
`;

const SkillName = styled(animated.div)`
    font-size: 2rem;
    font-weight: bolder;
    color: ${props => props.theme.primary.dark};

    @media ${device.mobileS} {
      font-size: 2.5rem;
    }
`;

export { Container, SkillName, SkillNameList, SubHeading };
