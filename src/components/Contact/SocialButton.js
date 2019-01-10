import React from 'react';
import { SocialButtonStyles as Styles } from './styles';
import * as PropTypes from 'prop-types';
import { useSpring } from 'react-spring/hooks';

const SocialButton = ({ style, text, iconName, url }) => {
   const [animation, set] = useSpring(() => ({
      scale: 0,
      config: { mass: 5, tension: 600, friction: 90 }
   }));

   return (
      <Styles.Container style={style}>
         <Styles.Link href={url} onMouseMove={() => set({ scale: 1 })}
                      onMouseLeave={() => set({ scale: 0 })}>
            <Styles.Text
               style={{ transform: animation.scale.interpolate(scale => `scale(${scale})`) }}>
               {text}
            </Styles.Text>
            <Styles.Icon>
               <use
                  xlinkHref={`${process.env.PUBLIC_URL}
               /assets/sprites.svg#icon-${iconName}`}/>
            </Styles.Icon>
         </Styles.Link>
      </Styles.Container>
   );
};

SocialButton.propTypes = {
   text: PropTypes.string.isRequired,
   iconName: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
};

export default SocialButton;
