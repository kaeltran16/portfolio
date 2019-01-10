import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {
   AboutPage,
   ContactPage,
   LandingPage,
   SkillPage,
   WorkPage
} from '../pages';


const Routes = () => (
   <HashRouter>
      <Switch>
         <Route exact path='/' component={LandingPage}/>
         <Route exact path='/about' component={AboutPage}/>
         <Route exact path='/skill' component={SkillPage}/>
         <Route path='/work' component={WorkPage}/>
         <Route exact path='/contact' component={ContactPage}/>
      </Switch>
   </HashRouter>
);

export default Routes;
