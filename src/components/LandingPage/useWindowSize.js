// TODO: splashing after resize
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

const useWindowSize = () => {
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);

   const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };

   useEffect(() => {
      const throttleHandler = throttle(updateWindowDimensions, 300);
      window.addEventListener('resize', throttleHandler);
      // clean up
      return () => {
         window.removeEventListener('resize', throttleHandler);
      };
   }, [width, height]);

   return {
      width,
      height
   };
};

export default useWindowSize;
