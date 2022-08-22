import { PageHeader } from "grommet";
import React from "react";
import ArticlesSnippet from "../components/articles-snippet";
import ExperienceSnippet from "../components/experience-snippet";
import ProjectsSnippet from "../components/projects-snippet";

function Home() {
  return (
    <div className="page__wrapper">
      <PageHeader
        title="Thomas Walker"
        subtitle="Full Stack Software Developer"
      />

      <ExperienceSnippet />
      <ProjectsSnippet />
      <ArticlesSnippet />
    </div>
  );
}

export default Home;
