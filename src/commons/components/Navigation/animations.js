import posed from 'react-pose';

export const AnimatedBackground = posed.div({
   active: {
      scale: 80,
      transition: { duration: 300, ease: 'circIn' }
   },
   inactive: {
      scale: 0,
      transition: { duration: 400, ease: 'circOut' }
   }
});

