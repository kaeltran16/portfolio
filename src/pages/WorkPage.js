import React from 'react';
import { Route } from 'react-router-dom';
import { ProjectPage } from '../components/Project/Project';

const Projects = ({ match }) => (
   <div>
      <Route path={`${match.path}/:projectId`} component={ProjectPage}/>
   </div>
);
export default Projects;
