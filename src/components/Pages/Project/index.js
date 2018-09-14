import React from 'react';
import {Route} from 'react-router-dom';
import {ProjectPage} from "./components";

const Projects = ({match}) => (
    <div>
        <Route path={`${match.path}/:projectId`} component={ProjectPage}/>
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);
export {Projects};