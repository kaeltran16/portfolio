import React from 'react';

import NextPageButton from 'commons/components/NextPageButton';
import { WorkContainer } from './styles';
import WorkList from '../components/WorkList';

const WorkPage = () => (
   <WorkContainer>
      <WorkList/>
      <NextPageButton align='flex-end' color='dark' size={2}/>
   </WorkContainer>
);


export default WorkPage;
