import { Provider as AppDataProvider } from 'appContext';
import React from 'react';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyle';
import theme from 'styles/theme';
import Routes from 'components/Routes';


const MainContainer = () => (
   <React.Fragment>
      <GlobalStyles/>
      <AppDataProvider value={store}>
         <ThemeProvider theme={theme}>
            <Routes/>
         </ThemeProvider>
      </AppDataProvider>
   </React.Fragment>
);

export default MainContainer;
