import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider as AppDataProvider} from '../../appContext';
import {theme} from 'theme/globalStyle';
import store from 'store';
import AboutPage from "../Pages/About";


const MainContainer = () => (
    <AppDataProvider value={store}>
        <ThemeProvider theme={theme}>
            <AboutPage/>
        </ThemeProvider>
    </AppDataProvider>
);

export default MainContainer;
