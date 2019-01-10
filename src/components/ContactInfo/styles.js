import styled from 'styled-components';
import { device } from '../../styles/responsive';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
const PrimaryHeader = styled.a`
  color: #fff;
  font-size: 5rem;
  text-decoration: none;
  position: relative;
  
  &:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transform-origin: left;
  transition: .25s linear;
  background-color: #fff;
}
&:hover:before,
&:focus:before {
  visibility: visible;
  transform: scaleX(1);
}


@media ${device.mobileS} {
  font-size: 4rem;
}
`;
const SubHeader = styled.div`
  color: ${props => props.theme.secondary.main}
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  @media ${device.mobileS} {
    font-size: 3rem;
  }
`;
const Text = styled.h4`
  
`;
const PhoneNumber = styled.a`
   text-decoration: none;
     color: ${props => props.theme.secondary.main}
`;

const Header = {
   Primary: PrimaryHeader,
   Secondary: SubHeader
};

export { Container, Header, Text, PhoneNumber };
