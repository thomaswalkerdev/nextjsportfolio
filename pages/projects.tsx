import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  PageHeader,
  Image,
  Box,
  Heading,
} from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import React from "react";
import PortfolioCard from "../components/portfoliocard";

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
