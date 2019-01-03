import React from 'react';
import { AttentionButtonStyles } from './styles';
import * as PropTypes from 'prop-types';

const AttentionButton = ({ url, children, position, delay }) => (
   <AttentionButtonStyles.Container delay={delay}>
      <AttentionButtonStyles.Button
         href={url} target='_blank'
         position={position}>
         {children}
      </AttentionButtonStyles.Button>
   </AttentionButtonStyles.Container>
);

AttentionButton.propTypes = {
   url: PropTypes.string.isRequired,
   children: PropTypes.object.isRequired,
   position: PropTypes.oneOf(['right', 'left']).isRequired,
   delay: PropTypes.number.isRequired
};

export default AttentionButton;
