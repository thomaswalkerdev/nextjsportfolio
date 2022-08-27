import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FormNextLink } from "grommet-icons";
import Link from "next/link";
import React from "react";

function TrailingCard(props: ITrailingCardProps) {
  return (
    <Card background="light-6" className="trailing__card">
      <CardBody pad="small">
        <div className="trailing-card__body">
          <p>See All {props.sectionName}</p>
          <Link href={"/" + props.sectionName.toLowerCase()}>
            <Button icon={<FormNextLink color="black" />} hoverIndicator />
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default TrailingCard;

interface ITrailingCardProps {
  sectionName: string;
}
