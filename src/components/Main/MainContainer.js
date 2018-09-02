import React from 'react';
import {ThemeProvider} from 'styled-components';
import {LandingPage} from 'components/Pages/LandingPage';
import {Provider as AppDataProvider} from '../../appContext';
import {theme} from 'theme/globalStyle';
import store from 'store';


const MainContainer = () => (
    <AppDataProvider value={store}>
        <ThemeProvider theme={theme}>
            <LandingPage/>
        </ThemeProvider>
    </AppDataProvider>
);

export default MainContainer;