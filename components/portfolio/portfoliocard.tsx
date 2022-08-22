import {
  Card,
  CardHeader,
  Box,
  Heading,
  Button,
  CardBody,
  CardFooter,
  Image,
} from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import React from "react";

function PortfolioCard(props: IPortfolioCardProps) {
  return (
    <Card className="card" height="medium" width="large" background="light-1">
      <CardHeader className="card__header">
        <Box flex justify="between" direction="row" align="center">
          <Heading margin="none" level="3">
            {props.heading}
          </Heading>
          <Button icon={<Favorite color="red" />} hoverIndicator />
        </Box>
      </CardHeader>
      <CardBody className="card__body" direction="row">
        <Box height="small" width="small" className="card__image">
          <Image alt="demoimage" fit="cover" src={props.imageUrl} />
        </Box>
        <Box height="small">
          <div>{props.description}</div>
        </Box>
      </CardBody>
      <CardFooter pad={{ horizontal: "small" }} background="light-2">
        <Button icon={<Favorite color="red" />} hoverIndicator />
        <Button icon={<ShareOption color="plain" />} hoverIndicator />
      </CardFooter>
    </Card>
  );
}

export interface IPortfolioCardProps {
  heading: string;
  imageUrl: string;
  description: string;
  cardId: string;
}

export default PortfolioCard;
