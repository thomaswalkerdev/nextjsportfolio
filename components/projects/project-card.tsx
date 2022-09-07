import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FormNextLink } from "grommet-icons";
import Link from "next/link";
import React from "react";

function ProjectCard(props: IProjectCardProps) {
  return (
    <Card background="light-6" className="project__card">
      <CardHeader pad="small">{props.header}</CardHeader>
      <CardBody pad="small" className="projects__card-body">
        {props.body}
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-6">
        <div className="projects__card-footer">
          <Link href={"/projects/" + props.header.substring(-1)}>
            <div className="readmore__wrapper">
              <p>Read More</p>
              <Button icon={<FormNextLink color="black" />} hoverIndicator />
            </div>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;

interface IProjectCardProps {
  header: string;
  body: string;
}
