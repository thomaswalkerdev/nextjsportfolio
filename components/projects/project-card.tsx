import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FormNextLink } from "grommet-icons";
import Link from "next/link";
import React from "react";

function ProjectCard() {
  return (
    <Card background="light-6" className="project__card">
      <CardHeader pad="small">Some Article</CardHeader>
      <CardBody pad="small" className="projects__card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores qui
        fugit dolorem magni aut labore, incidunt magnam error earum recusandae
        assumenda vel temporibus, tempora enim ullam perferendis? Perspiciatis,
        dolor saepe! Nobis vero ea accusamus id, magnam praesentium quidem aut
        ullam possimus cupiditate! Ut asperiores, soluta amet vel ad, ab, ipsam
        eos corporis quam voluptatum debitis vitae impedit quis ipsum at?{" "}
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-6">
        <div className="projects__card-footer">
          <Link href="/projects/abc">
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
