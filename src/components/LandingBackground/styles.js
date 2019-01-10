import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  background-color: ${props => props.theme.primary.main};
  background-size: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;

export { Container };
