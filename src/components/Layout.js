import React from 'react';
import styled from 'styled-components';
import Navigation from '../commons/components/Navigation';

const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const MenuButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 50%;
`;

const Layout = ({ children, currentPage }) => {
  console.log(currentPage);
  const theme = (currentPage === 0 || currentPage === 4) ? 'light' : 'dark';
  return (
    <MainWrapper>
      <MenuButtonContainer>
        <Navigation color={theme} size={5}/>
      </MenuButtonContainer>
      <MainPageContainer>{children}</MainPageContainer>
    </MainWrapper>
  );

};
export default Layout;
