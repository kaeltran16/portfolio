import React from 'react';
import withScroll from "HOCs/withScroll";
import ProjectItem from "./ProjectItem";
import {DataType, withDataContext} from "../../../../appContext";

const Project = ({match, details, header}) => {

    const renderProjectOnRoute = () => {
        // TODO: refactor this
        console.log(match);
        switch (match.params.projectId) {
            case details[0].name:
                return <ProjectItem key={details[0].name} detail={details[0]} header={header}/>;
            case details[1].name:
                return <ProjectItem key={details[1].name} detail={details[1]} header={header}/>;
            case details[2].name:
                return <ProjectItem key={details[2].name} detail={details[2]} header={header}/>;
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

export const ProjectPage = withScroll(withDataContext(Project, DataType.WorkPage));