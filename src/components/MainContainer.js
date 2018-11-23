import { Provider as AppDataProvider } from 'appContext';
import { AboutPage } from 'components/About';
import { ContactPage } from 'components/Contact';
import LandingPage from 'components/LandingPage';
import { Projects } from 'components/Project';
import { SkillPage } from 'components/Skill';
import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/globalStyle';
import theme from 'styles/theme';


const MainContainer = () => (
   <React.Fragment>
      <GlobalStyles/>
      <AppDataProvider value={store}>
         <ThemeProvider theme={theme}>
            <HashRouter>
               <Switch>
                  <Route exact path='/' component={LandingPage}/>
                  <Route exact path='/about' component={AboutPage}/>
                  <Route exact path='/skill' component={SkillPage}/>
                  <Route path='/work' component={Projects}/>
                  <Route exact path='/contact' component={ContactPage}/>
               </Switch>
            </HashRouter>
         </ThemeProvider>
      </AppDataProvider>
   </React.Fragment>
);

export default MainContainer;
