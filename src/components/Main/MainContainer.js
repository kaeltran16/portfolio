import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as AppDataProvider } from 'appContext';
import { theme } from 'theme/globalStyle';
import store from 'store';

import { HashRouter, Route, Switch } from 'react-router-dom';
import {
  AboutPage,
  ContactPage,
  LandingPage,
  Projects,
  SkillPage
} from '../Pages';
import NotFound from '../../commons/components/NotFound';

const MainContainer = () => (
  <AppDataProvider value={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/skill' component={SkillPage}/>
          <Route path='/work' component={Projects}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </HashRouter>
    </ThemeProvider>
  </AppDataProvider>
);

export default MainContainer;
