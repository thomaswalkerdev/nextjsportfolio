import React from "react";
import { ProjectsService } from "../../services/projects.service";
import TrailingCard from "../cards/trailing-card";
import ProjectCard from "../projects/project-card";
function ProjectsSnippet(props: IProjectsSnippetProps) {
  let projects = ProjectsService.getProjects();
  return (
    <div className="snippet__wrapper">
      <h2>Projects</h2>
      <div className="articles__wrapper">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.header}
              header={project.header}
              body={project.body}
            />
          );
        })}
        <TrailingCard sectionName="Projects" />
      </div>
    </div>
  );
}

export default ProjectsSnippet;

interface IProjectsSnippetProps {}
