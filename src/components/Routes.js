import React, { useRef } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { useChain, useSpring, useTransition } from 'react-spring/hooks';
import { AboutPage, ContactPage } from '../pages';

const Routes = ({ location }) => {
   const transRef = useRef();
   const springRef = useRef();
   const items = [
      { path: '/about', component: (props) => AboutPage(props.style) },
      { path: '/contact', component: (props) => ContactPage(props.style) }
   ];
   const transitions = useTransition({
      config: { mass: 5, tension: 200, friction: 100 },
      native: true,
      items,
      keys: location.pathname.split('/').filter(a => a)[0],
      from: {
         width: '100vw',
         height: '100vh',
         border: '0vw solid black'
      },
      leave: {
         width: '95vw',
         height: '92vh',
         border: '3vw solid black',
         transform: 'translateY(0px)'
      },
      ref: transRef
   });

   const props = useSpring({
      config: { mass: 5, tension: 300, friction: 200 },
      from: { transform: 'translateY(0vw)' },
      transform: 'translateY(-100vw)',
      ref: springRef
   });

   useChain([transRef]);

   const render = () => {
      return transitions.map(({ item, key, props: style }) => {
            return (<Route key={key} path={item.path}
                           render={() => item.component(style)}/>
            );
         }
      );
   };
   return (
      <Switch>
         {render()}
      </Switch>
   );
};

export default withRouter(Routes);
