import React from 'react';
import withScroll from "HOCs/withScroll";
import ProjectItem from "./ProjectItem";
import {DataType, withDataContext} from "../../../../appContext";

const Project = ({match, details, header}) => {

    const renderProjectOnRoute = () => {
        const detail = details.find(detail => detail.name === match.params.projectId);
        return detail !== undefined
            ? <ProjectItem key={detail.name} detail={detail} header={header}/>
            : <div>NotFound</div>;
    };
    return (
        <div>
            {renderProjectOnRoute()}
        </div>

    );
};

export const ProjectPage = withScroll(withDataContext(Project, DataType.WorkPage));