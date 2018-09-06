import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider as AppDataProvider} from '../../appContext';
import {theme} from 'theme/globalStyle';
import store from 'store';
import {LandingPage} from "../Pages/";


const MainContainer = () => (
    <AppDataProvider value={store}>
        <ThemeProvider theme={theme}>
            <LandingPage/>
        </ThemeProvider>
    </AppDataProvider>
);

export default MainContainer;
