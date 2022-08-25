import { Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FormNextLink } from "grommet-icons";
import React from "react";

function TrailingCard(props: ITrailingCardProps) {
  return (
    <Card background="light-6" className="trailing__card">
      <CardBody pad="small">
        <div className="trailing-card__body">
          <p>See All {props.sectionName}</p>
          <Button icon={<FormNextLink color="black" />} hoverIndicator />
        </div>
      </CardBody>
    </Card>
  );
}

export default TrailingCard;

interface ITrailingCardProps {
  sectionName: string;
}
