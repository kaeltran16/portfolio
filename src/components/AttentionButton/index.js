import React from 'react';

import { Button, Container } from './styles';

const AttentionButton = ({ url, children, position, delay }) => (
   <Container delay={delay}>
      <Button href={url} target='_blank' position={position}>{children}</Button>
   </Container>
);

export default AttentionButton;
