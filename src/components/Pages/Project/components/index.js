import React from 'react';
import withScroll from "HOCs/withScroll";
import ProjectItem from "./ProjectItem";
import {withDataContext} from "../../../../appContext";

this.nextRoute = '';
this.prevRoute = '';
const Project = ({match, details, header}) => {

    const renderProjectOnRoute = () => {
        // TODO: refactor this
        switch (match.params.projectId) {
            case details[0].name:
                this.nextRoute = `/work/${details[1].name}`;
                this.prevRoute = '/skill';
                return <ProjectItem detail={details[0]} header={header}/>;
            case details[1].name:
                this.nextRoute = `/work/${details[2].name}`;
                this.prevRoute = `/work/${details[0].name}`;
                return <ProjectItem detail={details[1]} header={header}/>;
            case details[2].name:
                this.nextRoute = '/contact';
                this.prevRoute = `/work/${details[1].name}`;
                return <ProjectItem detail={details[2]} header={header}/>;
            default:
                return <div>Not found</div>
        }
    };
    return (
        <div>
            {renderProjectOnRoute()}
        </div>

    );
};

export const ProjectPage = withScroll(withDataContext(Project, 'Project'));