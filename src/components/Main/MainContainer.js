import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Provider as AppDataProvider} from 'appContext';
import {theme} from 'theme/globalStyle';
import store from 'store';

import {HashRouter, Route, Switch} from 'react-router-dom'
import {AboutPage, ContactPage, LandingPage, Projects, SkillPage} from "../Pages";
import withPreload from "../../HOCs/withPreload";

const MainContainer = () => (
    <AppDataProvider value={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={withPreload(LandingPage)}/>
                    <Route exact path='/about' component={withPreload(AboutPage)}/>
                    <Route exact path='/skill' component={withPreload(SkillPage)}/>
                    <Route path='/work' component={withPreload(Projects)}/>
                    <Route exact path='/contact' component={withPreload(ContactPage)}/>
                </Switch>
            </HashRouter>
        </ThemeProvider>
    </AppDataProvider>
);

export default MainContainer;
