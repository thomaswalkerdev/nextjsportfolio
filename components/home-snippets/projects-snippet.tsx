import React from "react";
import TrailingCard from "../cards/trailing-card";
import ProjectCard from "../projects/project-card";
function ProjectsSnippet(props: IProjectsSnippetProps) {
  return (
    <div className="snippet__wrapper">
      <h2>Projects</h2>
      <div className="articles__wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <TrailingCard sectionName="Projects" />
      </div>
    </div>
  );
}

export default ProjectsSnippet;

interface IProjectsSnippetProps {}
