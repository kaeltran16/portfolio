// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from 'react';
import { __RouterContext } from 'react-router-dom';
import throttle from 'lodash.throttle';

const useNavigation = () => {
   const [nextRoute, setNextRoute] = useState(null);
   const [prevRoute, setPrevRoute] = useState(null);
   const routerContext = useContext(__RouterContext);
   const { history, match } = routerContext;
   const links = ['/', '/about', '/skill', '/work/natours',
      '/work/devpals', '/work/ishop', '/contact'];

   const scrollUp = () => {
      const currentPageIndex = links.findIndex(i => i === match.url);
      if (currentPageIndex !== 0) {
         setPrevRoute(links[currentPageIndex - 1]);
         if (history.location.pathname !== prevRoute) {
            history.push(prevRoute);
         }
      }
   };

   const scrollDown = () => {
      const currentPageIndex = links.findIndex(i => i === match.url);
      if (currentPageIndex === links.length - 1) {
         setNextRoute(links[0]);
      } else {
         setNextRoute(links[currentPageIndex + 1]);
         console.log(nextRoute);
      }
      if (history.location.pathname !== nextRoute) {
         history.push(nextRoute);
      }
   };


   const handleScroll = event => {
      if (event.deltaY < 0) {
         scrollUp();
      } else {
         console.log('scrollinggggg');
         scrollDown();
      }
   };

   useEffect(() => {
      const throttleScroll = throttle(handleScroll, 1200);
      window.addEventListener('scroll', throttleScroll);
      window.addEventListener('wheel', throttleScroll);

      return () => {
         window.removeEventListener('scroll', throttleScroll);
         window.removeEventListener('wheel', throttleScroll);
      };
   });
   return {
      nextRoute, prevRoute, history, match
   };
};

export default useNavigation;
