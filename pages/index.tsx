import { PageHeader } from "grommet";
import React from "react";
import ArticlesSnippet from "../components/articles-snippet";
import ExperienceSnippet from "../components/experience-snippet";
import ProjectsSnippet from "../components/projects-snippet";

function Home() {
  return (
    <div className="page__wrapper">
      <div className="homepage__headerwrapper">
        <PageHeader
          title="Thomas Walker"
          subtitle="Full Stack Software Developer"
        />
      </div>

      <ExperienceSnippet />
      <ProjectsSnippet />
      <ArticlesSnippet />
    </div>
  );
}

export default Home;
