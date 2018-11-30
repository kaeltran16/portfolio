import styled from 'styled-components';

const TextContainer = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const TextBase = styled.h3`
  color: ${props => props.theme.secondary.main};
`;

const TextPrimary = styled(TextBase)`
	font-size: 6rem;
	font-weight: 400;
	letter-spacing: 1rem;
`;
const TextSecondary = styled(TextBase)`
	font-size: 3rem;
	font-weight: 700;
`;

const Text = {
   Container: TextContainer,
   Primary: TextPrimary,
   Secondary: TextSecondary
};

const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
`;

const BackgroundContainer = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary.main};
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;


export { Text, BackgroundContainer, HomeContainer };
