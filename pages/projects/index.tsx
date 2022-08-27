import { PageHeader } from "grommet";
import React from "react";
import PortfolioCard from "../../components/portfolio/portfoliocard";

function Projects() {
  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="A selection of projects and code"
      />
      <div>
        <PortfolioCard
          heading="This Portfolio Website"
          imageUrl="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          description="Some kind of description"
          cardId="portfolio"
        />

        <PortfolioCard
          heading="This Portfolio Website"
          imageUrl="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          description="Some kind of description"
          cardId="portfolio"
        />
      </div>
    </div>
  );
}

export default Projects;
