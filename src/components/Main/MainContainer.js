import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider as AppDataProvider} from 'appContext';
import {theme} from 'theme/globalStyle';
import store from 'store';

import {HashRouter, Route, Switch} from 'react-router-dom'
import {AboutPage} from "../Pages";
import {ContactPage} from "../Pages/Contact";

const MainContainer = () => (
    <AppDataProvider value={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={ContactPage}/>
                    <Route exact path='/about' component={AboutPage}/>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    </AppDataProvider>
);

export default MainContainer;
