import React from 'react';
import { SocialButtonStyles as Styles } from './styles';
import * as PropTypes from 'prop-types';

const SocialButton = ({ text, iconName, url }) => {
   return (
      <Styles.Container>
         <Styles.Link href={url}>
            <Styles.Text>{text}</Styles.Text>
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
