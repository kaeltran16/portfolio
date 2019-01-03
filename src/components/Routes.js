import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingPage from 'components/LandingPage';
import { AboutPage } from 'components/About';
import { SkillPage } from 'components/Skill';
import { Projects } from 'components/Project';
import { ContactPage } from 'components/Contact';
import posed, { PoseGroup } from 'react-pose';

const RoutesContainer = posed.div({
   enter: { opacity: 1, delay: 300, beforeChildren: true },
   exit: { opacity: 0 }
});

const Routes = () => (
   <HashRouter>
      <PoseGroup>
         <RoutesContainer key={Math.random()}>
            <Switch>
               <Route exact path='/' component={LandingPage}/>
               <Route exact path='/about' component={AboutPage}/>
               <Route exact path='/skill' component={SkillPage}/>
               <Route path='/work' component={Projects}/>
               <Route exact path='/contact' component={ContactPage}/>
            </Switch>
         </RoutesContainer>
      </PoseGroup>
   </HashRouter>
);

export default Routes;
