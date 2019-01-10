import React from 'react';
import * as PropTypes from 'prop-types';
import { useSpring } from 'react-spring/hooks';
import { Container, Icon, Link, Text } from './styles';

const SocialButton = ({ style, text, iconName, url }) => {
   const [{ scale }, set] = useSpring(() => ({
      scale: 0,
      config: { mass: 5, tension: 600, friction: 90 }
   }));

   return (
      <Container style={style}>
         <Link href={url} onMouseMove={() => set({ scale: 1 })}
               onMouseLeave={() => set({ scale: 0 })}>
            <Text
               style={{
                  transform: scale.interpolate(scale => `scale(${scale})`)
               }}>
               {text}
            </Text>
            <Icon>
               <use
                  xlinkHref={`${process.env.PUBLIC_URL}
               /assets/sprites.svg#icon-${iconName}`}/>
            </Icon>
         </Link>
      </Container>
   );
};

SocialButton.propTypes = {
   text: PropTypes.string.isRequired,
   iconName: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   style: PropTypes.object.isRequired
};

export default SocialButton;
