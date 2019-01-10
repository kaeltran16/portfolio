import styled from 'styled-components';

const Container = styled.div`
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
   Primary: TextPrimary,
   Secondary: TextSecondary
};

export { Text, Container };
