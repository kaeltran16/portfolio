import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import ProjectCard from "./Card";

const Slider = () => (
    <AwesomeSlider>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </AwesomeSlider>
);

export default Slider;