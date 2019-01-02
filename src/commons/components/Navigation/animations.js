import { useState } from 'react';
import { useSpring } from 'react-spring/hooks';

/*import posed from 'react-pose';

export const AnimatedBackground = posed.div({
   active: {
      scale: 80,
      transition: { duration: 300, ease: 'circIn' }
   },
   inactive: {
      scale: 0,
      transition: { duration: 400, ease: 'circOut' }
   }
});*/

const [active, setActive] = useState(false);

export const scale = useSpring({
   transform: `scale(${active ? '80' : '0'})`,
   from: { transform: 'scale(0)' }
});

