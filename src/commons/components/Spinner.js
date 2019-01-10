import React from 'react';
import { Loading } from './styles';

const Spinner = () => (
   <Loading.Container>
      <Loading.Text>I am thinking..</Loading.Text>
      <Loading.Progress/>
   </Loading.Container>
);

export default Spinner;
