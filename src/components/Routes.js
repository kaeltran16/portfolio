import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import { AboutPage } from 'components/About';
import { SkillPage } from 'components/Skill';
import { Projects } from 'components/Project';
import ContactPage from 'components/Contact';


const Routes = () => (
   <HashRouter>
      <Switch>
         <Route exact path='/' component={LandingPage}/>
         <Route exact path='/about' component={AboutPage}/>
         <Route exact path='/skill' component={SkillPage}/>
         <Route path='/work' component={Projects}/>
         <Route exact path='/contact' component={ContactPage}/>
      </Switch>
   </HashRouter>
);

export default Routes;
